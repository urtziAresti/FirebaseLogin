import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { APP_CONFIG } from './config';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _translate: TranslateService
  ) {
    this.initializeApp();
    this.initLanguage();
  }

  initLanguage(){

    const langKey = localStorage.getItem(APP_CONFIG.domain+'_lang');

        if (langKey != null) {
            this.setAppLanguage(langKey);
        } else {
            this.setAppLanguage(APP_CONFIG.defaultLanguage);
        }

  }

  setAppLanguage(lang: string){
    this._translate.use(lang);

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
