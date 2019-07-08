import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { LoginService } from '../../Services/login.service';
import { userInfo } from 'os';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  user = JSON.parse(localStorage.getItem('user_data'));

  base64Image = this.user.profile_image;

  options = {
    // max images to be selected, defaults to 15. If this is set to 1, upon
	// selection of a single image, the plugin will return it.
	maximumImagesCount: 1,
	
	// max width and height to allow the images to be.  Will keep aspect
	// ratio no matter what.  So if both are 800, the returned image
	// will be at most 800 pixels wide and 800 pixels tall.  If the width is
	// 800 and height 0 the image will be 800 pixels wide if the source
	// is at least that wide.
	width: 200,
	height: 200,
	// quality of resized image, defaults to 100
  quality: 100,
  outputType: 1

};

  constructor(private _router:Router,
    private imagePicker: ImagePicker,
    private _loginService : LoginService) {

console.warn(this.user);

   }

  ngOnInit() {
  }

  

  uploadImage() {
    console.warn("upload Image");

    this.imagePicker.getPictures(this.options).then((result) => {
          console.log('Image URI: ' + result);

          this.base64Image  = 'data:image/jpeg;base64,' + result;

          this.uplaodImageToFB(this.base64Image);
      
    }, (err) => { });

  }

  uplaodImageToFB (base64Image?){
    this._loginService.uploadImageToUser(this.user, base64Image);

  }

  changePassword() {
      console.warn("change password");

  }
  logout(){
    console.log("logOut");

    this._router.navigateByUrl('home');
  }


  

}
