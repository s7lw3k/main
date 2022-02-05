import react, {useState, useRef} from "react"
import Nav from "./components/Nav"
import LicznikKrokow from "./components/LicznikKrokow"
import Ani_Ger from "./components/Ani_Ger"
import Form from "./components/Form"
import "./App.css"
import Clock from "./components/Clock"
import Text from "./components/Text"

export default function App() {

  const [guzik, setGuzik] = useState('')
  const tak = useRef()

  function pokaz_guzik(e){
    tak.current.classList.remove("none")
    setGuzik(e.key)
  }
  function hide(e){
    tak.current.classList.add("none")
  }
  
function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragging() {
  document.getElementById("demo").innerHTML = "Element is being dragged";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("demo").innerHTML = "Element was dropped";
}

  return (
    <div className="main" onKeyDown={pokaz_guzik} onKeyUp={hide}> {/*Event 12 i 13 */}
      <Clock/> {/*Cykl życia posiada zegar */}
      <p className="guzik none" ref={tak} >{guzik}</p>
      <Nav />
      <h1 className="noPrint">Mini gry:</h1>
      <LicznikKrokow />
      <h1 className="noPrint">Animacje:</h1>
      <Ani_Ger />
      <h1 className="noPrint" >Formularz:</h1>
      <Form />
      <h1 className="noPrint">Przenoszenie napisu:</h1>
      <div className="flex_wrap noPrint">
        <div className="droptarget noPrint" onDrop={drop} onDragOver={allowDrop}>{/*Event 14, 15, 16, 17 */}
          <p onDragStart={dragStart} onDrag={dragging} draggable="true" id="dragtarget">Wiedźmin w podróży</p>
        </div>
        <p id="demo" className="noPrint"></p>
        <div className="droptarget noPrint" onDrop={drop} onDragOver={allowDrop}></div>
        </div>

      <Text/>
      </div>
  );
}