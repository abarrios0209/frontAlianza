import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientsServicesService } from 'src/app/services/clients-services.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientsServices:ClientsServicesService,
    private toastr:MatSnackBar) { }

  ngOnInit(): void {
  }

  deleteClient(){
    this.clientsServices.deleteClient(this.data).subscribe({
      next:(res)=>{
        this.toastr.open('Client deleted sucessfully','',{
          duration: 3 * 1000,
          panelClass: ['sucess-snackbar'],
        })
        this.dialogRef.close(res);
      },error:(e)=>{
        this.toastr.open('Client deleted error','',{
          duration: 3 * 1000,
          panelClass: ['error-snackbar'],
        })
      }
    })
  }
}
