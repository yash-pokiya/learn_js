let grey = document.getElementById("grey");
let white = document.getElementById("white");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");

// grey.addEventListener("click", () => {
//   let body = document.body;
//   body.className = "";
//   body.classList.add("greyBg");
//   grey.classList.toggle("whiteBg");
// });

// blue.addEventListener("click", () => {
//   let body = document.body;
//   body.className = "";
//   body.classList.add("blueBg");
//   blue.classList.toggle("whiteBg");
// });

// white.addEventListener("click", () => {
//   let body = document.body;
//   body.className = "";
//   body.classList.add("whiteBg");
//   white.classList.toggle("whiteBg");
// });
// yellow.addEventListener("click", () => {
//   let body = document.body;
//   body.className = "";
//   body.classList.add("yellowBg");
//   white.classList.toggle("whiteBg");
// });

let setBg = (bgColor) => {
  let body = document.body;
  body.className = "";
  body.classList.add(bgColor);
};

grey.addEventListener("click",() => setBg("greyBg"))
white.addEventListener("click",() => setBg("whitwBg"))
blue.addEventListener("click",() => setBg("blueBg"))
yellow.addEventListener("click",() => setBg("yellowBg"))