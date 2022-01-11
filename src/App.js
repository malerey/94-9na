import Card from "./Card";
import CardContainer from "./CardContainer"
import "./App.css";

// JSX 

// Es una mezcla de JS y HTML. Me permite usar funciones que retornan html, 
// pero con todas las funcionalidades de JS (variables, condicionales, etc)

// Usamos "className" en lugar de "class"
const App = () => {
  const nombre = "Gri"
  return (
    <div className="contenedor">
      <h1>Hola {nombre}</h1>
      <CardContainer></CardContainer>
      <CardContainer></CardContainer>
      <CardContainer></CardContainer>
    </div>
  )
}

export default App;
