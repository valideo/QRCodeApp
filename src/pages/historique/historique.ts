import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html',
})
export class HistoriquePage {

  items: any = [];
  iteration: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
  }

  loadMedias(){
    this.nativeStorage.keys()
    .then(data => {
      console.log("Keys :" + data);
      this.items = [];
      for(var i in data){
        if(data[i].substring(0,6) == "qrcode"){
          this.nativeStorage.getItem(data[i])
          .then(data => {
            this.items[this.iteration] = data;
            this.iteration += 1;
          },
          error => console.error(error)
          );
        }
      }
      console.log(this.items);
    },
    error => console.error(error)
  );
  }

  ionViewDidEnter(){
    this.iteration = 0;
    this.loadMedias();
  }

}
