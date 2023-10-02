import React from 'react';
import '@picocss/pico';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
        <footer className="">
        <div id="footer-container">
            <p>Made with
              <span>{` `}🩷{` `}</span>
              by{` `}
              <a  href='https://github.com/WomB0ComB0' target="_blank" rel='noreferrer noopener'>
                Mike Odnis
              </a>
            </p>
            <p>
              <small>Copywrite © <span id="year">{year}</span> Mike Odnis. All rights reserved</small>
            </p>
        </div>
      </footer>
  )
};
export default Footer;
