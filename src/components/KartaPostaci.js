import React, { Component } from 'react';
import "./kartaPostaci.css" 

class KartaPostaci extends Component {
  constructor(props) {
    super(props);
    this.state = {
            test: "test"
        }
  }

    print = (e) => {
        window.print()
    }

  render() {
    let {name, age, country, cecha, aparycja, charakter, eq, bio} = this.props; 
    if(parseInt(age) > 300){age = 300}
    return (
        <div className="body">
            <div className="wzorkartypostaci">
                <img src="https://i.imgur.com/bWQUX0O.jpeg" className="ikonapostaci" />
                <div className="miano">Miano Postaci</div>
                <div className="opispostaci">
                Miano: {name}<br/> Wiek:  {age}
                <br/> Pochodzenie: {country}
                <br/> Cecha: {cecha}
                <br/><br/>
                </div>

                <div className="miano">Aparycja</div>
                <div className="opispostaci1">
                {aparycja}
                </div>

                <div className="miano">Charakter</div><br/>
                <div className="opispostaci1">
                    {charakter}
                </div>

                <div className="miano">Ekwipunek</div><br/>
                <div className="opispostaci1">
                    {eq}
                </div>

                <div className="miano">Biografia</div><br/>
                <div className="opispostaci1">
                    {bio}
                </div>
                <center><button onMouseDown={this.print} className="noPrint">Print Me</button></center>{/* Event 10*/}
            </div>
        </div>
    );
  }
}
 
export default KartaPostaci;