import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './config';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegisterComponent } from './Components/register/register.component';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
    ],
  entryComponents: [
    RegisterComponent
  ],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule
     ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
