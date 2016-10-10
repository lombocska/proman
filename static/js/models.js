// Board constructor
function Board(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.display = function() {
        displayBoard(this)
    }
}

// Card constructor
function Card (id, boardId, title, body) {
    this.id = id;
    this.boardId = boardId;
    this.title = title;
    this.body = body;
}


// State pattern to handle storage as a Singleton pattern
function State(imp) {
    // singleton pattern
    if (arguments.callee._singletonInstance) {
        return arguments.callee._singletonInstance;
    }
    arguments.callee._singletonInstance = this;


    this.implementation = imp;
    this.changeImp = function(newImp) {
        this.implementation = newImp;
    }
    //BOARD
    this.getandshowBoard = function(){
        this.implementation.getandshowBoard();
    }
    this.delandshowBoard = function(boardId){
        this.implementation.delandshowBoard(boardId);
    }
    this.postandshowBoard = function(board){
        this.implementation.postandshowBoard(board);
    }
    // // CARD
    // this.getandshowCard = function(){
    //     this.implementation.getandshowCard(;
    // }
    // this.delandshowCard = function(){
    //     this.implementation.delandshowCard();
    // }
    // this.postandshowCard = function(){
    //     this.implementation.postandshowCard();
    // }
};

// LocalStorageImp constructor implementation (State)
function LocalStorageImp() {

    // get data
    this.getandshowBoard = function(){
        if (!localStorage.boards){
            var boardDict = {"boards" : []};
            localStorage.boards = JSON.stringify(boardDict);
        }
        else {
            var boardDict = JSON.parse(localStorage.getItem("boards"));
        }
        $.each(boardDict.boards, function(i, board){
            displayBoard(board)
        });
    };
    // del data
    this.delandshowBoard = function(boardId){
        var dictBoard = JSON.parse(localStorage.boards)

        for (var i in dictBoard.boards) {
            if (dictBoard.boards[i].id === boardId){
                dictBoard.boards.splice(i, 1);
                break;
            }
        }
        localStorage.boards = JSON.stringify(dictBoard)
    };

    // save data
    this.postandshowBoard = function(boardObject){
        boardObject.display();

        var boardDict = JSON.parse(localStorage.boards)

        boardDict.boards.push(boardObject)
        localStorage.boards = (JSON.stringify(boardDict))

    };

    // // get data
    // this.getandshowCard = function(){
    //
    // };
    // // del data
    // this.delandshowCard = function(){
    //
    // };
    //
    // // save data
    // this.postandshowCard = function(){
    //
    // };

};


function displayBoard(boardObject) {
    var divBoard = $('<div class="board"></div>');
    divBoard.append("<p>"+ boardObject.title +" </p>");
    divBoard.append("<p>"+ boardObject.body +" </p>");
    divBoard.append('<button class="btn btn-danger">Delete</button>')
    divBoard.appendTo('#board-container');

}



// dataBase constructor implementation  (State)
