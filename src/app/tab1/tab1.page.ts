import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: any;

  constructor(private barcodeScanner: BarcodeScanner) {}

  // función para escanear
  escanear() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.data = barcodeData.text;
    }).catch(err => {
      console.log("Error: ", err);
    });
  }

}
