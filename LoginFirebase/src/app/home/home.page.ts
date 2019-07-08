import { Component } from '@angular/core';

import { LoginService } from '../Services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public users = [];

  public username;
  public pass;


  constructor(private _loginService: LoginService) {

      this.getAllUsers();
  }


  getAllUsers() {

    console.warn("get all users");

    this._loginService.getAllUsers().subscribe(data => {

      this.users = data.map(item => {
        console.warn(item.payload.doc.data());
        return {
                 id: item.payload.doc.id,
                 ...item.payload.doc.data()
          };
      })
      console.warn(this.users);
    });

  }

  login() {
    console.warn("Asdasd");
    console.warn(this.username);
  }
}
