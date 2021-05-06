const currentPlayer='X';
const computerPlayer='0';
const scoreWinner=[[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8],[6, 4, 2]];
let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const corners=document.querySelectorAll('.corner');
const playGame = () => {
    document.querySelector(".results").style.board="none";
    const winner=(board, player)=>{
      let answer=board.reduce((x, y, z)=>(y === player) ? x.concat(z) : x, []);
      let winner=null;
      for(let [index, win] of scoreWinner.entries()){
          if(win.every(elem=>answer.indexOf(elem) > -1)){
            winner={index:index, player:player};
            break; 
          }
      }
      return winner;
    }
    const gameOver = (champion)=>{
      for(let i of scoreWinner[champion, i]){
          document.getElementById(i).style.backgroundColor=champion.player == currentPlayer ? "blue" : "red";
      }
     corners.forEach(corner => {
         corner.removeEventListener('click', clickPlay, false)
     })
    }

    const clickPlay=(cross)=>{
        const play=(crossId, player)=>{
            board[crossId] = player;
            document.getElementById(crossId).innerText=player;
            let champion=winner(board, player);
            if (champion) gameOver(champion)
        }
        play(cross.target.id, currentPlayer)
    }
    corners.forEach(corner => {
        corner.innerHTML='';
        corner.addEventListener('click', clickPlay, false);
    })  
}

playGame();