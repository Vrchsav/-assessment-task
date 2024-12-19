import React, { useState, useContext } from 'react';
import { logoNonResponsive } from '../../assets/assets.js';
import { Link } from 'react-router-dom';
import { TimerContext } from '../../Context/TimeContext.jsx';

const Navbar = ({ SetEndClassMenu }) => {
  const { timeLeft } = useContext(TimerContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="p-3 flex justify-between items-center bg-white relative">
      {/* Logo and Title */}
      <Link to="/" className="flex items-center gap-2">
        <img
          className="object-cover max-w-12 max-h-12"
          src={logoNonResponsive}
          alt="Logo"
        />
        <span className="md:hidden text-3xl font-medium">codingal</span>
        <span className="hidden md:block text-lg font-medium">Trial Lesson [Grade 1-3]</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <Link className="font-medium hover:text-gray-500" to="/passengers">
          Passengers
        </Link>
        <Link className="font-medium hover:text-gray-500" to="/post">
          Post
        </Link>
        <div className="text-xl">{formatTime(timeLeft)}</div>
        <button
          className="bg-primary text-white px-5 py-2 rounded hover:border"
          onClick={() => SetEndClassMenu(true)}
        >
          End Class
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="text-3xl cursor-pointer md:hidden"
        onClick={handleMenuToggle}
      >
        <i className={`fa-solid ${showMobileMenu ? 'fa-xmark' : 'fa-bars'}`} />
      </button>

      {/* Dropdown Menu */}
      {showMobileMenu && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link
                className="font-medium hover:text-gray-500"
                to="/passengers"
                onClick={() => setShowMobileMenu(false)}
              >
                Passengers
              </Link>
            </li>
            <li>
              <Link
                className="font-medium hover:text-gray-500"
                to="/post"
                onClick={() => setShowMobileMenu(false)}
              >
                Post
              </Link>
            </li>
            <li>
              <button
                className="bg-primary text-white px-5 py-2 rounded"
                onClick={() => {
                  setShowMobileMenu(false);
                  SetEndClassMenu(true);
                }}
              >
                End Class
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
