let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let passToggle = document.getElementById("passToggle");

//FUNCTIONS


//Toggle-password

const togglePass = () => {
  if (password.type === "password") {
    password.type = "text";
    passToggle.classList.remove("fa-regular", "fa-eye-slash");
    passToggle.classList.add("fa-regular", "fa-eye");
  } else {
    password.type = "password";
    passToggle.classList.remove("fa-regular", "fa-eye");
    passToggle.classList.add("fa-regular", "fa-eye-slash");
  } 
};

//Login
const login = () => {
    const users = JSON.parse(localStorage.getItem("userData"));
    const isLogin = users.find((user) => {
      return  user.email == email.value && user.password == password.value
    })
    if(isLogin){
        localStorage.setItem("isLogin" , true);
        alert("Login Successfully..!")
        window.location.href = "user-profile.html";
    }else{
        localStorage.setItem("isLogin" , false);
        alert("Some error generated..!")
    }
}


//EVENT-LISTENERS
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  login();
});
passToggle.addEventListener("click", togglePass);
