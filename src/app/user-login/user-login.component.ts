import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cr-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  value2: string;

  constructor() {this.value2 = ''}

  ngOnInit(): void{

  }

}
