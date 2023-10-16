import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sideWrapper = document.querySelector('.sidebar-wrapper');
const sideBar = document.querySelector('.sidebar-links');
const linkBtn = [...document.querySelectorAll('.link-btn')];
const subMenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

//hide/show sidebar

toggleBtn.addEventListener('click', () => {
  sideWrapper.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  sideWrapper.classList.remove('show');
});

// set sidebar
sideBar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article>
  <h4>${page}</h4>
  <div class="sidebar-sublinks>
  ${links
    .map((link) => {
      return `<a href="${link.url}">
      <i class="${link.icon}"</i>
      ${link.label}
      </a>
      `;
    })
    .join('')}
  </div>
  </article>`;
  })
  .join('');
