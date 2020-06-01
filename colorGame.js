let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

for (let i = 0; i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();
    //figure out how many squares to show
    //pick new colors
    //pick a new pickedColor
    //update page to reflect changes
  });
}

function reset(){
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent ="New Colors"
  messageDisplay.textContent = " ";
  //change colors of squares
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(let i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i]
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// })
// hardBtn.addEventListener("click", function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(let i = 0; i < squares.length; i++){
//       squares[i].style.backgroundColor = colors[i]
//       squares[i].style.display = "block";
//   }
// })

resetButton.addEventListener("click", function(){
 reset();
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
  //grab color of clicked square
  let clickedColor = this.style.backgroundColor;
  //compare color of pickedColor
    if(clickedColor === pickedColor){
    messageDisplay.textContent = "Correct!";
    resetButton.textContent = "Play Again?";
    changeColors(clickedColor);
    h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color){
  //loop through all squares
  for (let i =0; i < squares.length; i++){
  //change each color to match given color
  squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  let arr = [];
  //repeat num times
  for (let i =0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor())

  }
  //return that array
  return arr;
}

function randomColor() {
  //pick "red" from 0 - 255
  let r = Math.floor(Math.random() * 256);
  //pick "green" from 0 - 255
  let g = Math.floor(Math.random() * 256);
  //pick "blue" from 0 - 255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}