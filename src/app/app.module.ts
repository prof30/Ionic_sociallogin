import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

var config = {
  apiKey: "AIzaSyB_dwfWWA8H9HBXN1HPTJogEG9pASzqQhQ",
  authDomain: "sociallogin-f2519.firebaseapp.com",
  databaseURL: "https://sociallogin-f2519.firebaseio.com",
  projectId: "sociallogin-f2519",
  storageBucket: "sociallogin-f2519.appspot.com",
  messagingSenderId: "227536412443"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  AngularFireModule.initializeApp(config),AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
