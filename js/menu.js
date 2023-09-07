const header = document.querySelector(".header");
const menuMask = document.querySelector(".menu-mask");

function openMenu() {
  if (header.classList.contains("menu-show")) {
    closeMenu();
    return;
  }
  header.classList.toggle("menu-show");
  menuMask.classList.toggle("show");
  window.onscroll = () => {
    window.scroll(0, 0);
  };
}

function closeMenu() {
  menuMask.classList.remove("show");
  header.classList.remove("menu-show");
  window.onscroll = null;
}