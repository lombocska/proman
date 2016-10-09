$(document).ready(function(){

    var state = new State(new LocalStorageImp());
    //input value storage functon called
    var a = new Board (1,"title","body", [1, 2]);
    var b = new Board (2,"title","body", [3, 4]);
    var c = new Board (3,"title","body", [5, 6]);
    var d = new Board (4,"title","body", [7, 8]);
    // console.log(a.cardList)
    // console.log(a.id)
    state.postandshowData('boardsDict', a);
    state.postandshowData('boardsDict', b);
    state.postandshowData('boardsDict', c);
    state.postandshowData('boardsDict', d);
    state.delandshowData('boardsDict', '1')
    state.getandshowData("boardsDict", ids=[2, 3]);

});
