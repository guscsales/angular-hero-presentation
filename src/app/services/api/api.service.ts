import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { DataService } from '../data/data.service';

import { APP_BASE_API } from './../../app.settings';

@Injectable()
export class ApiService {
  constructor(
    private http: Http
  ) {}

  get(uri: string, data?: any): Promise<any> {
    var params: string = '';

    if(data)
      params = this.encodeToUri(data);

    return this.http.get(APP_BASE_API + uri + params)
                    .toPromise()
                    .catch(this.handleError);

  }

  post(uri: string, data: any): Promise<any>{
    return this.http.post(APP_BASE_API + uri, data)
                    .toPromise()
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private encodeToUri(obj: any): string {
    return '?' + $.param(obj);
  }

}
