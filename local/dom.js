// // let h2 = document.querySelector("h2");
// // console.log(h2);
// // h2.innerText = h2.innerText +" " +"from Youtube"
// // let boxes = document.querySelectorAll(".box");
// // let idx = 1;
// // for (box of boxes) {
// //   box.innerText = `New Value is ${idx}`;
// //   idx++;
// // }
// // let i = 0;
// // for (box of boxes) {
// //   boxes[i].setAttribute("box", "container");
// //   i++;
// // }
// // function hello() {
// //   document.write("Hello EveryOne..!");
// // }
// // heading = document.getElementById("heading");
// // console.log(heading);

// // a = document.querySelectorAll("div");
// // console.log(a);
// // console.log(document.body.lastChild);
// // let heading = document.querySelector("h1");
// // let id = heading.getAttribute(id);
// // console.log(id);
// // heading.setAttribute(name , "name2");
// // let name= heading.getAttribute(name);
// // console.log(name);
// // let classes = document.querySelector(".box");
// // let newBtn = document.createElement("button");
// // newBtn.innerText = "click me..!"
// // newBtn.style.color = "white";
// // newBtn.style.backgroundColor = "red";
// // document.querySelector("body").prepend(newBtn);

// // //q2
// // let para = document.querySelector("p");
// // para.classList.add("newP")
// // let para = document.querySelector(".pTag");
// // setTimeout(() => {
// //     para.style.color = "blue";
// // },2000)
// // console.log(para);
// // let x = document.getElementById("heading");
// // x.style.color = "yellow";
// // // x.style.color = "red";
// // let a = document.querySelectorAll(".pTag");
// // a.forEach((ele) => {
// //   ele.style.color = "#1f8555ff";
// // });
// // console.log(a.item(0));
// // a.forEach((ele) => {
// //   ele.addEventListener("click", () => {
// //     setTimeout(() => {
// //       ele.style.backgroundColor = "purple";
// //     }, 200);
// //   });
// // });
// // x.addEventListener("click" , () => {
// //     // x.style.color = "blue";
// //     a.forEach((ele) => {
// //         ele.style.backgroundColor = "#e7596eff";
// //         ele.innerText = "hello DOM"
// //     })
// // });
let button1 = document.querySelector("#btn");
let para = document.querySelector(".para");

let fetchApi = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  para.innerText = data[0].name;
};
button1.addEventListener("click", fetchApi);
button1.addEventListener("click", () => {
  button1.innerText = "Refresh";
});
button1.addEventListener("dblclick", () => {
  para.innerText = "Refreshed";
});
let box1 = document.querySelector(".box");
box1.addEventListener("mousedown", function (e) {
  let click = e.button;
  let colour;
  console.log(click);

  switch (click) {
    case 0:
      colour = "red";
      break;
    case 1:
      colour = "blue";
      break;
    case 2:
      colour = "green";
      break;
  }

  box.style.backgroundColor = colour;
});

let clickBtn = () => {
  setTimeout(() => {
    let inputVal = document.getElementById("input").value;
    let paragraph = document.getElementById("paragraph");
    paragraph.innerText = inputVal;
  }, 2000);
};
function changepara(){
    let para1 = document.querySelector(".classDiv")
    let changeBtn = document.querySelector("#changeDiv");
    if(para1.innerHTML.includes("<p>")){
    para1.innerHTML = "<h1>Heading</h1>";
    document.querySelector("#changeDiv").innerText = "refresh?"
    }
    else{
        para1.innerHTML = "<p> paragraph </p>";
        document.querySelector("#changeDiv").innerText = "change?"
    }
}
function passwordShow() {
    let input = document.querySelector("#passInput");
    let spanShow = document.querySelector("#spanShow");
    spanShow.innerText = input.value;
    spanShow.classList.add("pTag");
}

let button = document.querySelector("#btnShow");
let box = document.querySelector(".card");

button.addEventListener("click", () => {
    let nameVal = document.querySelector("#inputName").value;
    let emailVal = document.querySelector("#inputEmail").value;
    let ageVal = document.querySelector("#inputAge").value;
    box.style.display = "block";
    box.innerHTML = `
    <h2>details</h2>
     <p>Name : ${nameVal}</p>
     <p>Email : ${emailVal}</p>
     <p>Age : ${ageVal}</p>

    `
});

function funcToggle() {
let password = document.getElementById("password");
let toggle = document.getElementById("icon");
    if(password.type === "password"){
        password.type = "text";
        toggle.innerText = "🙈"
    }
    else{
        password.type = "password";
        toggle.innerText = "👁️"
    }
}

let btnCart = document.querySelector("#btnCart");
let cartDisplay = document.querySelector("#cartDisplay");
let i = 1;
btnCart.addEventListener("click", () => {
  cartDisplay.textContent = `cart(${i})`;
  i++;
});

let buttonBasic = document.querySelector("#btnBasic");
buttonBasic.addEventListener("click", () => {
  document.body.innerHTML += "<p>Button clicked</p>";
});

let outerDiv = document.querySelector(".outer");
let innerDiv = document.querySelector(".inner");

outerDiv.addEventListener("click", () => {
  alert("outerDiv");
});
innerDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  // console.log("event",e);
  alert("innerDiv");
});
// Create a <div> with a black border. Create a button labeled "Highlight". When you click the button, use classList.toggle('bg-yellow') to switch a yellow background on and off.

let classDiv = document.querySelector(".divClass");
let highlightBtn = document.querySelector("#highlightBtn");
highlightBtn.addEventListener("click" , () => {
    classDiv.classList.toggle("yellowBg");
});
let body = document.body;
let modeBtn = document.querySelector("#themeBtn");

modeBtn.addEventListener("click" , () => {
    body.classList.toggle("blackTheme");
})

let newPTag = document.createElement("h2");
newPTag.innerHTML = "hello "
// console.log(newPTag);

// classDiv.insertBefore(newPTag,highlightBtn)


// let newEle = document.createElement("p");
// newEle.innerHTML = "heyyy..."
// console.log(newEle);

// classDiv.appendChild(newEle);

classDiv.addEventListener("click" , () => {
  // classDiv.appendChild(newPTag)
  classDiv.insertAdjacentElement("beforeend" , newPTag)
})



