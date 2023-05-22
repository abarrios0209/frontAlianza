import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientsServicesService } from 'src/app/services/clients-services.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  nameModal:string = "Create New Client";
  btnCreateOrUpdate:string = "Create";
  dataSearch:FormGroup =new FormGroup({});
  public datePipe = new DatePipe('en-US');

  constructor(private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<NewClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientsServices:ClientsServicesService,
    private toastr:MatSnackBar) { }

  ngOnInit(): void {
    this.dataForm();
    if(this.data){
      this.dataSearch.get('sharedKey')?.setValue(this.data.sharedKey)
      this.dataSearch.get('businessId')?.setValue(this.data.businessId)
      this.dataSearch.get('phone')?.setValue(this.data.phone)
      this.dataSearch.get('email')?.setValue(this.data.email)
      this.dataSearch.get('startDate')?.setValue(this.datePipe.transform(this.data.startDate, 'yyyy-MM-dd'))
      this.dataSearch.get('endDate')?.setValue(this.datePipe.transform(this.data.endDate, 'yyyy-MM-dd'))
      this.nameModal=`Edit ${this.data.businessId}`
      this.btnCreateOrUpdate="Update"
      console.log(this.dataSearch.value)
    }
  }

  dataForm(){
    this.dataSearch = this.formBuilder.group({
      sharedKey:[''],
      businessId:[''],
      phone:[''],
      email:[''],
      startDate:[''],
      endDate:[''],
    })
  }

  createClient(){
    /* let body={
      sharedKey:'',
      businessId:this.dataSearch.get('businessId')?.value,
      phone:this.dataSearch.get('phone')?.value,
      email:this.dataSearch.get('email')?.value,
      startDate:this.datePipe.transform(this.dataSearch.get('startDate')?.value,'yyyy-MM-dd'),
      endDate:this.datePipe.transform(this.dataSearch.get('endDate')?.value, 'dd-MM-yyyy'),
    }
    console.log(body) */
    console.log(this.dataSearch.value)
    this.clientsServices.createClient(this.dataSearch.value).subscribe({
      next:(res)=>{
        this.toastr.open('Client created sucessfully','',{
          duration: 3 * 1000,
          panelClass: ['sucess-snackbar'],
        })
        this.dialogRef.close(res)
      },error:(e)=>{
        this.toastr.open('Client created error','',{
          duration: 3 * 1000,
          panelClass: ['error-snackbar'],
        })
      }
    })
  }

  updateClient(){
    this.clientsServices.updateClient(this.dataSearch.value).subscribe(res => {
      this.data=res;
      this.dialogRef.close(res)
    })
  }



  close(): void {
    this.dialogRef.close();
  }
}
