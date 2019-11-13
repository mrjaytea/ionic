import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import baseUrl from '../../shared/baseUrl';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, @Inject('baseUrl') private baseUrl) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
