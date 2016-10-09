// Board constructor
function Board(id, title, body, cardList) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.cardList = cardList;
}

// Card constructor
function Card (id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
}


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
    this.getandshowData = function(dataType, ids){
        this.implementation.getandshowData(dataType, ids);
    }
    this.delandshowData = function(){
        this.implementation.delandshowData();
    }
    this.postandshowData = function(dataType, obj){
        this.implementation.postandshowData(dataType, obj);
    }
};

// LocalStorageImp constructor implementation (State)
function LocalStorageImp() {

    // get data
    this.getandshowData = function(dataType, ids){
        if (ids) {
            var dataDict = {}
            for (var i in ids) {
                dataDict[ids[i]] = JSON.parse(localStorage.getItem(dataType))[ids[i]]
            }
        }
        else {
            var dataDict = JSON.parse(localStorage.getItem(dataType));
        }

    };
    // del data
    // this.delandshowData = function(dataType, id){
    //
    // }
    // save data
    this.postandshowData = function(dataType, obj){
        // console.log(obj)
        if (localStorage.getItem(dataType)) {
            var dataDict = JSON.parse(localStorage.getItem(dataType));
        }
        else {
            var dataDict = {};
        };
        dataDict[obj.id] = obj;
        localStorage.setItem(dataType, JSON.stringify(dataDict));
    };
};


// DataBase constructor implementation  (State)
