import 'normalize.css/normalize.css';
import './public/styles/sass/styles.scss';
// import renderMovies from './public/scripts/titles';

function Body() {
  // window.addEventListener('load', () => {
  //   const preload = document.querySelector('.preload');
  //   preload.classList.add('preload-finish');
    const today = new Date();
    const year = today.getFullYear();
    const app = document.querySelector('#app');
    app.innerHTML = `
    <nav class="">
      <menu>
        <li>
          <strong>
            <a href="." style="color: aqua;">Top Movies</a>
          </strong>
        </li>
      </menu>
      <menu>
        <li>
          <button>Home</button>
        </li>
        </menu>
      </nav>
      <header>
        <h1>Top Movies</h1>
      </header>
      <main>
        <section id="main-content" class="container">
          '{renderMovies()}'
        </section>
      </main>
      <footer class="">
        <div id="footer-container">
            <p>Made with
              <span>💜</span>
              by
              <a  href='https://github.com/WomB0ComB0' target="_blank">
                Mike Odnis
              </a>
            </p>
            <p>
              <small>Copywrite © <span id="year">${year}</span> Mike Odnis. All rights reserved</small>
            </p>
        </div>
      </footer>
      `;
  // });
}
Body();