import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  private username: string;
  private password: string;

  constructor(private _loginService: LoginService,
    private toastController: ToastController,
    private _router: Router) { }

  crearUsuario() {


    let created = this._loginService.createUser(this.username, this.password).then(res => {
      console.warn(res);

      if (res) {
        this.presentToast("Usuario creado correctamente");

        this._router.navigateByUrl('home');
      }
    })
  }




  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
