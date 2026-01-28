let signUpHeaderBtn = document.getElementById("signUpHeaderBtn");
let loginHeaderBtn = document.getElementById("loginHeaderBtn");

//FUNCTIONS

const isLogin = () => {
  const login = JSON.parse(localStorage.getItem("isLogin"));
  if (login) {
    if (window.location.href.includes("index.html")) {
      signUpHeaderBtn.textContent = "Profile";
      signUpHeaderBtn.href = "../html/user-profile.html";
      loginHeaderBtn.textContent = "Logout";
      loginHeaderBtn.href = "";
    } else if (window.location.href.includes("user-profile.html")) {
      signUpHeaderBtn.textContent = "Home";
      signUpHeaderBtn.href = "../html/index.html";
      loginHeaderBtn.textContent = "Logout";
      loginHeaderBtn.href = "";
    }
  } else {
    if (window.location.href.includes("user-profile.html")) {
      signUpHeaderBtn.textContent = "sign-up";
      loginHeaderBtn.textContent = "Login";
      signUpHeaderBtn.href = "../html/sign-up.html";
      loginHeaderBtn.href = "../html/login.html";
    }
  }
};
const logOut = () => {
  if (loginHeaderBtn.textContent === "Logout") {
    localStorage.setItem("isLogin", false);
    window.location.reload();
  }
};


//EVENT-LISTENER

window.addEventListener("load", isLogin);

loginHeaderBtn.addEventListener("click", logOut);