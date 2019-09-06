import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
roles: any;
  constructor() { }

  ngOnInit() {
    this.getRole();
  }

  getRole(){
    this.roles=localStorage.getItem('roles');
    console.log(this.roles);
    return this.roles;
  }


}
