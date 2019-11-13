import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Skills } from '../../shared/skills'
import baseUrl from '../../shared/baseUrl'

/**
 * Generated class for the SkillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html',
})
export class SkillPage {

  skill: Skills;

  constructor(public navCtrl: NavController, public navParams: NavParams, @Inject('baseUrl') private baseUrl) {
    this.skill = this.navParams.get('skill');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillPage');
  }

}
