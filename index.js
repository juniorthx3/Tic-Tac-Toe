const currentPlayer='X';
const computerPlayer='0';
const scoreWinner=[[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8],[6, 4, 2]];
const corners=document.querySelectorAll('.corner');

const playGame = () => {
    document.querySelector(".results").style.display="none";
    let board=Array.from(Array(9).keys());

    //Winner
    const winner=(board, player)=>{
      let answer=board.reduce((x, y, z)=>(y === player) ? x.concat(z) : x, []);
      let winner=null;
      for(let [index, win] of scoreWinner.entries() ){
          if(win.every(elem=>answer.indexOf(elem) > -1)){ 
            winner={index:index, player:player};
            break; 
          }
      }
      return winner;
    } 

    //End Game
    const gameOver = (champion)=>{
      for(let index of scoreWinner[champion.index]){ 
          document.getElementById(index).style.backgroundColor=champion.player == currentPlayer ? "rgba(82,82,82,0.3)" : "rgba(255,87,51,0.3";
      }
     corners.forEach(corner => {
         corner.removeEventListener('click', clickPlay, false);
     })
      declareWinner(champion.player == currentPlayer ? "You win!" : "You lose.")
    }

    const emptyCorner=()=>{
        return board.filter(s => typeof s == 'number')
    }

    const computerPlay=()=>{
        return emptyCorner()[0];
    } 

    const declareWinner=(winner)=>{
        document.querySelector(".results").style.display="block";
        document.querySelector(".results .display").innerText=winner;
    }

    const humanPlay=()=>{
        if(emptyCorner().length == 0){
            for(let i=0; i < corners.length; i++){
                corners[i].style.backgroundColor="#EE82EE";
                corners[i].removeEventListener('click', clickPlay, false);
            }
            declareWinner("Tie Game");
            return true;
        } 
        return false;
    }

   //PLAY
    const clickPlay=(cross)=>{
        const play=(crossId, player)=>{ 
            board[crossId] = player;
            document.getElementById(crossId).innerText=player;
            let champion=winner(board, player); 
            if (champion) gameOver(champion)
        }
        if(typeof board[cross.target.id] == 'number') {
            play(cross.target.id, currentPlayer);
            if(!humanPlay()) play(computerPlay(), computerPlayer);
        }
    }
  
    corners.forEach(corner => {
        corner.innerHTML='';
        corner.style.removeProperty('background-color');
        corner.addEventListener('click', clickPlay, false);
    })  
}

//Start Game
playGame();