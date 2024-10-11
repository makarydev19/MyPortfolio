import { useEffect, useState } from 'react';
import './header.css';

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('currentMode') ?? 'dark'
  );

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {' '}
      </button>
      {theme === 'dark' ? (
        <img
          src="./batch-5---design-6-1__2_-removebg-preview.png"
          alt=""
          className="logo"
        />
      ) : (
        <img src="/public/myLogo.png" alt="" className="logo" />
      )}

      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            'currentMode',
            theme === 'dark' ? 'light' : 'dark'
          );

          // get value from LS
          setTheme(localStorage.getItem('currentMode'));
        }}
        className="mode flex"
      >
        {theme === 'dark' ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
