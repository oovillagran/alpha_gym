import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" width="50" />
        <NavLink to="/">Alpha Gym</NavLink>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </header>
  );
}
