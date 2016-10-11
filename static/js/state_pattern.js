// State pattern to handle storage as a Singleton pattern
function State(imp) {
    if (arguments.callee._singletonInstance) {
        return arguments.callee._singletonInstance;
    }
    arguments.callee._singletonInstance = this;

    this.implementation = imp;
    this.changeImp = function(newImp) {
        this.implementation = newImp;
    }
    //BOARD
    this.runBoardPage = function() {
        this.implementation.runBoardPage();
    }
    this.getandshowBoard = function(){
        this.implementation.getandshowBoard();
    }
    this.delandshowBoard = function(boardId){
        this.implementation.delandshowBoard(boardId);
    }
    this.postandshowBoard = function(inputTitle, inputBody){
        this.implementation.postandshowBoard(inputTitle, inputBody);
    }

    // CARD
    this.runCardPage = function(boardId) {
        this.implementation.runCardPage(boardId);
    }
    this.getandshowCard = function(boardId){
        this.implementation.getandshowCard(boardId);
    }
    this.delandshowCard = function(boardId, cardId){
        this.implementation.delandshowCard(boardId, cardId);
    }
    this.postandshowCard = function(inputTitle, inputBody, boardId){
        this.implementation.postandshowCard(inputTitle, inputBody, boardId);
    }
};
