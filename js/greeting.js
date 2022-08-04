const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";


function onLoginSubmit (event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  
  paintGreetings(username);
  
}

function handleLinkClick (event) {
  event.preventDefault();
  //console.log(event);
}

function paintGreetings (username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME); 
}


const savedUserName  = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME); 
  loginForm.addEventListener('submit', onLoginSubmit);
}else {
  paintGreetings(savedUserName);
}
