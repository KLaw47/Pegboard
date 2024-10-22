// Basic game setup
// 1. Create a 5x5 board
const board = [
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
];

function renderBoard() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = '';
  board.forEach(row => {
      row.forEach(cell => {
          const cellElement = document.createElement('div');
          cellElement.classList.add(cell ? 'peg' : 'empty');
          gameBoard.appendChild(cellElement);
      });
  });
}

renderBoard();
