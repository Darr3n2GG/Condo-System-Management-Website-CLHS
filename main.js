const contact = document.querySelector(".contact");
const login = document.querySelector(".login");
const headerGuest = document.querySelector(".headerGuest");
const headerResidence = document.querySelector(".headerResidence");

const res_login = document.querySelector(".res_login");
const cont_page = document.querySelectorAll(".cont_page");
const logButton = document.querySelector(".logButton");
const close_but = document.querySelectorAll(".close");

res_login.addEventListener("click", () => {
  login.style.display = "flex";
});

close_but.forEach((button) => { //forEach calls elements of an array separately
  button.addEventListener("click", () => {  //addEventListener only works when one node is called
    button.parentNode.style.display = "none";
  });
});

logButton.addEventListener("click", () => {
  login.style.display = "none";
  headerGuest.style.display = "none";
  headerResidence.style.display = "block";
});

cont_page.forEach((page) => {
  page.addEventListener("click", () => {
    contact.style.display = "flex";
  });
});