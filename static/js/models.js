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
    this.delandshowData = function(dataType, id){
        this.implementation.delandshowData(dataType, id);
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
        // console.log(dataDict)


        showBoard(dataDict)
        work(dataDict, "5")
        console.log(g)

    };
    // del data
    this.delandshowData = function(dataType, id){
        var dataDict = JSON.parse(localStorage.getItem(dataType))
        delete dataDict[id]
        localStorage.setItem(dataType, JSON.stringify(dataDict));
    };
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
    // console.log(dataDict)
};



// SECTION: Append new added board to index.html
function showBoard(dataDict){

    var ul = $('<ul></ul>')
    $.each(dataDict, function(i, board){
        ul.append('<div class="board"  id="board_div'+ board.id +'">' +
                '<span class=removeOnClick><button class="btn btn-danger btn-xs remove" data-remove-id = "'+board.id+'" >x</button></span>' +
                '<p id="board_text">'+ board.title + '</p>' +
                '</div>');
        ul.appendTo('#board-container');
        // console.log(board.id)
        // console.log(board.title)

    });
}


// SECTION : searching according to key
var g=[];

if (!Object.keys) {
    Object.keys = function (obj) {
        var keys = [],
            k;
        for (k in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, k)) {
                keys.push(k);
            }
        }
        return keys;
    };
}

function actualType(o)
{
  return Object.prototype.toString.apply(o);
}

var arr=actualType([]);
var obj=actualType({});

function work(a,val)

{

        if (actualType(a) == obj ||actualType(a) == arr)
        {
            for (var j = 0; j < Object.keys(a).length; j++)
            {
              if (Object.keys(a)[j]==val)    g.push(a[Object.keys(a)[j]]);
              else
              work(a[Object.keys(a)[j]],val);
            }
        }


}

// DataBase constructor implementation  (State)
