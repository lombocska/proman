$(document).ready(function(){

    var state = new State(new LocalStorageImp());
    state.runBoardPage();

    $('#add-board').click(function(){
        var inputTitle = $('#input-board-title').val();
        var inputBody = $('#input-board-body').val();
        state.postandshowBoard(inputTitle, inputBody);
    });

});
