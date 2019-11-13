import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutmePage } from '../pages/aboutme/aboutme';
import { QrScannerPage } from '../pages/qr-scanner/qr-scanner';
import { QualificationsPage } from '../pages/qualifications/qualifications';
import { QuotePage } from '../pages/quote/quote';
import { SkillsPage } from '../pages/skills/skills';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About Me', component: AboutmePage },
      { title: 'Qualifications', component: QualificationsPage },
      { title: 'Skills', component: SkillsPage },
      { title: 'QR Scanner', component: QrScannerPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  openQuote() {
    this.modalCtrl.create(QuotePage).present();
  }
}
