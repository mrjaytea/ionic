import { Injectable } from '@angular/core';

import { AboutMe } from "../../shared/aboutme";
import { Observable } from 'rxjs/observable';
import { Http, Response } from '@angular/http';
import { ProcessHttpMessageProvider } from '../process-http-message/process-http-message'
import baseUrl from '../../shared/baseUrl'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the AboutmeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AboutmeProvider {

  constructor(public http: Http, private processHttpMessageProvider: ProcessHttpMessageProvider) {
    console.log('Hello AboutmeProvider Provider');
  }

  getAbout(): Observable<AboutMe>{
    return this.http.get(baseUrl + 'about')
      .map(res => {
        return this.processHttpMessageProvider.extractData(res);
      })
      .catch(error => {
        return this.processHttpMessageProvider.handleError(error);
      })
  }

}
