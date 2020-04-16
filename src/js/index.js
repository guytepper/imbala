const menuBtn = document.querySelector('.menu-btn');
const siteNav = document.querySelector('.site-nav');
const siteNavMenu = document.querySelector('.site-nav-menu');
const navClosebtn = document.querySelector('.nav-close-button');
const fadedBackground = document.querySelector('.faded-background');

function toggleMenu() {
  siteNav.classList.toggle('menu-active');
}

menuBtn.onclick = toggleMenu;
navClosebtn.onclick = toggleMenu;
fadedBackground.onclick = toggleMenu;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body').classList.toggle('no-js');
});
