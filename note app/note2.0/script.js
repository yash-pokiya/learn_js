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
      if (!textArea) return;
      let div = document.createElement("div");
      div.classList.add("saved-text");
      div.textContent = textArea.value;
      textArea.replaceWith(div);
      localStorage.setItem("notes", notesList.innerHTML);
    });
  });

  //EDIT NOTE

  let allEditBtn = document.querySelectorAll(".editBtn");
  allEditBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let card = btn.parentElement;
      let div = card.querySelector(".saved-text");
      if (!div) return;
      let textArea = document.createElement("textarea");
      textArea.classList.add("textArea");
      textArea.value = div.textContent;
      div.replaceWith(textArea);
      localStorage.setItem("notes", notesList.innerHTML);
    });
  });
};

window.addEventListener("load", () => {
  let saved = localStorage.getItem("notes");
  if (saved) {
    notesList.innerHTML = saved;
    events();
  }
});
