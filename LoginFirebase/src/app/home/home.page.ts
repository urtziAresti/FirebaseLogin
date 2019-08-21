import { Component } from '@angular/core';

import { LoginService } from '../Services/login.service';
import { Observable } from 'rxjs';
import { ModalController, ToastController } from '@ionic/angular';
import { RegisterComponent } from '../Components/register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public users = [];

  public username;
  public pass;


  constructor(private _loginService: LoginService,
    public modalController: ModalController,
    private router: Router,
    private toastController: ToastController
  ) {

    this.getAllUsers();
  }


  getAllUsers() {

    console.warn("get all users");

    this._loginService.getAllUsers().subscribe(data => {

      this.users = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      })
    });

  }

  registro() {

    this.router.navigateByUrl('register');

  }

  login() {
    console.warn("Asdasd");
    console.warn(this.username);


    let user = this.users.find(username => username.user_id === this.username);

    console.warn(user);
    if (user) {
      if (user.pass == this.pass) {
        this.router.navigateByUrl('dashboard');
        localStorage.setItem('user_data', JSON.stringify(user));
      } else {
        this.presentToast("Contraseña incorrecta");
      }
    } else {
      this.presentToast("El Usuario no esta disponible");

    }
  }

  async presentToast(errorMessage) {
    const toast = await this.toastController.create({
      message: errorMessage,
      duration: 2000
    });
    toast.present();
  }


}
