import React, { Component } from 'react';
import "./licznikKrokow.css"

class LicznikKrokow extends Component {
  constructor(props) {
    super(props);
    this.state = {
            kroki: 1
        }
  }

  reset = (e) => {
      console.log("d")
  }

  wiecejKrokow = () => { //event 5
    const plansza = this.refs.plansza;
    this.setState({kroki:(this.state.kroki+1)});
    if(this.state.kroki > 1000){
        plansza.innerHTML = 'Udało Ci się!'
    }
  }

  render() {
      
    return (
        <div className='kroki noPrint'>
            <div className='plansza' onScroll={this.wiecejKrokow} ref="plansza">
                <div className='wynik' >
                    {this.state.kroki}
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <p className='opis_1'>Każdy wiedźmin powinien ćwiczć wytrzymałość! Twoim zadaniem jest scrollować góra dół aż do uzyskania 1000 punktów.</p>
        </div>
    );
  }
}
 
export default LicznikKrokow;