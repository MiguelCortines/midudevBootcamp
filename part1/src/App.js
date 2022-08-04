// Aquí

import './App.css';
import Mensaje from './MensajeForastero';
import MensajeProp from './MensajeProp';

// DECLARACION DE LA FUNCION POR DEFECTO. TOTALMENTE VALIDA
/*
function App() {
  return (
    <div className="App">    {/* La "A" mayúscula es importante para que al usar el componente no se crea que es una etiqueta html }
        Hola Mundo           {/* Hay que comentar de esta manera extraña ya que, aunque esto parezca html, en realidad es jsx (javaScript)}
    </div>
  );
}
*/

// DECLARACION DE LA FUNCION CON ARROW FUNCTION

const MensajeAutoctono = () => {
  return (
    <div>
      <h2>Este texto es un componente dentro del archivo "App.js", pero fuera del componente "App"</h2>
      <h4>Poner los componentes fuera del componente "App" es una buena práctica, que mejora el rendimiento entre otras ventajas</h4>
    </div>
  )
}

const App = () => {

  const saludo = '-Qué paa Woo?'
  const a = 2
  const b = 3

  return (
    <div className="App">     {/* La "A" mayúscula es importante para que al usar el componente no se crea que es una etiqueta html */}
        Hola Mundo!           {/* Hay que comentar de esta manera extraña ya que, aunque esto parezca html, en realidad es jsx (javaScript) */}
        <br />
        {saludo + ' -Po aquí estamos'}       {/* No sé cómo poner un salto de linea entre saludo y el string */}
        <h1>Título de la App</h1>
        <strong>Estamos trabajando en ello</strong>
        <div>
          <p>El resultado de la suma de los números {a} y {b} es:</p>
          {a + b}
        </div>
        <MensajeAutoctono />
        <Mensaje />           {/* POR QUÉ FUNCIONA??? LA CACHE??? SE SUPONE QUE ESTOY LLAMANDO A UN COMPONENTE QUE NO EXISTE */}
        <div>
          <MensajeProp color = 'purple' message = 'Este texto es el resultado de otro componente, también externo, llamado "MensajeProp.js"' />
          <MensajeProp color = 'green' message = 'el cual tiene propiedades, lo cual lo hace más reutilizable debido a que el texto' />
          <MensajeProp color = 'blue' message = 'no se declara directamente en "Mensaje prop", sino que se introduce como parámetro en el componente "App"' />
        </div>
    </div>
  );
}


export default App;
