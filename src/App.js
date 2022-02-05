import Nav from "./components/Nav"
import LicznikKrokow from "./components/LicznikKrokow"
import Ani_Ger from "./components/Ani_Ger"
import Form from "./components/Form"
import "./App.css"

export default function App() {
  return (
    <div className="main">
      <Nav />
      <h1 className="noPrint">Mini gry:</h1>
      <LicznikKrokow />
      <h1 className="noPrint">Animacje:</h1>
      <Ani_Ger />
      <h1 className="noPrint">Formularz:</h1>
      <Form />
    </div>
  );
}