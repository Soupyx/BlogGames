import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/images/logo_blanc.png';
import SearchBar from './SearchBar';
import Profil from '../assets/images/Profil.svg';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleSearch = (query: string) => {
    console.log(query);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-around items-center p-4 bg-gray-800 text-white">
      <Link to="/">
        <img src={logo1} alt="Logo" className="h-17 w-auto" />
      </Link>
      <nav className="flex gap-20 uppercase">
        <Link to="/">Accueil</Link>
        <Link to="/discover_games">Découvrir jeux</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <SearchBar placeholder="Rechercher des jeux..." handleSearch={handleSearch} />
      <div className="relative">
        <img
          src={Profil}
          alt="Profil"
          className="h-10 w-10 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 w-72 bg-white text-black border-none rounded-xl shadow-lg"
          >
            <Link to="/profile" className="block px-4 py-2 hover:bg-blue-100 mt-3">
              Profil
            </Link>
            <Link to="/add_game" className="block px-4 py-2 hover:bg-blue-100">
              Ajouter un jeu
            </Link>
            <Link to="/add_contributor" className="block px-4 py-2 hover:bg-blue-100">
              Ajouter un contributeur
            </Link>
            <hr className="border-t border-black ml-3 mr-3 my-2" />
            <Link to="/user_list" className="block px-4 py-2 hover:bg-blue-100">
              Liste utilisateurs
            </Link>
            <Link to="/pending_games" className="block px-4 py-2 hover:bg-blue-100">
              Jeu en attente
            </Link>
            <hr className="border-t border-black ml-3 mr-3 my-2" />
            <Link to="/settings" className="block px-4 py-2 hover:bg-blue-100">
              Langue
            </Link>
            <div className="flex items-center gap-4">
              <label className="block px-4 py-2 hover:bg-blue-100">Dark mode</label>
              <ThemeToggle />
            </div>
            <hr className="border-t border-black ml-3 mr-3 my-2" />
            <Link to="/logout" className="block px-4 py-2 hover:bg-blue-100 mb-3">
              Déconnexion
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
