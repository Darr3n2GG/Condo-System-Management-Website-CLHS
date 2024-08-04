const login = document.querySelector(".login");
const headerGuest = document.querySelector(".headerGuest");
const headerRes = document.querySelector(".headerRes");

const close_but = document.querySelector(".close");
const res_login = document.querySelector(".res_login");
const logButton = document.querySelector(".logButton");

var log_state = false;

res_login.addEventListener("click", () => {
  login.style.display = "flex";
});

close_but.addEventListener("click", () => {
  login.style.display = "none";
});

logButton.addEventListener("click", () => {
  headerGuest.style.display = "none";
  headerRes.style.display = "flex";
});