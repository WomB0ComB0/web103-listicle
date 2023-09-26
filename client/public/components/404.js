function FoF() {
  window.addEventListener('load', () => {
    document.querySelector('#404').innerHTML = `
      <section class="f0f">
        <h1>404</h1>
        <p>Page not found.</p>
        <button onclick="window.location.href('/')">
          Go Home
        </button>
      </section>
    `;
  });
}
FoF();