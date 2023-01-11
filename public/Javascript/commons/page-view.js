<<<<<<< HEAD
class PageView extends View {
    constructor(model){
        super(model, 'main');
        this.content = `<h1> Sin contenido </h1>`
    }
    getId(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let id = urlParams.get('id');
        return id;
    }
=======
class PageView extends View {
    constructor(model){
        super(model, 'main');
        this.content = `<h1> Sin contenido </h1>`
    }
    getId(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let id = urlParams.get('id');
        return id;
    }
>>>>>>> 3154d23f6718c3b6cd93b7439093839fe3c1b81c
}