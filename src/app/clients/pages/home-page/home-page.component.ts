import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewClientComponent } from 'src/app/shared/dialog/new-client/new-client.component';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientsServicesService } from 'src/app/services/clients-services.service';
import { DeleteClientComponent } from 'src/app/shared/dialog/delete-client/delete-client.component';
import { clientsInterface } from '../../interfaces/interfaces';




@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  animal!: string;
  name!: string;
  dataModal:any;
  advanced: boolean = true;
  dataSearch: FormGroup = new FormGroup({});
  displayedColumns: string[] = [
    'sharedKey',
    'bussinedId',
    'email',
    'phone',
    'dataAdd',
    'actions',
  ];
  dataSource = new MatTableDataSource();

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private toastr:MatSnackBar,
    private clientsServices:ClientsServicesService) {}

  ngOnInit(): void {
    this.readAllClients()
    this.dataForm();
  }

  readAllClients(){
    this.clientsServices.readClients().subscribe({
      next:(res)=> {
        this.dataModal = res;
        this.dataSource = new MatTableDataSource(res)
      },error:(e) => {
        console.log(e)
      }
    })
  }

  dataForm() {
    this.dataSearch = this.formBuilder.group({
      businessId: [''],
      phone: [''],
      email: [''],
      startdate: [''],
      enddate: [''],
    });
  }

  advancedSearchFunction() {
    this.advanced = false;
  }

  advancedCancelSearchFunction() {
    this.advanced = true;
    this.readAllClients();
  }

  newClientOrEdit(dataEdit?:any): void {
    const dialogRef = this.dialog.open(NewClientComponent, {
      panelClass: 'dialogStyles',
      data: dataEdit ? dataEdit : '',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.readAllClients();
    });
  }

  deleteClient(element:any){
    const dialogRef = this.dialog.open(DeleteClientComponent, {
      data:element
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.readAllClients();
    });
  }

  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  advancedSearch() {
    const filtro = this.dataSearch.value;
    const objetosFiltrados = this.dataModal.filter((objeto:any) =>
      (filtro.businessId === '' || objeto.businessId.toString() === filtro.businessId) ||
      (filtro.email === '' || objeto.email === filtro.email) ||
      (filtro.endDate === '' || objeto.endDate === filtro.endDate) ||
      (filtro.phone === '' || objeto.phone === filtro.phone) ||
      (filtro.startDate === '' || objeto.startDate === filtro.startDate)
    );
    this.dataSource = new MatTableDataSource(objetosFiltrados)
    this.dataModal = objetosFiltrados;
  }

  exportToCSV() {

    const headers = [
      ['Shared Key'],
      ['Business ID'],
      ['Email'],
      ['Phone'],
      ['Date Added'],
    ];

    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: false,
      showTitle: true,
      title: 'Clients',
      useBom: false,
      headers: ['Shared Key', 'Business ID', 'Email', 'Phone', 'Date Added'],
    };
    new ngxCsv(this.dataModal, 'Clients', options);

    this.toastr.open('CSV downloaded successfully', '', {
      duration: 3 * 1000,
      panelClass: ['sucess-snackbar'],
    });
  }
}
