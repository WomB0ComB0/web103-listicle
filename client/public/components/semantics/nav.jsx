import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = ()  => {
  return (
    <>
      <nav className="">
        <menu>
          <li>
            <strong>
              <NavLink 
                to={`.`}
                className={({
                  isActive
                }) =>  isActive ? `` : ``}
                style={{
                  color: 'aqua'
                }}
              >
                Top Movies
              </NavLink>
            </strong>
          </li>
        </menu>
        <menu>
          <li>
            <NavLink 
              className={({isActive}) =>  {
                isActive ? `` : ``
              }}
              style={{
              
              }}  
            >
              Home
            </NavLink>
          </li>
        </menu>
      </nav>
    </>
  );
};

export default Nav;