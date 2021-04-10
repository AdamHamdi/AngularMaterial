import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
API_KEY='c6f8b689cf284c65946e3e8660fc4aba'
  constructor(private http: HttpClient) { }
  sources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+ this.API_KEY)

  }
  articles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources==bbc&apiKey='+ this.API_KEY)

  }
  articlesByID(source:string){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+ '&apiKey'+ this.API_KEY)

  }
}
