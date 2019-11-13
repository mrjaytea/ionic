import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { Clipboard } from '@ionic-native/clipboard/ngx';

/**
 * Generated class for the QrScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-scanner',
  templateUrl: 'qr-scanner.html',
})
export class QrScannerPage {
  barcodeOptions: BarcodeScannerOptions;
  encodeLink: string;
  encodedData: any={};
  scannedData: string;
  scanError: string;
  encodeError: string;
  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private clipboard: Clipboard) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrScannerPage');
  }

  scan() {
    
    this.barcodeOptions = {
      prompt: 'Scan the barcode'
    }
    this.barcodeScanner.scan(this.barcodeOptions)
      .then((value: BarcodeScanResult) => {this.scannedData = value.text; console.log(value);}
      )
  }

  encode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeLink)
    .then(value => {this.encodedData = value; console.log(value)});
    console.log("Encoded: " + this.encodedData);
  }

}
