import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { ObjectTranslate } from './customClasses/ObjectTranslate';

@Injectable()
export class TranslateService {

  constructor(private http: Http) { }

  getBooks(title: string) {

    let url = "https://www.googleapis.com/books/v1/volumes?q=intitle:" + title;
    //Call API REST
    return this.http.get(url)
      .map(response => this.extractTitles(response))
      .catch(error => Observable.throw('Server error'));
  }

  private extractTitles(response: Response) {
    return response.json().items.map(book => book.volumeInfo.title)
  }

  /** Call to APIRest
  * translate: ObjectTranslate with the parameters neccesary to call to the APIRest
  */
  translateText(translate: ObjectTranslate){
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(translate);

    let url = "http://localhost:3000/automaticTranslator";
    //Call API REST
    return this.http.post(url, body, options)
      .map((res: Response) => res.json())
      .catch(error => Observable.throw('Error translateText Angular2Ale'));
  }
}
