import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateService } from './services/translates.service';
import { ObjectTranslate } from './services/customClasses/ObjectTranslate';
import { ObjectReturn } from './services/customClasses/ObjectReturn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private books: string[] = [];
  private objectTrans: ObjectTranslate;
  private objectReturn: ObjectReturn[] = [];

  constructor(private http: Http, private service: TranslateService) { }

  search(title: string) {

    this.books = [];

    this.service.getBooks(title).subscribe(
      books => this.books = books,
      error => console.error(error)
    );
  }

  /** Call to service
  *	text: text to translate
  * language: Language to translate text
  */
  translate(text: string, language: string){
  	this.objectTrans = new ObjectTranslate(text, language);
  	this.service.translateText(this.objectTrans).subscribe(
  		response => this.objectReturn = response,
     	error => console.error(error)
	);
  }
}
