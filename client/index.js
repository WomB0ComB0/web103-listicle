import './public/styles/sass/styles.scss';
import { Nav, Header, Footer, Card } from './public/components/index';

function Body() {
  const content = `
    ${Nav}
    ${Header}
    <main>
      <section id="main-content" class="container">
        ${Card}
      </section>
    </main>
    ${Footer}
  `;

  if (document.readyState === 'complete') {

    replaceLoadingContentWithContent();
  } else {

    window.addEventListener('load', () => {
      replaceLoadingContentWithContent();
    });
  }

  function replaceLoadingContentWithContent() {
    const preload = document.querySelector('.preload');
    if (preload) {
      preload.classList.add('preload-finish');
      const app = document.querySelector('#app');
      app.innerHTML = content;
    }
  }
}

Body();
