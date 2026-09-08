const menuButton = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const willOpen = mobileMenu.hidden;
    mobileMenu.hidden = !willOpen;
    menuButton.setAttribute('aria-expanded', String(willOpen));
    menuButton.querySelector('.sr-only').textContent = willOpen ? 'Close navigation' : 'Open navigation';
  });

  mobileMenu.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    mobileMenu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
  });
}
