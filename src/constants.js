// Constante que representa los símbolos de los jugadores en el juego de tic-tac-toe
export const TURNS = {
  X: '❌', // Símbolo para el jugador X
  O: '⚪'  // Símbolo para el jugador O
}

// Matriz que representa todas las combinaciones ganadoras posibles en el juego de tic-tac-toe
export const WINNER_COMBOS = [
  [0, 1, 2], // Primera fila
  [3, 4, 5], // Segunda fila
  [6, 7, 8], // Tercera fila
  [0, 3, 6], // Primera columna
  [1, 4, 7], // Segunda columna
  [2, 5, 8], // Tercera columna
  [0, 4, 8], // Diagonal de izquierda a derecha
  [2, 4, 6]  // Diagonal de derecha a izquierda
]


//Estos comentarios explican el propósito de cada parte del código: TURNS define los símbolos de los jugadores, mientras que WINNER_COMBOS define las combinaciones ganadoras posibles en el juego.