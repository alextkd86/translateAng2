export class ObjectReturn {
	private textIn:string;
	private languageIn:string;
    private textOut:string;
    private languageOut:string;

    constructor(textIn: string, languageIn: string, textOut: string, languageOut: string){
    	this.textIn = textIn;
    	this.languageIn = languageIn;
        this.textOut = textOut;
        this.languageOut = languageOut;
    }

    getTextIn(){
    	return this.textIn;
    }

    setTextIn(textIn){
        this.textIn = textIn;
    }

    getLanguageIn(){
    	return this.languageIn;
    }

    setLanguageIn(languageIn){
        this.languageIn = languageIn;
    }

    getTextOut(){
        return this.textOut;
    }

    setTextOut(textOut){
        this.textOut = textOut;
    }

    getLanguageOut(){
        return this.languageOut;
    }

    setLanguageOut(languageOut){
        this.languageOut = languageOut;
    }

}