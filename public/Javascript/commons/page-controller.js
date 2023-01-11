<<<<<<< HEAD
class PageController extends Controller{
    constructor(regex, model, view){
        super(model,view);
        this._regex=regex;
    }

    get regex(){ return this._regex;}
    router(url){
        let result;
        if (result= !!url.match(this.regex)){
            this.view.refresh();
            return result;
        }
    }
=======
class PageController extends Controller{
    constructor(regex, model, view){
        super(model,view);
        this._regex=regex;
    }

    get regex(){ return this._regex;}
    router(url){
        let result;
        if (result= !!url.match(this.regex)){
            this.view.refresh();
            return result;
        }
    }
>>>>>>> 3154d23f6718c3b6cd93b7439093839fe3c1b81c
}