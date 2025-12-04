let ul = document.getElementById("emptyUl");
let addBtn = document.getElementById("addBtn");
let filter = document.getElementById("filter");

addBtn.addEventListener("click", () => {
  let input = document.createElement("input");
  input.placeholder = "Enter task...";
  input.type = "text";

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  let completeBtn = document.createElement("button");
  completeBtn.innerText = "✅";

  ul.append(document.createElement("br"), input);
  input.focus();
  let li = document.createElement("li");

  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      li.textContent = input.value;
      if (input.value == "") {
        alert("input minimum 1 task..");
        return;
      }
      ul.append(li);
      li.append(deleteBtn);
      li.append(completeBtn);
      ul.removeChild(input);
    }
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("complete");
  });

  li.addEventListener("dblclick", () => {
    let inputUpdate = document.createElement("input");
    inputUpdate.type = "text";
    inputUpdate.placeholder = "Enter Edited Task..";
    inputUpdate.focus();
    li.textContent = "";
    li.append(inputUpdate);
    inputUpdate.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        li.append(inputUpdate.value);
        li.append(deleteBtn, completeBtn);
        inputUpdate.remove();
      }
    });
  });
});
filter.addEventListener("keydown", (f) => {
  if (f.key === "Enter" && filter.value === "") {
    alert("add task to filter...");
    // return;
  } else if (f.key === "Enter" && ul.querySelectorAll("li").length == 0) {
    alert("first add tasks in list...");
    return;
  } else {
    let filterTask = ul.querySelectorAll("li").forEach((val) => {
      let match = val.textContent
        .toLowerCase()
        .includes(filter.value.toLowerCase());
      val.style.display = match ? "" : "none";
    });
  }
});

let userName = document.getElementById("inputUser");
let inputbtn = document.getElementById("inputbtn");
let heading = document.getElementById("heading");
let input = document.getElementById("inputUser");
inputbtn.addEventListener("click", () => {
  let value = userName.value;
  localStorage.setItem("userName", value);
  input.value = "";
  location.reload();
});
window.addEventListener("load", () => {
  let getUser = localStorage.getItem("userName");
  heading.innerText += getUser;
  let theme = localStorage.getItem("theme")
  if(theme === "dark"){
    document.body.classList.toggle("dark")
    themeBtn.classList.toggle("themeBtnDark");
  }else{
    document.body.classList.toggle("light")
  }
});

let themeBtn = document.querySelector(".themeBtn");
themeBtn.addEventListener("click" ,(e) =>{
  e.stopPropagation();
  document.body.classList.toggle("dark");
  themeBtn.classList.toggle("themeBtnDark");
  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark")
  }else{
    localStorage.setItem("theme","light")
  }
})