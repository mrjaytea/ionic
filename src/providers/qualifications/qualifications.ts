import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

import { Qualifications } from '../../shared/qualifications'
import { Observable } from 'rxjs/observable'
import { ProcessHttpMessageProvider } from '../process-http-message/process-http-message'
import 'rxjs/operators/map';

import baseUrl from '../../shared/baseUrl'

/*
  Generated class for the QualificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QualificationsProvider {

  constructor(public http: Http, private processHttpMessageProvider: ProcessHttpMessageProvider, @Inject('baseUrl') private baseUrl) {
    console.log('Hello QualificationsProvider Provider');
  }

  getQualifications(): Observable<Qualifications[]>{
    return this.http.get(baseUrl + "qualifications")
      .map(res => this.processHttpMessageProvider.extractData(res))
      .catch(error => this.processHttpMessageProvider.handleError(error));
  }

}
