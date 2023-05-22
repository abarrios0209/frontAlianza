import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientLookHistoryComponent } from './pages/client-look-history/client-look-history.component';
import { EmergencyConfigComponent } from './pages/emergency-config/emergency-config.component';
import { EmergencyHistoryComponent } from './pages/emergency-history/emergency-history.component';


const routes:Routes =[
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'clientLook',
    component:ClientLookHistoryComponent
  },
  {
    path:'emergencyConfig',
    component:EmergencyConfigComponent
  },
  {
    path:'emergencyHistory',
    component:EmergencyHistoryComponent
  },
  {
    path:'**',
    redirectTo:'home'
  }
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ClientsRoutingModule { }
