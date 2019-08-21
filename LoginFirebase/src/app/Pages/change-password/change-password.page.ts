import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { ModalController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  
  private oldPass;
  private newPass;
  oldPassCheck = false;

  private userData = JSON.parse(localStorage.getItem('user_data'));


  constructor(private _loginService: LoginService,
    private _modalController: ModalController,
    public toastController: ToastController) {

  }

  ngOnInit() {
  }

  checkOldPass() {

     this.oldPassCheck = false;

    if (this.userData.pass == this.oldPass) {
      this.oldPassCheck = true;

    }

    console.warn(this.oldPassCheck);
    
  }

  changePassword() {
         this._loginService.changePassword(this.newPass).then(result => {
           if(result) {
            this._modalController.dismiss();
            this.presentToast();
           }
         })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Contraseña cambiada correctamente',
      duration: 2000
    });
    toast.present();
  }

}
