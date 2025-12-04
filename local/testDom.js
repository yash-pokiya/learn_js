// let addBtn = document.querySelector("#addBtn");

// addBtn.addEventListener("click", () => {
//   let input = document.querySelector("#input");
//   let emptyDiv = document.querySelector("#storage");
//   let value = input.value;
//   let span = document.createElement("span");
//   span.textContent = value;
//   let deleteBtn = document.createElement("button");
//   deleteBtn.classList.add("deleteBtn");
//   deleteBtn.innerHTML = "❌";
//   if (value === "") {
//     alert("First Add Value");
//     return;
//   }
//   deleteBtn.addEventListener("click", () => {
//     span.remove();
//     deleteBtn.remove();
//   });

//   emptyDiv.append(span, deleteBtn, document.createElement("br"));
//   input.value = "";
// });

// let input = document.getElementById("input");
// // let addBtn = document.getElementById("addBtn");
// let ul = document.getElementById("ulDiv");

// addBtn.addEventListener("click", () => {
//   if (input.value === "") {
//     alert("you enter invalid..");
//     return;
//   }
//   let li = document.createElement("li");
//   li.id = "li";
//   li.textContent = input.value;
//   ul.appendChild(li);
//   input.value = "";

//   li.addEventListener("dblclick", () => {
//     let innerInput = document.createElement("input");
//     innerInput.type = "text";
//     innerInput.placeholder = "Enter changed Value ";
//     li.textContent = "";
//     li.appendChild(innerInput);

//     innerInput.addEventListener("keyup", (e) => {
//       if (e.key === "Enter") {
//         li.textContent = innerInput.value;
//       }
//     });
//   });
// });

// const itemsMain = [
//   "Apple",
//   "Banana",
//   "Cherry",
//   "Date",
//   "Elderberry",
//   "Fig",
//   "Grape",
//   "Honeydew",
//   "Kiwi",
//   "Lemon",
//   "Mango",
//   "Nectarine",
//   "Orange",
//   "Papaya",
//   "Quince",
// ];

// let funcFetch = async() => {
//   const arr = await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     return arr;
// };

// let userData = async() => {
//   let itemsMain = await funcFetch();
//   console.log(itemsMain);
// }
// userData();

// let items = itemsMain.map((item) => {
//   return item.toLowerCase();
// });
// let search = document.querySelector("#searchItem");
// let itemUl = document.querySelector("#emptyUl");

// function allItem() {
//   itemUl.innerHTML = "";
//   items.forEach((item) => {
//     let li = document.createElement("li");
//     li.textContent = item.toLowerCase();
//     itemUl.appendChild(li);
//   });
// }
// allItem();

// search.addEventListener("input", function () {
//   let searchVal = search.value.toLowerCase();
//   let filtereditem = items.filter((item) => item.includes(searchVal));
//   itemUl.innerHTML = "";
//   for (let item of filtereditem) {
//     itemUl.innerHTML += `<li>${item}</li>`;
//   }
// });

// let locationBtn = document.getElementById("locationBtn");

// locationBtn.addEventListener('click' ,async()=>{
//   navigator.geolocation.getCurrentPosition(resolve,reject);
// })
// function resolve(location){
//   console.log(location);
// }
// function reject(){
//   console.log("error found..");

// }

// let inputColor = document.getElementById("inputColor");
// let colorBtn = document.getElementById("colorBtn");

// colorBtn.addEventListener("click", () => {
//   let color = inputColor.value;
//   localStorage.setItem("theme", color);
//   document.body.style.backgroundColor = color;
//   document.body.style.color = "white";
//   if (color === "white") {
//     document.body.style.color = "black";
//   }else if(inputColor.value === "" || !color){
//     alert("First Enter Color....");
//     document.body.style.color = "black";
//     return;
//   }
// });

// window.addEventListener("load", () => {
//   let theme = localStorage.getItem("theme");
//   document.body.style.backgroundColor = theme;
//   document.body.style.color = "white";
//   if (theme === "white") {
//     document.body.style.color = "black";
//   } else if (!theme) {
//     document.body.style.color = "black";
//   }
// });

// let inputText = document.getElementById("inputText");
// let button = document.getElementById("countBtn");
// let count;
// inputText.addEventListener("input", () => {
//   count = inputText.value.length;
//   button.innerText = count;
//   if(count>50){
//     alert("you can only write 50 or less word..");
//     return;
//   }
// })

let name = document.getElementById("name");
let age = document.getElementById("age");
let city = document.getElementById("city");

age.addEventListener("keydown" , (e) => {
  if(e.key === "Enter"){
      if(age.value > 60){
    alert("Age must be under 60...!")
    age.value = 0; 
  }
  }
})

let btnSave = document.getElementById("btnSave");

btnSave.addEventListener("click", (e) => {
  e.stopPropagation();
      if(age.value > 60){
    alert("Age must be under 60...!")
    age.value = 0;
    return;
  }
  let profileArray = JSON.parse(localStorage.getItem("profile")) || [];
  profileArray.push({ name: name.value, age: age.value, city: city.value });
  localStorage.setItem("profile", JSON.stringify(profileArray));
  if (!document.querySelector(".showProfile button")) {
    let btnShow = document.createElement("button");
    btnShow.innerText = "show";
    let div = document.querySelector(".showProfile");
    div.append(btnShow);
    btnShow.addEventListener("click", (e) => {
      let data = JSON.parse(localStorage.getItem("profile"));
      div.innerHTML = ` <p>name:${data[0].name}</p>
                        <p>age:${data[0].age}</p>
                        <p>city:${data[0].city}</p>`
      localStorage.removeItem("profile");
      
    });
  }
});
