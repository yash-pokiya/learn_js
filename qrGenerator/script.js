let qrCode = document.getElementById("qrCode");
let btnGenerate = document.getElementById("btnGenerate");
let inputVal = document.querySelector(".inputField");

btnGenerate.addEventListener("click", () => {
  let inputVal = document.querySelector(".inputField").value;
  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
});
inputVal.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let inputVal = document.querySelector(".inputField").value;
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
  }
});
