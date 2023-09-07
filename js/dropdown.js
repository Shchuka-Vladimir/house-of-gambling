const dropdownMask = document.querySelector(".dropdown-mask");
const selectHeader = document.querySelector(".select-header");

function toggleOption(event) {
  const target = event.target;
  const dropdown = target.nextElementSibling;
  dropdown.classList.toggle("dropdown-hide");
  dropdownMask.classList.toggle("hide");
  for (const child of dropdown.children) {
    child.classList.remove("option-active");
    if (child.textContent === selectHeader.textContent) {
      child.classList.add("option-active");
    }
  }
  toggleOptionActive(dropdown);
}

function toggleOptionActive(dropdown) {
  dropdown.onmouseover = (event) => {
    for (const child of dropdown.children) {
      child.classList.remove("option-active");
    }
    event.target.classList.toggle("option-active");
  };
}

function closeDropdown(event) {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.add("dropdown-hide");
  event.target.classList.add("hide");
}

function selectLanguage(event) {
  const target = event.target;
  selectHeader.textContent = target.textContent === "EN" ? "EN" : "RU";
  target.parentElement.classList.add("dropdown-hide");
  dropdownMask.classList.add("hide");
}