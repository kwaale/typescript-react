import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <>
      <h1>Contador</h1>
      <Counter/>
      <h1>Usuario + USE effect</h1>
      <Usuario/>
      <TimerPadre />
      <h1>Usuario + Reduccer</h1>
      <ContadorRed />
      <h1>Custom Hooks</h1>
      <Formulario/>
    </>
  );
}

export default App;
