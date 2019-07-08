import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  private username;
  private password;
  
  
    constructor(private _loginService : LoginService) { }

  
  
    crearUsuario(){
      console.warn("create user");
  
      console.warn(this.username);
      console.warn(this.password);
  
  
      this._loginService.createUser(this.username, this.password);
  
  
  
      
  
  
    }

}
