import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import HeroImg from '../assets/images/banner.png';
import HeroBanner from './HeroBanner';

export default function Header() {
  return (
    <div className="flex justify-between border border-blue-500">
      <div className="border-4 border-cyan-500 w-full">
        <header className="flex items-end justify-between px-10 py-2 text-xl text-gray-200 bg-gradient-to-r from-blue-950 to-purple-900 border-4 border-green-500">
          <div className="flex">
            <NavLink to="/" className="flex items-end gap-4 font-content">
              <img src={logo} alt="logo" width="50" className="text-gray-200" />
              Alpha Gym
            </NavLink>
          </div>
          <div className="flex gap-4">
            <NavLink to="/" className="hover:underline font-content">Home</NavLink>
            <NavLink to="/about" className="hover:underline font-content">About</NavLink>
            <NavLink to="/contact" className="hover:underline font-content">Contact</NavLink>
          </div>
        </header>
        <HeroBanner />
      </div>
      <div className="border-4 border-yellow-600">
        <img src={HeroImg} alt="HeroBanner" width={750} className="rounded-bl-custom border border-gray-500" />
      </div>
    </div>
  );
}
