import { WINNER_COMBOS } from '../constants.js' // Importamos las combinaciones ganadoras desde el archivo de constantes

// Función para verificar si hay un ganador en el tablero
export const checkWinnerFrom = (boardToCheck) => {
  // Recorremos todas las combinaciones ganadoras para ver si X u O ganaron
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo // Extraemos los índices de cada combinación
    if (
      boardToCheck[a] && // Verificamos si hay un símbolo en la posición a
      boardToCheck[a] === boardToCheck[b] && // Verificamos si los símbolos en las posiciones a y b son iguales
      boardToCheck[a] === boardToCheck[c] // Verificamos si los símbolos en las posiciones a y c son iguales
    ) {
      return boardToCheck[a] // Si hay un ganador, devolvemos el símbolo ganador (X o O)
    }
  }
  return null // Si no hay ganador, devolvemos null
}

// Función para verificar si el juego ha terminado en empate
export const checkEndGame = (newBoard) => {
  // Verificamos si hay un empate, es decir, si no hay más espacios vacíos en el tablero
  return newBoard.every((square) => square !== null)
}
//Estos comentarios explican cómo funcionan las funciones checkWinnerFrom y checkEndGame. La primera verifica si hay un ganador en el tablero según las combinaciones ganadoras definidas en WINNER_COMBOS. La segunda función verifica si el juego ha terminado en empate, es decir, si no hay más espacios vacíos en el tablero.