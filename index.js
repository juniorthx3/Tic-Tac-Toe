const currentPlayer='X';
const computerPlayer='0';
const scoreWinner=[[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8],[6, 4, 2]];
let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const corners=document.querySelectorAll('.corner');
const playGame = () => {
    document.querySelector(".results").style.board="none";
    const clickPlay=(cross)=>{
        const play=(crossId, player)=>{
            board[crossId] = player;
            document.getElementById(crossId).innerText=player;
        }
        play(cross.target.id, currentPlayer)
    }
    corners.forEach(corner => {
        corner.innerHTML='';
        corner.addEventListener('click', clickPlay, false);
    }) 
}

playGame();