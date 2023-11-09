import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex items-end justify-between px-10 py-2 text-xl text-gray-200 bg-gradient-to-r from-blue-950 to-purple-900">
      <div className="flex">
        <NavLink to="/" className="flex items-end gap-4">
          <img src={logo} alt="logo" width="50" className="text-gray-200" />
          Alpha Gym
        </NavLink>
      </div>
      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </header>
  );
}
