$(document).ready(function(){

    var state = new State(new LocalStorageImp());
    //input value storage functon called
    var a = new Board (2,"title","body", [1, 2]);
    var b = new Board (3,"title","body", [3, 4]);
    // console.log(a.cardList)
    // console.log(a.id)
    state.postandshowData('boardsDict', a);
    // state.postandshowData('boardsDict', b);
    state.getandshowData("boardsDict");

});
