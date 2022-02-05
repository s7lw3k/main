import react, {useState} from "react";
import "./text.css"

export default function Text(){

    const[cp, setCp] = useState('');
    const[cut, setCut] = useState('');

    function kopia(e){
        setCp('Skopiowałeś zawartość')
        console.log(e)
    }
    function wyciecie(e){
        setCut('Wyciołeś zawartość')
        console.log(e)
    }

    return(
        <div className="text noPrint">
            <input defaultValue="Skopiuj zawartość" className="noPrint" onCopy={kopia}/><p className="noPrint">{cp}</p> {/*Event 19 i 20*/}
            <input defaultValue="Wytnij zawartość" className="noPrint" onCut={wyciecie}/><p className="noPrint">{cut}</p>
        </div>
    )
}