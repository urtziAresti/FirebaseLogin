import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';



@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private userData = JSON.parse(localStorage.getItem('user_data'));

  private isLoged = false;


  constructor(public firestore: AngularFirestore,
    private afAuth: AngularFireAuth) {

    if (this.isLoged == false) {

      this.authenticateUser();
    }
  }

  authenticateUser() {

    this.afAuth.auth.signInAnonymously().then(res => {
      console.warn(res.user);
      this.isLoged = true;
    })
  }

  getAllUsers() {

    return this.firestore.collection('Users').snapshotChanges();

  }

  uploadImageToUser(base64Image?) {

    this.userData.profile_image = base64Image;

    this.firestore.collection('Users').doc(this.userData.id).update({
      'profile_image': base64Image
    })

    localStorage.setItem('user_data', this.userData);
  }

  changePassword(newPassword): Promise<boolean> {

    console.warn("change pass");

    return new Promise((resolve, reject) => {
      
      this.firestore.collection('Users').doc(this.userData.id).update({
        'pass': newPassword
      }).then((result) => {

        console.warn(result);
        
            this.userData.pass = newPassword;
            localStorage.setItem('user_data', JSON.stringify(this.userData));
            resolve(true);
          
        })
        .catch((err) => {
          reject(false);
        });
       
    });
  

  }

  createUser(userId, pass): Promise<boolean> {

    let userData = {
      "user_id": userId,
      "pass": pass,
      "profile_image":''
    };

    return new Promise((resolve, reject) => {

      console.warn(userData);
      
      this.firestore.collection('Users').add(userData)
        .then((result) => {

          if (result != null) {
            resolve(true);
          }
        })
        .catch((err) => {
          reject(false);
        });
    });
  }
}
