let btn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset_btn");
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]  
];

btn.forEach((box) =>  {
    box.addEventListener("click" , () => {
        console.log("btn clicked..!");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const checkWinner = () => {
    for(let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
    }
}
resetBtn.addEventListener("click" , () => {
    btn.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
})