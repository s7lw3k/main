import React, { Component } from 'react';
import "./licznikKrokow.css"

class LicznikKrokow extends Component {
  constructor(props) {
    super(props);
    this.state = {
            kroki: 1
        }
  }

  wiecejKrokow = () => { //event 5
    const plansza = this.refs.plansza;
    this.setState({kroki:(this.state.kroki+1)});
    if(this.state.kroki > 1000){
        plansza.innerHTML = "Udało Ci się!"
    }
  }

  render() {
      
    return (
        <div>
            <div className='plansza' onScroll={this.wiecejKrokow} ref="plansza">
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            {this.state.kroki}<br/>
            </div>
            <p>Każdy wiedźmin powinien ćwiczć wytrzymałość! Twoim zadaniem jest scrollować góra dół aż do uzyskania 1000 punktów.</p>
        </div>
    );
  }
}
 
export default LicznikKrokow;