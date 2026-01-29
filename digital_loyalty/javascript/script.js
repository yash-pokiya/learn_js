let signUpHeaderBtn = document.getElementById("signUpHeaderBtn");
let loginHeaderBtn = document.getElementById("loginHeaderBtn");
let btnJoinNow = document.getElementById("btnJoinNow");

//FUNCTIONS

const isLogin = () => {
  const login = JSON.parse(localStorage.getItem("isLogin")) || false;
  if (login) {
    if (window.location.href.includes("index.html")) {
      signUpHeaderBtn.textContent = "Profile";
      signUpHeaderBtn.href = "../html/user-profile.html";
      loginHeaderBtn.textContent = "Logout";
      // loginHeaderBtn.removeAttribute("href");
    } else if (window.location.href.includes("user-profile.html")) {
      signUpHeaderBtn.textContent = "Home";
      signUpHeaderBtn.href = "../html/index.html";
      loginHeaderBtn.textContent = "Logout";
      // loginHeaderBtn.removeAttribute("href");
    }
  } else {
    console.log("akdbiqdbo");
    
     signUpHeaderBtn.textContent = "sign-up";
      loginHeaderBtn.textContent = "Login";
      signUpHeaderBtn.href = "../html/sign-up.html";
      loginHeaderBtn.href = "../html/login.html";
  }
};
const logOut = () => {
  if (loginHeaderBtn.textContent === "Logout") {
    localStorage.removeItem("isLogin");
  localStorage.removeItem("currentUser");
  window.location.replace("../html/index.html");
  }
};


//EVENT-LISTENER

window.addEventListener("load", isLogin);
  const login = JSON.parse(localStorage.getItem("isLogin")) || false;

if(login)
loginHeaderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  logOut();
});