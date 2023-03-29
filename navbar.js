const menu_button = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

menu_button.addEventListener("click", () => {
  // Toggle the "hidden" class on the menu
  menu.classList.toggle("hidden");

  // Toggle the "hidden" class on the button icon
  menu_button.querySelectorAll("svg").forEach((icon) => {
    icon.classList.toggle("hidden");
  });

  // Set the aria-expanded attribute
  const expanded =
   menu_button.getAttribute("aria-expanded") === "true" || false;
 menu_button.setAttribute("aria-expanded", !expanded);
});