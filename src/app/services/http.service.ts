import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })
export class RestService {
  
  readonly base_url = environments.SERVER_URL
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string) {
    console.log(this.base_url + url)
   return this.httpClient.get<T>(this.base_url + url);
  }

  post<T>(url: string,body:any) {
    console.log(this.base_url + url)
   return  this.httpClient.post<T>(this.base_url + url,body);
  }
}
