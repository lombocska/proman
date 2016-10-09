$(document).ready(function(){

    var state = new State(new LocalStorageImp());
    //input value storage functon called
    var a = new Board (2, "title", "body", [1, 2]);
    // console.log(a.id)
    var b = new LocalStorageImp()
    state.postandshowData('boardsDict', a);

});
