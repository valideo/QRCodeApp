import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-generation',
  templateUrl: 'generation.html',
})
export class GenerationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  qrData = null;
  createdCode = null;
 
  createCode() {
    this.createdCode = this.qrData;
  }
 
}
