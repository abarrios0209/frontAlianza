import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';




@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    ClientsRoutingModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ClientsModule { }
