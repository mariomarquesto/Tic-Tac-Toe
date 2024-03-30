// Importa el componente Square desde el archivo Square.jsx
import { Square } from './Square.jsx'

// Definición de la función WinnerModal como un componente de función que recibe las propiedades winner y resetGame
export function WinnerModal({ winner, resetGame }) {
  // Si no hay ganador (winner es null), se devuelve null y no se renderiza el componente
  if (winner === null) return null

  // Define el texto que se mostrará dependiendo de si hay un ganador o si es un empate
  const winnerText = winner === false ? 'Empate' : 'Ganó:'

  // Devuelve un fragmento JSX que representa el modal del ganador
  return (
    <section className='winner'>
      <div className='text'>
        {/* Encabezado del modal con el texto de si hubo empate o quién ganó */}
        <h2>{winnerText}</h2>
        
        {/* Sección que muestra el símbolo del ganador (si lo hay) utilizando el componente Square */}
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>

        {/* Botón para reiniciar el juego */}
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
// En resumen, WinnerModal es un componente que muestra un modal indicando quién ganó o si hubo un empate en un juego. Muestra el símbolo del ganador (si lo hay) utilizando el componente Square y proporciona un botón para reiniciar el juego.