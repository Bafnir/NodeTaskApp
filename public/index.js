<<<<<<< HEAD
<<<<<<< HEAD
let model, editarContadorPageController, editarContadorPageView, incrementarContadorPageView, incrementarContadorPageController, router

function init() {
    model = new TareaAppProxy();
    
    indexPageView = new IndexPageView(model);
    agregarPageView = new AgregarPageView(model);
    verTareaPageView = new VerTareaPageView(model);
    borrarPageView = new BorrarPageView(model);
    modificarPageView = new ModificarPageView(model);
    
    indexController = new IndexController(/\/tareasApp\/(index.html|listado)/ig,model,indexPageView);
    agregarController = new AgregarController(/\/tareasApp\/(agregar)/ig,model,agregarPageView);
    verTareaController = new VerTareaController(/\/tareasApp\/(vertarea)/ig,model,verTareaPageView);
    borrarController = new BorrarController(/\/tareasApp\/(borrartarea)/ig,model,borrarPageView);
    modificarController = new ModificarController(/\/tareasApp\/(modificartarea)/ig,model,modificarPageView);
  

    router = new Router();
    router.addPageController(indexController);
    router.addPageController(agregarController);
    router.addPageController(verTareaController);
    router.addPageController(borrarController);
    router.addPageController(modificarController);
    router.route();
=======
let model, editarContadorPageController, editarContadorPageView, incrementarContadorPageView, incrementarContadorPageController, router

function init() {
    model = new TareaAppProxy();
    
    indexPageView = new IndexPageView(model);
    agregarPageView = new AgregarPageView(model);
    verTareaPageView = new VerTareaPageView(model);
    borrarPageView = new BorrarPageView(model);
    modificarPageView = new ModificarPageView(model);
    
    indexController = new IndexController(/\/tareasApp\/(index.html|listado)/ig,model,indexPageView);
    agregarController = new AgregarController(/\/tareasApp\/(agregar)/ig,model,agregarPageView);
    verTareaController = new VerTareaController(/\/tareasApp\/(vertarea)/ig,model,verTareaPageView);
    borrarController = new BorrarController(/\/tareasApp\/(borrartarea)/ig,model,borrarPageView);
    modificarController = new ModificarController(/\/tareasApp\/(modificartarea)/ig,model,modificarPageView);
  

    router = new Router();
    router.addPageController(indexController);
    router.addPageController(agregarController);
    router.addPageController(verTareaController);
    router.addPageController(borrarController);
    router.addPageController(modificarController);
    router.route();
>>>>>>> 3154d23f6718c3b6cd93b7439093839fe3c1b81c
=======
let model, editarContadorPageController, editarContadorPageView, incrementarContadorPageView, incrementarContadorPageController, router

function init() {
    model = new TareaAppProxy();
    
    indexPageView = new IndexPageView(model);
    agregarPageView = new AgregarPageView(model);
    verTareaPageView = new VerTareaPageView(model);
    borrarPageView = new BorrarPageView(model);
    modificarPageView = new ModificarPageView(model);
    
    indexController = new IndexController(/\/tareasApp\/(index.html|listado)/ig,model,indexPageView);
    agregarController = new AgregarController(/\/tareasApp\/(agregar)/ig,model,agregarPageView);
    verTareaController = new VerTareaController(/\/tareasApp\/(vertarea)/ig,model,verTareaPageView);
    borrarController = new BorrarController(/\/tareasApp\/(borrartarea)/ig,model,borrarPageView);
    modificarController = new ModificarController(/\/tareasApp\/(modificartarea)/ig,model,modificarPageView);
  

    router = new Router();
    router.addPageController(indexController);
    router.addPageController(agregarController);
    router.addPageController(verTareaController);
    router.addPageController(borrarController);
    router.addPageController(modificarController);
    router.route();
>>>>>>> 3154d23f6718c3b6cd93b7439093839fe3c1b81c
}