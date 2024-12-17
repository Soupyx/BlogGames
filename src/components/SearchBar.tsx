import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar: React.FC<{ placeholder: string, handleSearch: (query: string) => void }> = ({ placeholder, handleSearch }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const genres = [
    'FPS (First-Person Shooter)',
    'RPG (Role-Playing Game)',
    'MMORPG (Massively Multiplayer Online RPG)',
    'MOBA (Multiplayer Online Battle Arena)',
    'Battle Royale',
    'Adventure',
    'Action',
    'Strategy',
    'Simulation',
    'Racing',
    'Sports',
    'Action-Aventure',
    'Fighting',
    'Platformer',
    'Sandbox',
    'Horror',
    'Survival',
    'Puzzle',
    'Tower Defense',
    'Card Game',
    'Rhythm',
    'Science Fiction',
    'Arcade',
    'Solo',
    'Co-op en ligne',
    'Gestion (Management)',
    'Multi',
    'Party',
    'Musical'
  ];

  const defaultSuggestions = [
    'FPS (First-Person Shooter)',
    'RPG (Role-Playing Game)',
    'MMORPG (Massively Multiplayer Online RPG)',
    'MOBA (Multiplayer Online Battle Arena)',
    'Battle Royale',
    'Adventure',
    'Action'
  ];

  const filteredSuggestions = query === '' ? defaultSuggestions : genres.filter(genre =>
    genre.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    handleSearch(value);
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex items-center w-full">
        <FontAwesomeIcon icon={faSearch} className="text-black absolute left-3 z-10" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} 
          placeholder={placeholder}
          className="border p-2 pl-10 rounded-2xl w-96 text-black"
        />
      </div>
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute top-12 w-full bg-white border rounded-md shadow-lg z-20 transition-transform transform scale-y-100 duration-300 origin-top">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
              onMouseDown={() => {
                setQuery(suggestion);
                handleSearch(suggestion);
                setShowSuggestions(false);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
