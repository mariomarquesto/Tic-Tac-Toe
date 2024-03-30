// Definición del componente Square como una función de flecha que recibe un objeto de propiedades (children, isSelected, updateBoard, index)
export const Square = ({ children, isSelected, updateBoard, index }) => {
  // Se crea una clase de nombre 'square' y se le añade la clase 'is-selected' si isSelected es verdadero
  const className = `square ${isSelected ? 'is-selected' : ''}`

  // Función que se ejecutará cuando se haga clic en el componente
  const handleClick = () => {
    // Se llama a la función updateBoard pasándole el índice del cuadrado
    updateBoard(index)
  }

  // El componente Square devuelve un div que contiene los hijos (children) y tiene un manejador de clic y una clase CSS
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
//En resumen, este componente Square es un cuadrado interactivo que puede ser seleccionado o no, y que ejecutará una función updateBoard cuando se haga clic en él. El contenido dentro del cuadrado se pasa como children.