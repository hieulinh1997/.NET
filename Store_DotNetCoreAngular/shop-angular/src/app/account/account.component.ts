import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  login: any;
  
  ngOnInit(): void {
    this.login={
      Email:"",
      Password:""
    }
  }

}
