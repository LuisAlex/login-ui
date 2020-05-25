import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Constants} from '../../model/constants';

export class HelloWorldBean {
  constructor(public message: string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
      private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(Constants.DEV_URL + 'hello-world-bean');
  }
}
