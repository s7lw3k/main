import './Home.css';
import react from 'react';
import Nav from "./components/Nav"
import tlo from "./components/imgs/tlo.jpg"
import logo from "./components/imgs/logo.png"
import Home_tresc from './components/Home_tresc';

function Home() {
  return (
      <div className='wrapper'>
          <header>
              <img src={tlo} alt="tlo" className="background"/>
              <img src={logo} alt="logo" className="logo"/>
              <h1 className='title'>Wiedźmin</h1>
          </header>
          <Nav />
        <Home_tresc />
      </div>
  );
}

export default Home;
