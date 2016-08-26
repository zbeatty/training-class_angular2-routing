import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IBountyHunter } from '../model/bounty-hunter';

@Injectable()
export class BountyHunterService {

  constructor(private http: Http) { }

  getBountyHunters(): Observable<Array<IBountyHunter>> {
    return this.http.get('app/bounty-hunters.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getBountyHunter(id: number): Observable<any> {
    return this.http.get('app/bounty-hunters.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response) {
    let bodyText = res.text();
    if (bodyText) {
      let body = res.json();
      return body || null;
    }
  }

  private handleError(error:Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}
