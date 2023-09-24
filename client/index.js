// index.js
import 'normalize.css/normalize.css';
import './public/scss/styles.scss';

// Wrap your code in a function to ensure it's executed after the DOM is ready
function Body() {
  window.addEventListener('load', () => {
    const today = new Date();
    const year = today.getFullYear();
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
    const app = document.querySelector('#app');
    app.innerHTML = `
    <nav class="container-fluid">
      <ul>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <strong>
            <a href="." style="color: aqua;">Top Movies</a>
          </strong>
        </li>
      </ul>
      <ul>
        <li>
          <button>Home</button>
        </li>
      </ul>
    </nav>
      <header>
        <h1>Top Movies</h1>
      </header>
      <section>
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
              <button class="btn btn-primary" id="reset-btn">Reset</button>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-12">
            <button class="contrast"
              data-target="modal-example"
              onClick="toggleModal(event)">
              Launch demo modal
            </button>

            <!-- Modal -->
            <dialog id="modal-example">
              <article>
                <a href="#close"
                  aria-label="Close"
                  class="close"
                  data-target="modal-example"
                  onClick="toggleModal(event)">
                </a>
                <h3>Confirm your action!</h3>
                <p>
                  Cras sit amet maximus risus.
                  Pellentesque sodales odio sit amet augue finibus pellentesque.
                  Nullam finibus risus non semper euismod.
                </p>
                <footer>
                  <a href="#cancel"
                    role="button"
                    class="secondary"
                    data-target="modal-example"
                    onClick="toggleModal(event)">
                    Cancel
                  </a>
                  <a href="#confirm"
                    role="button"
                    data-target="modal-example"
                    onClick="toggleModal(event)">
                    Confirm
                  </a>
                </footer>
              </article>
            </dialog>
          </div>
        </div>
      </section>
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