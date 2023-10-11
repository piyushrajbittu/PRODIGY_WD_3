let currentPlayer = 'X';
let gameOver = false;

function makeMove(cell) {
  if (!cell.textContent && !gameOver) {
    cell.textContent = currentPlayer;
    if (checkWinner()) {
      document.getElementById('winner-text').textContent = `Player ${currentPlayer} wins!`;
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const cells = document.querySelectorAll('.cell');
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      return true;
    }
  }

  return false;
}

function resetBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => (cell.textContent = ''));
  document.getElementById('winner-text').textContent = '';
  currentPlayer = 'X';
  gameOver = false;
}

resetBoard(); // Initialize the game