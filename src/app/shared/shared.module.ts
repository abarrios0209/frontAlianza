import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../clients/pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientLookHistoryComponent } from '../clients/pages/client-look-history/client-look-history.component';
import { EmergencyConfigComponent } from '../clients/pages/emergency-config/emergency-config.component';
import { EmergencyHistoryComponent } from '../clients/pages/emergency-history/emergency-history.component';
import { RouterModule } from '@angular/router';


//Material Modules
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewClientComponent } from './dialog/new-client/new-client.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DeleteClientComponent } from './dialog/delete-client/delete-client.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    ClientLookHistoryComponent,
    EmergencyConfigComponent,
    EmergencyHistoryComponent,
    NewClientComponent,
    DeleteClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule

  ],
  exports:[
    HomePageComponent,
    SidebarComponent,
    ClientLookHistoryComponent,
    EmergencyConfigComponent,
    EmergencyHistoryComponent
  ]
})
export class SharedModule { }
