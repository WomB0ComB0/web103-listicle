import React from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import '@picocss/pico';
import './Nav.scss'
const Nav = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <nav className="container-fluid">
        <menu>
          <li>
            <a
              href={'/'}
              style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                textDecoration: `none`,
                gap: `0.5rem`,
              }}
            >
              <img src={`/logo.png`} alt="logo" width={100} height={100}
                style={{
                  borderRadius: `50%`,
                  width: `50px`,
                  height: `50px`,
                  objectFit: `cover`,
                  objectPosition: `center`,
                  cursor: `pointer`,
                }} />
              <strong
                style={{
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  textDecoration: `none`,
                  fontSize: `1.2rem`,
                }}
              >
                Topins Toop
              </strong>
            </a>
          </li>
          <li>
          </li>
        </menu>
        <menu>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link" className="primary">Theme</summary>
              <ul role="listbox">
                <li>
                  <button onClick={() => setTheme("auto")}>
                    Auto
                  </button>
                </li>
                <li>
                  <button onClick={() => setTheme("light")}>
                    Light
                  </button>
                </li>
                <li>
                  <button onClick={() => setTheme("dark")}>
                    Dark
                  </button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a
              href={`/`}
              style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                textDecoration: `none`,
              }}
            >
              Home
            </a>
          </li>
        </menu>
      </nav>
    </>
  );
};

export default Nav;