import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { config } from 'rxjs';
import { languages, APP_CONFIG } from '../../config';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.page.html',
  styleUrls: ['./change-language.page.scss'],
})
export class ChangeLanguagePage implements OnInit {

  private userData = JSON.parse(localStorage.getItem('user_data'));

  private languages = languages;

  actualLang: string;




  constructor(private _modalController: ModalController,
    public toastController: ToastController,
    private _translate: TranslateService) {

      console.warn(this.languages);
     }

  ngOnInit() {

    this.getLangPreference();
  }

  changelanguage() {
    // this._loginService.changePassword(this.newPass).then(result => {
    //   if(result) {
    //    this._modalController.dismiss();
    //    this.presentToast();
    //   }
    // })
}

private getLangPreference() {
  this.actualLang = localStorage.getItem(APP_CONFIG.domain+'_lang');
}


selectLang(event: any){
  console.warn("select lang");

  const selectedLanguage = event.detail.value;

  this.actualLang = selectedLanguage;
  localStorage.setItem(APP_CONFIG.domain+'_lang',this.actualLang);

  this._translate.use(this.actualLang);

  // this._translateUtils.setAppLanguage(selectedLanguage);

  this._modalController.dismiss();

}




}
