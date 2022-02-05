import react, { useState, useRef} from "react";
import KartaPostaci from "./KartaPostaci"
import "./form.css"


export default function Form(){
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')
    const [cecha, setCecha] = useState('')
    const [aparycja, setAparycja] = useState('')
    const [charakter, setCharakter] = useState('')
    const [eq, setEq] = useState('')
    const [bio, setBio] = useState('')
    const in_wiek = useRef('')

    function input_wiek(){
        in_wiek.current = "Wiedźmini dożywają do 300 lat"
    }

    return(
        <div className="formularz">
            <p className="noPrint">Wypełni swoją karte postaci:</p> 
            <form className="noPrint">
                <input className="imie" placeholder="imie" value={name} onChange={e => setName(e.target.value)} />{/* Event 9*/}<br/>
                <input className="wiek imie" max="300" placeholder="wiek" type="number" onInput={input_wiek} value={age} onChange={e => setAge(e.target.value)} /><p>{in_wiek.current}</p><br/>{/* Event 11 */}
                <input className="imie" placeholder="kraj" value={country} onChange={e => setCountry(e.target.value)} /><br/>
                <input className="imie" placeholder="cecha" value={cecha} onChange={e => setCecha(e.target.value)} /><br/>
                <br/>
                <textarea className="imie aparycja"placeholder="Tutaj umieść ogólny opis wyglądu postaci. Powinien on mieć minimum 150 słów." value={aparycja} onChange={e => setAparycja(e.target.value)} />
                <textarea className="imie aparycja"placeholder="Tutaj umieść ogólny opis charakteru postaci. Powinien on mieć minimum 150 słów." value={charakter} onChange={e => setCharakter(e.target.value)} />
                <textarea className="imie aparycja"placeholder="Wszystkie przedmioty posiadane przez postać" value={eq} onChange={e => setEq(e.target.value)} />
                <textarea className="imie aparycja"placeholder="Tutaj umieść ogólny opis historii postaci. Powinien on mieć minimum 100 słów." value={bio} onChange={e => setBio(e.target.value)} />
            </form>
            <KartaPostaci name={name} age={age} country={country} cecha={cecha} aparycja={aparycja} charakter={charakter} eq={eq} bio={bio}/>
        </div>
    )
}