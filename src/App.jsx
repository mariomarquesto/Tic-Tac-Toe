import { useState } from 'react' // Importamos el hook useState de React
import confetti from 'canvas-confetti' // Importamos la librería para efecto de confeti

import { Square } from './components/Square.jsx' // Importamos el componente Square
import { TURNS } from './constants.js' // Importamos la constante TURNS desde el archivo de constantes
import { checkWinnerFrom, checkEndGame } from './logic/board.js' // Importamos funciones para verificar el ganador y el fin del juego
import { WinnerModal } from './components/WinnerModal.jsx' // Importamos el componente WinnerModal
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js' // Importamos funciones para manejar el almacenamiento

function App () {
  // Estado para el tablero, inicializado desde el almacenamiento local o con un tablero vacío
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  // Estado para el turno del jugador, inicializado desde el almacenamiento local o con el turno predeterminado
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // Estado para el ganador del juego, inicializado como null (ningún ganador)
  const [winner, setWinner] = useState(null)

  // Función para reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null)) // Reiniciamos el tablero
    setTurn(TURNS.X) // Reiniciamos el turno al jugador X
    setWinner(null) // Reiniciamos el estado del ganador a null

    resetGameStorage() // Limpiamos el almacenamiento local relacionado con el juego
  }

  // Función para actualizar el tablero cuando un jugador hace clic en un cuadrado
  const updateBoard = (index) => {
    if (board[index] || winner) return // Si el cuadrado ya está ocupado o hay un ganador, no se hace nada

    const newBoard = [...board] // Creamos una copia del tablero
    newBoard[index] = turn // Colocamos el símbolo del jugador actual en la posición correspondiente
    setBoard(newBoard) // Actualizamos el estado del tablero

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X // Cambiamos el turno al otro jugador
    setTurn(newTurn) // Actualizamos el estado del turno

    saveGameToStorage({ // Guardamos el estado actual del juego en el almacenamiento local
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinnerFrom(newBoard) // Verificamos si hay un ganador después de la última jugada
    if (newWinner) {
      confetti() // Disparamos efecto de confeti
      setWinner(newWinner) // Actualizamos el estado del ganador
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Si no hay ganador pero el juego ha terminado, establecemos el estado del ganador como falso (empate)
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button> {/* Botón para reiniciar el juego */}
      <section className='game'>
        {board.map((square, index) => ( // Mapeamos el estado del tablero para renderizar los cuadrados
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {square}
          </Square>
        ))}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} /> {/* Modal para mostrar el ganador del juego */}
    </main>
  )
}

export default App
