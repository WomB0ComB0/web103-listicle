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
        <section>
          <form>
            <div class="grid">
              <div class="col-12">
                <div class="input-group">
                  <input type="text" id="search" placeholder="Search" />
                  <button class="btn btn-primary" id="search-btn">Search</button>
                </div>
              </div>
            </div>
            <div class="grid">
              <div class="col-12">
                <div class="input-group">
                  <select id="sort">
                    <option value="rank">Rank</option>
                    <option value="title">Title</option>
                    <option value="rating">Rating</option>
                    <option value="year">Year</option>
                  </select>
                  <select id="order">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                  <button class="btn btn-primary" id="sort-btn">Sort</button>
                </div>
              </div>
            </div>
            <div class="grid">
              <div class="col-12">
                <div class="input-group">
                  <select id="filter">
                    <option value="all">All</option>
                    <option value="title">Title</option>
                    <option value="year">Year</option>
                    <option value="rating">Rating</option>
                  </select>
                  <input type="text" id="filter-input" placeholder="Filter" />
                  <button class="btn btn-primary" id="filter-btn">Filter</button>
                </div>
              </div>
            </div>
            <div class="grid">
              <div class="col-12">
                <div class="input-group">
              </div>
            </div>
          </form>
        </section>
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
// title    img    title_type    netflix_id    synopsis    rating    year    runtime    imdb_id    poster    top250    title_date
Body();