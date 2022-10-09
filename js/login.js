const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greetingForm = document.querySelector("#greeting-form");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}
function onLogoutSubmit(event) {
  event.preventDefault();

  localStorage.removeItem(USERNAME_KEY);

  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greetingForm.classList.add(HIDDEN_CLASSNAME);
  loginInput.value = "";
  loginForm.addEventListener("submit", onLoginSubmit);
}

function paintGreeting(username) {
  greetingForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}.`;
  greetingForm.addEventListener("submit", onLogoutSubmit);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
