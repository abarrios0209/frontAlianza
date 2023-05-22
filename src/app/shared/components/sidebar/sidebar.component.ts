import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  list=[
    {
      router:"clients/home",
      nameItem:"Clients"
    },
    {
      router:"clients/clientLook",
      nameItem:"Clients look history"
    },
    {
      router:"clients/emergencyConfig",
      nameItem:"Emergency PIN configuration"
    },
    {
      router:"clients/emergencyHistory",
      nameItem:"Emergency PIN history"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
