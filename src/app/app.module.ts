import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutmePage } from '../pages/aboutme/aboutme';
import { QrScannerPage } from '../pages/qr-scanner/qr-scanner';
import { QualificationsPage } from '../pages/qualifications/qualifications';
import { SkillPage } from '../pages/skill/skill';
import { SkillsPage } from '../pages/skills/skills';
import { QuotePage } from '../pages/quote/quote';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StarRatingModule } from 'ionic3-star-rating';

import { AboutmeProvider } from '../providers/aboutme/aboutme';
import { SkillsProvider } from '../providers/skills/skills';
import { QualificationsProvider } from '../providers/qualifications/qualifications';
import { ProcessHttpMessageProvider } from '../providers/process-http-message/process-http-message';
import { HobbiesProvider } from '../providers/hobbies/hobbies';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import baseUrl from '../shared/baseUrl'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutmePage,
    QrScannerPage,
    QualificationsPage,
    SkillPage,
    SkillsPage,
    QuotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    StarRatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutmePage,
    QrScannerPage,
    QualificationsPage,
    SkillPage,
    SkillsPage,
    QuotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AboutmeProvider,
    SkillsProvider,
    QualificationsProvider,
    ProcessHttpMessageProvider,
    HobbiesProvider,
    { provide: 'baseUrl', useValue: baseUrl },
    BarcodeScanner,
    Clipboard
  ]
})
export class AppModule {}
