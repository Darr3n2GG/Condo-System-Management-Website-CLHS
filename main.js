const login = document.querySelector(".login");
const closeBut = document.querySelector(".close");
const res_login = document.querySelector(".res_login");

res_login.addEventListener("click", () => {
  login.style.display = "flex";
});

closeBut.addEventListener("click", () => {
  login.style.display = "none";
});

