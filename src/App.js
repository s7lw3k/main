import Nav from "./components/Nav"
import LicznikKrokow from "./components/LicznikKrokow"
import Ani_Ger from "./components/Ani_Ger"
import "./App.css"

export default function App() {
  return (
    <div className="main">
      <Nav />
      <h1>Mini gry:</h1>
      <LicznikKrokow />
      <h1>Animacje:</h1>
      <Ani_Ger />
    </div>
  );
}