import { Component, Inject, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutMe } from '../../shared/aboutme'
import { Hobbies } from '../../shared/hobbies'
import { AboutmeProvider } from '../../providers/aboutme/aboutme'
import baseUrl from '../../shared/baseUrl'

/**
 * Generated class for the AboutmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutme',
  templateUrl: 'aboutme.html',
})
export class AboutmePage implements OnInit{
  about: AboutMe;
  hobbies: Hobbies[];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private aboutMeService: AboutmeProvider, @Inject('baseUrl') private baseUrl) {
  }

  ngOnInit() {
    this.aboutMeService.getAbout()
      .subscribe((about) => this.about = about,
      (errMess) => this.errMess = errMess);

    this.aboutMeService.getAbout()
      .subscribe((about) => this.hobbies = about.hobbies,
      (errMess) => this.errMess = errMess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutmePage');
  }

}
