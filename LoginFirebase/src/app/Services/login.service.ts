import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private noteListRef = this.angularFireDatabase.list<any>('Users');


  constructor(public firestore: AngularFirestore,
              private angularFireDatabase: AngularFireDatabase
) {


     }



  getAllUsers() {

    return this.firestore.collection('Users').snapshotChanges();

  }


  uploadImageToUser (user?, base64Image?){

    user.profile_image = base64Image;


    console.warn(user);
    console.warn(base64Image);
    console.warn(this.noteListRef);


    this.firestore.collection('Users').doc(user.id).update({
      'profile_image': base64Image
    })

  }


  createUser(user,pass){

    console.warn(user,pass);

    let userData = {
      "user_id" : user,
      "pass" : pass,
    };

    this.firestore.collection('Users').add(userData);

  }
}
