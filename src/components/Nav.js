import { Link } from "react-router-dom";
import "./nav.css"
import logo from "./imgs/logo.png"

function Nav() {
  return (
      <nav className='nav'>
        <Link to="/"><img src={logo} alt="logo" className='logo_nav'/></Link> | {"\n"}
        <Link to="/main" className='link'>Main</Link>| {"\n"}
        <Link to="/kraje" className='link'>Krainy</Link>
      </nav>
  );
}

export default Nav;
