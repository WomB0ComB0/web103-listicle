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
    <article>
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
            <div class="input-group">
              <button class="btn btn-primary" id="add-btn">Add</button>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="input-group">
              <button class="btn btn-primary" id="delete-btn">Delete</button>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="input-group">
              <button class="btn btn-primary" id="update-btn">Update</button>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="input-group">
              <button class="btn btn-primary" id="save-btn">Save</button>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-12">
            <div class="input-group">
              <button class="btn btn-primary" id="load-btn">Load</button>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-12">
            <table id="titles">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Title</th>
                  <th>Rating</th>
                  <th>Year</th>
                  <th>Title Date</th>
                  <th>Synopsis</th>
                </tr>
              </thead>
              <tbody id="titles-body">
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <footer>
        <p>
          &copy; <span id="year"></span> Top Movies
        </p>
      </footer>
    </article>
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