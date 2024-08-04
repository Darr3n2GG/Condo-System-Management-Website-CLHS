const contact = document.querySelector(".contact");
const login = document.querySelector(".login");
const headerGuest = document.querySelector(".headerGuest");
const headerRes = document.querySelector(".headerRes");

const res_login = document.querySelector(".res_login");
const cont_page = document.querySelector(".cont_page");
const logButton = document.querySelector(".logButton");
const close_but = document.querySelector(".close");

res_login.addEventListener("click", () => {
  login.style.display = "flex";
});

cont_page.addEventListener("click", () => {
  contact.style.display = "flex";
});

close_but.addEventListener("click", () => {
  login.style.display = "none";
});

logButton.addEventListener("click", () => {
  login.style.display = "none";
  headerGuest.style.display = "none";
  headerRes.style.display = "block";
});