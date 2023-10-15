import React from 'react';
import './Header.scss'
import '@picocss/pico';
const Header = () => {
  return (
  <header className=''>
    <ul className="menu" style={{
      marginInline: `0`,
    }}>
	    <li className="menu__item">
	    	<marquee className="menu__link menu__link--primary" aria-label="Topins Toop">
          <span className="menu__label">Topins ⭐ Toop, Topins ⭐ Toop, Topins ⭐ Toop, Topins ⭐ Toop, Topins ⭐ Toop</span>
	    		{/* <figure className="menu__background">
	    			<video loop autoPlay muted>
	    				<source src={`/video/Header.mp4`} type="video/mp4" />
	    			</video>
	    		</figure> */}
	    	</marquee>
	    </li>
    </ul>
  </header>
)};
export default Header;
