import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public firestore: AngularFirestore) { }


  getAllUsers() {

    return this.firestore.collection('Users').snapshotChanges();

  }


  getUser (){

  }
}
