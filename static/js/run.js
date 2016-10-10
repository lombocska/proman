$(document).ready(function(){

    var state = new State(new LocalStorageImp());
    state.runBoardPage();

    $('#add-board').click(function(){
        var inputTitle = $('#input-board-title').val();
        var inputBody = $('#input-board-body').val();
        if (inputTitle && inputBody){
            state.postandshowBoard(inputTitle, inputBody);
        }
        else {
            alert("Pls fill all!")
        }
    });
    var card = new Card(1, 2, "title-card", "body-card")
    card.display();
    

});
