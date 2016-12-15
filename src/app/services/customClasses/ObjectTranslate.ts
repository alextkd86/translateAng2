export class ObjectTranslate {
	private text:string;
	private language:string;
    constructor(text: string, language: string){
    	this.text = text;
    	this.language = language;
    }

    getText(){
    	return this.text;
    }

    setText(text){
        this.text = text;
    }

    getLanguage(){
    	return this.language;
    }

    setLanguage(language){
        this.language = language;
    }

}