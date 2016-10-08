// Board constructor
function Board(id, title, body, cardList) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.cardList = [];
}

// Card constructor
function Card (id, title, body) {
    this.id = id;
    this.title = title;
}


// State pattern to handle storage as a Singleton pattern
function State() {
    if (arguments.callee._singletonInstance) {
        return arguments.callee._singletonInstance;
    }
    return arguments.callee._singletonInstance = this;

};


// LocalStorage constructor implementation (State)
//getData
//delData
//postData




// DataBase constructor implementation  (State)
