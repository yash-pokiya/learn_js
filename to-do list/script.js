let ul = document.querySelector(".list-unstyled");
let input = document.querySelector(".input-text");
let addBtn = document.querySelector(".btnAdd");
let status;
let addTask = () => {
  if (input.value === "") {
    alert("You must writing anything else...");
    return;
  } else {
    let li = document.createElement("li");
    li.classList.add(
      "task-item",
      "d-flex",
      "align-items-center",
      "justify-content-between"
    );
    li.innerHTML = `<div class="d-flex align-items-center taskDiv gap-2">
                <button class="btn checkBox btn-outline-success">Done❓</button>
                <span class="inputVal">${input.value}</span>
                </div>
           <span class="delete-btn">&times;</span>`;
    ul.appendChild(li);
    input.value = "";
    saveData();
  }
};

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("checkBox")) {
    if (e.target.innerHTML === "completed✅") {
      e.target.innerHTML = "Done❓";
      e.target.nextElementSibling.classList.remove("line-threw");
    } else {
       e.target.innerHTML = "completed✅";
       e.target.nextElementSibling.classList.add("line-threw");
    }
  } else if (e.target.classList.contains("delete-btn")) {
    e.target.parentNode.remove();
  }
  saveData();
});
addBtn.addEventListener("click", () => {
  addTask();
  saveData();
});
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
    saveData();
  }
});

document.querySelectorAll(".checkBox").forEach((btn) => {
  if (btn.innerHTML === "completed✅") {
    btn.nextElementSibling.classList.add("line-threw");
  } else {
    btn.nextElementSibling.classList.remove("line-threw");
  }
});

let saveData = () => {
  localStorage.setItem("data", ul.innerHTML);
};
let showData = () => {
  ul.innerHTML = localStorage.getItem("data") || "";

  document.querySelectorAll(".checkBox").forEach((btn) => {
    if (btn.innerHTML === "completed✅") {
      btn.nextElementSibling.classList.add("line-threw");
    }
  });
};
window.addEventListener("load", () => {
  showData();
  getTheme();
});

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");

let randomColor = () => {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

startBtn.addEventListener("click", () => {
  let setId = setInterval(() => {
    document.body.style.backgroundColor = randomColor();
  }, 1000);

  stopBtn.addEventListener("click", () => {
    clearInterval(setId);
    saveTheme();
  });
});

saveTheme = () => {
  localStorage.setItem("theme", document.body.style.backgroundColor);
};
getTheme = () => {
  document.body.style.backgroundColor = localStorage.getItem("theme");
};
