import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@IonicPage()
@Component({
  selector: 'page-generation',
  templateUrl: 'generation.html',
})
export class GenerationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private base64ToGallery: Base64ToGallery) {
  }

  qrData = null;
  createdCode = null;
 
  createCode() {
    this.createdCode = this.qrData;
  }
  saveImage(){

    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    const imageData = canvas.toDataURL("image/jpeg").toString();
    console.log(imageData);

    this.base64ToGallery.base64ToGallery(imageData).then(
      res => console.log('Saved image to gallery ', res),
      err => console.log('Error saving image to gallery ', err)
    );
  }
 
}
