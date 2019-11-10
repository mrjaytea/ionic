import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Skills } from '../../shared/skills';
import { ProcessHttpMessageProvider } from '../process-http-message/process-http-message'
import baseUrl from '../../shared/baseUrl';


/*
  Generated class for the SkillsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SkillsProvider {

  constructor(public http: Http, private processHttpMessageProvider: ProcessHttpMessageProvider, @Inject('baseUrl') private baseUrl) {
    console.log('Hello SkillsProvider Provider');
  }

  getSkills(): Observable<Skills[]> {
    return this.http.get(baseUrl + 'skills')
      .map((res) => this.processHttpMessageProvider.extractData(res))
      .catch((error) => this.processHttpMessageProvider.handleError(error));
  }

  getSkill(id: number): Observable<Skills> {
    return this.http.get(baseUrl + 'skills/' + id)
      .map((res) => this.processHttpMessageProvider.extractData(res))
      .catch((error) => this.processHttpMessageProvider.handleError(error));
  }
}
