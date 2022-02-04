import React, { Component } from 'react';
import mapa_zd from "./imgs/mapa.jpg"
import "./map.css"
import jsonData2 from '../res/text2.json'

class Map extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
            licz: 0
        }
    
    this.txtData2 = () => JSON.parse(JSON.stringify(jsonData2));
    const imgContext = require.context('../res/', false, /\.png$/);
    let img = {};
    this.imgs = imgContext.keys().reduce((icons, file) => {
        const cname = imgContext(file);
        const label = file.slice(2,-4);
        img[label] = cname;
        return img;
    },{});
  }

  handleEvent = (event) => { //1 i 2 event
    const mapa = this.refs.mapa;
    if (event.type === "mouseover") {
           //this.setState({ message: "Mouse Down"});
           mapa.classList.remove("tak");
       } else {
           //this.setState({ message: "Mouse Up"});
           mapa.classList.add("tak");
       }
  }

  zmiana = (event) => { //event 4
    // const info = this.refs.info;
    this.setState({licz:parseInt(event.target.id)})
    // info.innerHTML = this.txtData2().data[event.target.id].text;
  }

  render() {
      
    const items = [];
    let value = this.txtData2().data[this.state.licz].text;
    items.push(
        <div className="info">
            <img className="herb" src={this.imgs['img'+(this.state.licz+1)]} alt=""/>
             <p className="opis">{value}</p>
        </div>
    );
    console.log(typeof(this.state.licz));
    return (
        <div className='mapa_all'>
            <div className="mapa" onMouseOver={this.handleEvent} onMouseLeave={this.handleEvent} >
              <img src={mapa_zd} alt="nie działa :c" className='zd tak' ref="mapa"/>
              <div className='kraj nilfgard' onClick={this.zmiana} id={0}></div>
              <div className='kraj temeria' onClick={this.zmiana} id={1}></div>
              <div className='kraj cintra' onClick={this.zmiana} id={2}></div>
              <div className='kraj brokilon' onClick={this.zmiana} id={5}></div>
              <div className='kraj verden' onClick={this.zmiana} id={3}></div>
              <div className='kraj skelige' onClick={this.zmiana} id={4}></div>
              <div className='kraj cidari' onClick={this.zmiana} id={6}></div>
              <div className='kraj rivia' onClick={this.zmiana} id={7}></div>
              <div className='kraj aedirn' onClick={this.zmiana} id={8}></div>
              <div className='kraj redania' onClick={this.zmiana} id={9}></div>
              <div className='kraj kaedwen' onClick={this.zmiana} id={10}></div>
              <div className='kraj kovir' onClick={this.zmiana} id={11}></div>
            </div>
            {items}
        </div>
    );
  }
}
 
export default Map;