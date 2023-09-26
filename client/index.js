import './public/styles/sass/styles.scss';
import { Nav, Header, Footer, Card } from './public/components/index';
// import renderMovies from './public/scripts/titles';

function Body() {
  window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
    const app = document.querySelector('#app');
    app.innerHTML = `
      ${Nav}
      ${Header}
      <main>
        <section id="main-content" class="container">
          ${Card}
        </section>
      </main>
      ${Footer}
      `;
  });
}
Body();