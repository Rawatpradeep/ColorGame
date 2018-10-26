 var numSquare=6;
var colors= generateRandomColors(numSquare);

var squares = document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons= document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++){
modeButtons[i].addEventListener("click", function(){
 modeButtons[0].classList.remove("selected");
 modeButtons[1].classList.remove("selected");
 this.classList.add("selected");
 this.textContent === "Easy" ? numSquare = 3: numSquare=6;
 reset(); 
});
}

function reset(){
//genrate all new colors
colors= generateRandomColors(numSquare);
//pick colorDisplay to match picked color
pickedColor=pickColor();
//change colorDisplay to match picked color
colorDisplay.textContent = pickedColor;
resetButton.textContent = "New Colors";
//change colors of squares
messageDisplay.textContent="";
for(var i=0; i<squares.length; i++){
if(colors[i]){
squares[i].style.display="block";
squares[i].style.backgroundColor=colors[i];
}
else{
squares[i].style.display="none";
}
}
 h1.style.backgroundColor= "steelblue";
}

resetButton.addEventListener("click", function(){
reset();
})
 
colorDisplay.textContent= pickedColor;
  
for(var i = 0; i < squares.length; i++){
    //add initial colors to square
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
    //grab color of clicking square
    var clickedColor= this.style.backgroundColor;
    console.log(pickedColor);
    console.log(clickedColor);
   //compare color to pickedColor
   if(clickedColor === pickedColor){
     messageDisplay.textContent="Correct!";  
     resetButton.textContent = "Play Again?";
     changeColors(clickedColor);
     h1.style.backgroundColor= clickedColor;
   }
   else{
     this.style.background ="#232323";
     messageDisplay.textContent = "TryAgain";
    }
});
}

function changeColors(color){
//loop throung all square
for(var i=0;i<squares.length;i++){
//change each color t  o match given color
squares[i].style.backgroundColor =color;
}
}

function pickColor(){
var random=Math.floor(Math.random()*colors.length);
return colors[random];
}

function generateRandomColors(num){
//make an array
var arr=[]
//add num random colors to array
for(var i=0 ; i<num;i++){
//get random color and push into arr
arr.push(randomColor());
}
return arr;
}

function randomColor(){
 //pick a red from   0- 255
var r=Math.floor(Math.random()*256);
//pick a green from   0- 255
var g=Math.floor(Math.random()*256);
//pick a blue from   0- 255
var b=Math.floor(Math.random()*256);

return "rgb("+ r +", "+ g + ", " + b + ")";

}