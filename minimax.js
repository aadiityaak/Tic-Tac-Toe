function nextTurn(){
    //AI to make its turn
    let available = []; 
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        if(board[i][j] == ''){
          available.push({i, j});
        }
      }
    }
    let move = random(available);
    board[move.i][move.j] = ai;
    curentPlayer = human;
  }