let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUpBtn = document.getElementById("signUpBtn");
let passToggle = document.getElementById("passToggle");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let city = document.getElementById("city");
let phone = document.getElementById("phone")
//FUNCTIONS

//Set-item
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(regex.test(email));
  return regex.test(email);
};

const generateId = () => {
  return crypto.randomUUID().split("-")[0].toUpperCase()
};

const setItem = () => {
  if (!userName.value || !email.value || !password.value) {
    alert("Must fill all The Details..!");
    return;
  } else if (!validateEmail(email.value)) {
    return alert("Must Enter Correct Email...!");
  } else if (userName.value.length < 2 || password.value.length < 8) {
    return alert("Must Enter FullUsername or Enter Password 8 or more word..!");
  } else {
    const user = {
      userName: userName.value,
      email: email.value,
      password: password.value,
      age : age.value,
      phone : phone.value,
      gender : gender.value,
      city : city.value,
      customerId : generateId()
    };

    let users = JSON.parse(localStorage.getItem("userData")) || [];
    const alreadyUser = users.find((a) => a.email == user.email);
    if (alreadyUser) {
      return alert("Email Already Registered..!");
    } else {
      users.push(user);
      localStorage.setItem("userData", JSON.stringify(users));
      alert("User SignUp Successfully..!");
      window.location.href = "login.html";
    }
  }
};

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

//EVENT-LISTENERS
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  setItem();
});
passToggle.addEventListener("click", togglePass);
