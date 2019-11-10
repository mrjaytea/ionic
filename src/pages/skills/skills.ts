import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Skills } from '../../shared/skills';
import { SkillsProvider } from '../../providers/skills/skills'
import baseUrl from '../../shared/baseUrl'

/**
 * Generated class for the SkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage implements OnInit {

  skills: Skills[];
  skill: Skills;
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private skillsService: SkillsProvider, @Inject('baseUrl') private baseUrl) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }

  ngOnInit() {
    this.skillsService.getSkills()
      .subscribe((skills) => this.skills = skills,
      (error) => this.errMess = error)
  }

}
