let addBtn = document.querySelector("#addBtn");
let container = document.querySelector(".container");
function createCard(title = "", note = "") {
  let card = document.createElement("div");
  card.style.width = "18rem";
  card.classList.add("card", "m-5");
  card.innerHTML = `
<div class="card-body ">
         <h5 class="card-title">
             <input type="text" id="titleInput" value = "${title}" placeholder = "Title" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
         </h5>
    <p class="card-text  d-flex ">
        <div class="form-floating ">
             <textarea class="form-control note"  placeholder="Leave a comment here" id="floatingTextarea" >${note}</textarea>
            <label for="floatingTextarea">Note</label>
        </div>
        <div class="buttons justify-content-center align-content-center d-flex ">
            <button class="saveBtn justify-content-center m-2  btn btn-outline-success">Save</button>   
            <button class="deleteBtn justify-content-center m-2 btn btn-outline-danger">Delete</button>  
        </div>
          
    </p>
</div>`;
  container.append(card);

  let deleteBtn = card.querySelector(".deleteBtn");
  let saveBtn = card.querySelector(".saveBtn");

  deleteBtn.addEventListener("click", () => {
    let title = card.querySelector("#titleInput").value;
    let note = card.querySelector(".note").value;
    let existArray = JSON.parse(localStorage.getItem("notes"));
    let UpdatedArray = existArray.filter((item) => {
      return !(item.Title === title && item.note === note);
    });
    localStorage.setItem("notes", JSON.stringify(UpdatedArray));
    card.remove();
  });

  saveBtn.addEventListener("click", () => {
    let title = card.querySelector("#titleInput").value;
    let note = card.querySelector(".note").value;
    let notesArray = JSON.parse(localStorage.getItem("notes")) || [];
    notesArray.push({
      Title : title,
      note : note
    });
    localStorage.setItem("notes" , JSON.stringify(notesArray));
  });
}

addBtn.addEventListener("click", () => {
  createCard();
});
window.addEventListener("load", () => {
  let arrayNote = JSON.parse(localStorage.getItem("notes")) || [];
  arrayNote.forEach((val) => {
    createCard(val.Title,val.note);
  })
})
let user = [ {name: "yash", id: 101 },{name : "manthan", id: 102}];
localStorage.setItem("user" , JSON.stringify(user));
let data = JSON.parse(localStorage.getItem("user"));
console.log(data[1]);
