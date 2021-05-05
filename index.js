const currentPlayer='0';
const computerPlayer='X';
const score_to_win=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];
let display;

const cells=document.querySelectorAll('.cell');
const playGame= ()=>{
     document.querySelector(".results").style.display="none";
     display=Array.from(Array(9).keys());
}

playGame();
playGame();