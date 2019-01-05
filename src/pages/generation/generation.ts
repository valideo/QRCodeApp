import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-generation',
  templateUrl: 'generation.html',
})
export class GenerationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private base64ToGallery: Base64ToGallery, private nativeStorage: NativeStorage,) {
  }

  qrData = null;
  createdCode = null;
 
  createCode() {
    this.createdCode = this.qrData;
    console.log(this.createdCode);
    var currentDate = new Date().toLocaleDateString();
    this.addToHistory(this.createdCode.toString(), currentDate);
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

  addToHistory(value : string, date : string){
    var item = {value, date};
    var nbStorage = 0;
    this.nativeStorage.keys()
    .then(data => {
      for(var i in data){
        if(data[i].substring(0,6) == "qrcode"){
          nbStorage += 1;
        }
      }
    this.nativeStorage.setItem("qrcode"+nbStorage, item)
    .then(
      () => {
        console.log('Stored item!');
      },
      error => console.error('Error storing item', error)
    );
    },
    error => console.error(error)
  );
  }
 
}
