// index.js
import 'normalize.css/normalize.css';
import './public/scss/styles.scss';

// Wrap your code in a function to ensure it's executed after the DOM is ready
function Body() {
  window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
    const app = document.querySelector('#app');
      app.innerHTML = `
        <div>
          <p>Test</p>
          <button class="custom-button">Test</button>
        </div>
      `;
      const nav = document.querySelector('nav');
      nav.innerHTML = `
        <div>
          <p>Nav</p>
        </div>
      `;
      app.appendChild(nav);
  });
}

Body();