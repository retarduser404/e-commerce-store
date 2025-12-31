import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function Header({
  title,
  cartCount,
  onSearch,
  categories,
  selectedCategory,
  onCategoryChange,
  onCartToggle
}) {
  const { theme, toggleTheme, isDark } = useTheme();
  const [searchInput, setSearchInput] = useState('');
  const searchRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  const handleLogoClick = () => {
    setSearchInput('');
    onSearch('');
    onCategoryChange('All');
  };

  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };

  const handleHeaderDoubleClick = () => {
    console.log('Header double clicked!');
  };

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      searchRef.current.focus();
    }
  };

  const handleCategoryClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      const category = event.target.dataset.category;
      handleCategoryChange(category);
    }
  };

  useEffect(() => {
    const handleCapture = (event) => {
      console.log('Capture phase:', event.type);
    };
    document.addEventListener('click', handleCapture, true);
    return () => document.removeEventListener('click', handleCapture, true);
  }, []);

  return (
    <header
      className="header"
      onDoubleClick={handleHeaderDoubleClick}
      onMouseMove={handleMouseMove}
    >
      <div className="header-content">
        <h1
          className="logo"
          onClick={handleLogoClick}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          {title}
        </h1>

        <div className="search-section">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={handleSearchChange}
            className="search-input"
          />

          <div className="categories" onClick={handleCategoryClick}>
            {categories.map(category => (
              <button
                key={category}
                data-category={category}
                className={selectedCategory === category ? 'active' : ''}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="header-actions">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <button className="cart-toggle-btn" onClick={onCartToggle}>
            🛒 Cart: {cartCount}
          </button>

          <div className="mouse-tracker">
            Mouse: {mousePosition.x}, {mousePosition.y}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
