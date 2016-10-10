// outsource from model.js the different functions

function displayBoard(boardObject) {
    var divBoard = $('<div class="board" id=board_'+ boardObject.id +'></div>');
    divBoard.append("<p>BOARD</p>");
    divBoard.append("<p>"+ boardObject.title +" </p>");
    divBoard.append("<p>"+ boardObject.body +" </p>");
    var btnDelete = $('<button class="btn btn-danger">Delete</button>')
    btnDelete.on('click', function(){
        var state = new State(new LocalStorageImp());
        state.delandshowBoard(boardObject.id);
        var board = $('#board_'+ boardObject.id)
        board.hide();
    });
    divBoard.append(btnDelete)

    divBoard.append('<button class="btn btn-default">Card(s)</button>')
    divBoard.appendTo('#board-container');
}
