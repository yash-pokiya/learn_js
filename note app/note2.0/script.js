let noteInput = document.getElementById("noteInput");
let addBtn = document.getElementById("addBtn");
let notesList = document.getElementById("notesList");

let createCard = () => {
  if (noteInput.value === "") {
    alert("First input Heading...!");
    return;
  }

  let newCArd = document.createElement("div");
  newCArd.id = "newCard";
  let cardTitle = document.createElement("div");
  cardTitle.classList.add("heading");
  cardTitle.textContent = noteInput.value;
  noteInput.value = "";
  let cardInfo = document.createElement("textarea");
  cardInfo.setAttribute("class", "textArea");
  let saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.classList.add("saveBtn");
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("editBtn");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");
  newCArd.append(cardTitle, cardInfo, saveBtn, editBtn, deleteBtn);
  notesList.append(newCArd);
  events();

  //SAVE TO LOCALSTORAGE
  localStorage.setItem("notes", notesList.innerHTML);
};
addBtn.addEventListener("click", () => {
  createCard();
});

//ALL EVENTS

let events = () => {
  // DELETE CARD
  let allDeleteBtns = document.querySelectorAll(".deleteBtn");
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
      localStorage.setItem("notes", notesList.innerHTML);
      console.log("btn clicked");
    });
  });

  // SAVE NOTE

  let allSaveBtns = document.querySelectorAll(".saveBtn");
  allSaveBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let card = btn.parentElement;
      let textArea = card.querySelector(".textArea");

      if (textArea) {
        let div = document.createElement("div");
        div.classList.add("saved-text");
        div.textContent = textArea.value;
        textArea.replaceWith(div);
      }

      let headingInput = card.querySelector(".headingEdit");
      if (headingInput) {
        let headingDiv = document.createElement("div");
        headingDiv.classList.add("heading");
        headingDiv.textContent = headingInput.value;
        headingInput.replaceWith(headingDiv);
      }
      localStorage.setItem("notes", notesList.innerHTML);
    });
  });

  //EDIT NOTE

  let allEditBtn = document.querySelectorAll(".editBtn");
  allEditBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let card = btn.parentElement;
      let div = card.querySelector(".saved-text");
      let heading = card.querySelector(".heading");
      if (div) {
    // saved text exists → convert to textarea
    let textArea = document.createElement("textarea");
    textArea.classList.add("textArea");
    textArea.value = div.textContent;
    div.replaceWith(textArea);
}
      localStorage.setItem("notes", notesList.innerHTML);
      if (!heading.classList.contains("heading")) return;
      let inputField = document.createElement("input");
      inputField.classList.add("headingEdit");
      inputField.value = heading.textContent;
      heading.replaceWith(inputField);
    });
  });

};

window.addEventListener("load", () => {
  let saved = localStorage.getItem("notes");
  if (saved) {
    notesList.innerHTML = saved;
    events();
  }
  let theme = localStorage.getItem("theme");
  if (theme) {
    themeFunc(theme);
  } else {
    themeFunc("🌙");
  }
});

let themeFunc = (theme) => {
  let btnTheme = document.getElementById("btnTheme");
  let body = document.body;
  let card = document.querySelector(".container");
  btnTheme.textContent = theme;
  if (theme === "☀️") {
    body.classList.add("darkTheme");
    body.classList.remove("lightTheme");

    card.classList.add("innerDark");
    card.classList.remove("innerLight");
  } else {
    body.classList.add("lightTheme");
    body.classList.remove("darkTheme");

    card.classList.add("innerLight");
    card.classList.remove("innerDark");
  }
  btnTheme.addEventListener("click", () => {
    if (btnTheme.textContent === "🌙") {
      btnTheme.textContent = "☀️";
      card.classList.remove("innerLight");
      card.classList.add("innerDark");
      body.classList.remove("lightTheme");
      body.classList.add("darkTheme");
      localStorage.setItem("theme", "☀️");
    } else {
      btnTheme.textContent = "🌙";
      let body = document.body;
      body.classList.remove("darkTheme");
      body.classList.add("lightTheme");
      let card = document.querySelector(".container");
      card.classList.remove("innerDark");
      card.classList.add("innerLight");
      localStorage.setItem("theme", "🌙");
    }
  });
};
