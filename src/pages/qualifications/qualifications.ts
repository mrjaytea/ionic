import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QualificationsProvider } from '../../providers/qualifications/qualifications'
import { Qualifications } from '../../shared/qualifications'
import { baseUrl } from '../../shared/baseUrl';

/**
 * Generated class for the QualificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qualifications',
  templateUrl: 'qualifications.html',
})
export class QualificationsPage implements OnInit
 {

  qualifications: Qualifications[];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private qualificationsService: QualificationsProvider, @Inject('baseUrl') private baseUrl) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QualificationsPage');
  }

  ngOnInit() {
    this.qualificationsService.getQualifications()
      .subscribe(quali => this.qualifications = quali,
        err => this.errMess = err);
  }

}
