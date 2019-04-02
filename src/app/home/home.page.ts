import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private fire: AngularFireAuth){

  }
  loginwithfacebook(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.fire.auth
      .signInWithPopup(provider)
      .then(res => {
        console.log(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
  }
  logoutoffacebook(){
    this.fire.auth.signOut();

  }

}
