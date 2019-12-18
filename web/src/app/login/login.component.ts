import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  selected = 'signin' ;
  constructor() { }

  ngOnInit() {
  }

  select(selected){
    if (selected == 'signin'){
      this.selected = 'signin' ;
    }
    if (selected == 'signup'){
      this.selected = 'signup' ;
    }
  }
}
