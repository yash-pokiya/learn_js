let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let passToggle = document.getElementById("passToggle");
let customerId = document.getElementById("customerId");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let city = document.getElementById("city");
let phone = document.getElementById("phone");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let profileCard = document.getElementById("profileCard");
let editBtn = document.getElementById("editBtn")
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
const loginFunc = () => {
  const users = JSON.parse(localStorage.getItem("userData"));
  const isLogin = users.find((user) => {
    return user.email == email.value && user.password == password.value;
  });

  if (isLogin) {
    localStorage.setItem("isLogin", true);
    localStorage.setItem("currentUser", JSON.stringify(isLogin));
    alert("Login Successfully..!");
    window.location.href = "user-profile.html";
  } else {
    localStorage.setItem("isLogin", false);
    alert("User Not Found sign in first...!");
  }
};

const loadData = () => {
  const users = JSON.parse(localStorage.getItem("userData")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const logedInUser = users.find((a) => {
    return a.email === currentUser.email;
  });
  age.textContent += " " + logedInUser.age;
  gender.textContent += " " + logedInUser.gender.charAt(0).toUpperCase() + logedInUser.gender.slice(1);
  city.textContent +=  " " + logedInUser.city.charAt(0).toUpperCase() + logedInUser.city.slice(1);
  phone.textContent += " " + logedInUser.phone
  userEmail.textContent += " " + logedInUser.email
  userName.textContent  = logedInUser.userName.charAt(0).toUpperCase() + logedInUser.userName.slice(1);
  customerId = "Customer Id" + logedInUser.customerId;
};
if (window.location.href.includes("user-profile.html")) {
  loadData();
}

const editDetail = () => {
  const users = JSON.parse(localStorage.getItem("userData")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const logedInUser = users.find((a) => {
    return a.email === currentUser.email;
  });
  profileCard.innerHTML = `<div class="edit-form">
  
  <button id="btnBack"><img src="../images/image.png" id="backBtnImg"alt=""></button>
  <h3>Edit Profile</h3>

  <div class="form-group">
    <label>Full Name</label>
    <input type="text" id="editUserName" value = "${logedInUser.userName}" placeholder="Enter full name">
  </div>

  <div class="form-group">
    <label>Age</label>
    <input type="number" value = "${logedInUser.age}" id="editAge" min="1" max="100">
  </div>

  <div class="form-group">
    <label>Gender</label>
    <select id="editGender">
      <option value="" disabled>${logedInUser.gender}</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  </div>

  <div class="form-group">
    <label>City</label>
    <input type="text" id="editCity" value = "${logedInUser.city}" placeholder="Enter city">
  </div>

  <div class="form-group">
    <label>Phone</label>
    <input type="tel" id="editPhone" value = "${logedInUser.phone}" placeholder="Enter phone number">
  </div>

  <div class="btn-group">
    <button id="saveProfileBtn">Save Changes</button>
    <button id="cancelEditBtn">Cancel</button>
  </div>
</div>`
 document.getElementById("saveProfileBtn").addEventListener("click" , saveDetail)
 document.getElementById("cancelEditBtn").addEventListener("click" , () => {
  window.location.reload();
 })
 document.getElementById("backBtnImg").addEventListener("click" , () => {
  window.location.reload();
 })
}
const saveDetail = () => {
  let editUserName = document.getElementById("editUserName");
  let editAge = document.getElementById("editAge");
  let editCity = document.getElementById("editCity");
  let editPhone = document.getElementById("editPhone");
  let editGender = document.getElementById("editGender");

  const users = JSON.parse(localStorage.getItem("userData")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const logedInUser = users.find((a) => {
    return a.email === currentUser.email;
  });
logedInUser.userName = editUserName.value;
logedInUser.age = editAge.value;
logedInUser.city = editCity.value;
logedInUser.phone  = editPhone.value;
logedInUser.gender = editGender.value;
localStorage.setItem("userData",JSON.stringify(users));
localStorage.setItem("currentUser" , JSON.stringify(logedInUser));
alert("Profile Updated Successfully!");
window.location.reload();
}
//EVENT-LISTENERS

if (loginBtn)
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginFunc();
  });

if (passToggle) passToggle.addEventListener("click", togglePass);

if(editBtn)
  editBtn.addEventListener("click" ,  editDetail)
