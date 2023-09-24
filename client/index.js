import 'normalize.css/normalize.css';
import './public/styles/sass/styles.scss';

function Body() {
  window.addEventListener('load', () => {
    const today = new Date();
    const year = today.getFullYear();
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
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
  });
}
Body();