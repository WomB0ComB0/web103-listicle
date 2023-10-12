import React, { useState } from 'react';
import { useTheme } from '../../providers/ThemeProvider';
// import { useSorting } from '../../hooks/useSorting';
import UpIcon from '../icons/UpIcon';
import DownIcon from '../icons/DownIcon';
import '@picocss/pico';
import './Nav.scss'
const Nav = () => {
  const [clicked, setClicked] = useState(false);
  // const handleClick = () => {
  //   return setClicked(!clicked);
  // };
  const { theme, setTheme } = useTheme();
  // const { sortBy, sortOrder, setSortBy, toggleSortOrder } = useSorting(); // Use useSorting hook

  // const handleSortByRating = (order) => {
  //   setSortBy('rating');
  //   toggleSortOrder();
  // };

  // const handleSortByYear = (order) => {
  //   setSortBy('year');
  //   toggleSortOrder();
  // };
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
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link" className="primary">
                Sort By Rating
              </summary>
              <ul>
                <li>
                  {/* props.sortByRating('asc') */}
                  <button onClick={() => {}}>
                    Ascending
                  </button>
                </li>
                <li>
                  {/* props.sortByRating('desc') */}
                  <button onClick={() => {}}>
                    Descending
                  </button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details role='list' dir='rtl'>
              <summary aria-haspopup="listbox" role="link" className="primary">
                Sort by Year
              </summary>
              <ul>
                <li>
                  {/* props.sortByYear('asc') */}
                  <button onClick={() => {}}>
                    Ascending
                  </button>
                </li>
                <li>
                  {/* props.sortByYear('desc') */}
                  <button onClick={() => {}}>
                    Descending
                  </button>
                </li>
              </ul>
            </details>
          </li>

        </menu>
        {/* Authentication Logic */}
        {/* <menu>
          <li>
            <button>
              Sign In
            </button>
          </li>
        </menu> */}
      </nav>
    </>
  );
};

export default Nav;