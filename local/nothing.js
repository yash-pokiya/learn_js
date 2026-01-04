let addBtn = document.querySelector("#addBtn");
let container = document.querySelector(".container");

// =======================
// CREATE CARD FUNCTION
// =======================
function createCard(titleVal = "", noteVal = "") {

    let card = document.createElement("div");
    card.style.width = "18rem";
    card.classList.add("card", "m-5");

    card.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">
            <input type="text" id="titleInput" value="${titleVal}" placeholder="Title" class="form-control">
        </h5>

        <p class="card-text d-flex">
            <div class="form-floating">
                <textarea class="form-control note" id="floatingTextarea">${noteVal}</textarea>
                <label for="floatingTextarea">Note</label>
            </div>

            <div class="buttons d-flex">
                <button class="saveBtn m-2 btn btn-success">Save</button>
                <button class="editBtn m-2 btn btn-warning">Edit</button>
                <button class="deleteBtn m-2 btn btn-danger">Delete</button>
            </div>
        </p>
    </div>`;

    container.append(card);

    // =======================
    // DELETE BUTTON
    // =======================
    card.querySelector(".deleteBtn").addEventListener("click", () => {
        card.remove();
    });

    // =======================
    // SAVE BUTTON
    // =======================
    card.querySelector(".saveBtn").addEventListener("click", () => {
        let title = card.querySelector("#titleInput").value;
        let note = card.querySelector(".note").value;

        let notesArray = JSON.parse(localStorage.getItem("notes")) || [];

        notesArray.push({
            heading: title,
            note: note
        });

        localStorage.setItem("notes", JSON.stringify(notesArray));
    });
}

// =======================
// ADD NOTE BUTTON
// =======================
addBtn.addEventListener("click", () => {
    createCard(); // empty card
});

// =======================
// SHOW NOTES ON RELOAD
// =======================
window.addEventListener("load", () => {
    let notesArray = JSON.parse(localStorage.getItem("notes")) || [];

    notesArray.forEach(item => {
        createCard(item.heading, item.note);
    });
});