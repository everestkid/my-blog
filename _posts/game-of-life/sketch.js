let grid;
let cols;
let rows;
let resolution = 18;
let next;
let button;
let button2;
let statusText;
let start = false;

let x = 500;
let y = 500;

let buttonOffsetx = x-140;
let buttonOffsety = y+20;

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  var myCanvas = createCanvas(x, y);
  statusText = createP("Running: "+start);
  myCanvas.parent("canvas-container");
  statusText.parent("canvas-container");

  frameRate(10);
  background(100);
  //prevent right click 
  let cnv = document.querySelector("#defaultCanvas0");
  cnv.addEventListener('contextmenu',(evt) =>{
    evt.preventDefault();
  });
  
  button = createButton('Stop');
  button.class("button-action");
  
  // button.size(60,30);
  button2 = createButton("Start")

  button2.class("button-action");


  // button2.size(60,30);

  button.position(buttonOffsetx, buttonOffsety,'inherit');
  button.mousePressed(init);
  button2.position(buttonOffsetx+80,buttonOffsety,'inherit');
  button2.mousePressed(function (){
    start=true;
  });

  button.parent("button-container");
  button2.parent("button-container");
  w = 20;
  // Calculate columns and rows
  cols = width / w;
  rows = height / w;
  grid = make2DArray(cols, rows);
  next = make2DArray(cols, rows);
  loadJSON("data.json",gotData);
  init()
}


function gotData(data)
{
  //Getting the data and rendering the button in interesting example section
  // let a = document.querySelector("#article");

  for(let i = 0; i < data.list.length; i++)
  {
    let btn = document.querySelector("#bt"+(i+1));
    if(btn==null)
    continue;

    btn.innerText = data.list[i].name;

    btn.addEventListener("click",()=>{
      start=false;
      if(!start){

        for(let j = 0; j < cols; j++ ){
          grid[j] = data.list[i].grid[j].slice();
        }
        // grid.grid = [data.list[i].grid];
        // a.innerHTML = data.list[i].description;
        // grid.showGrid();
      }

    });

  }
  // console.log(data.list[0].grid);
}

function init(){
  start=false;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (i == 0 || j == 0 || i == cols - 1 || j == rows - 1) grid[i][j] = 0;
      else {
        // grid[i][j] = floor(random(2));
        grid[i][j] = 0;
      }
      next[i][j] = 0;
    }
  }
}



function draw() {

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] == 1) {
        fill(255,255,20);
      } else fill(100);
      
      stroke(50);

      rect(i * w, j * w, w-1, w-1 );
    }
  }

if(start){
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let sum = countNeighbour(grid, i, j);
    
      let state = grid[i][j];
      if (state == 1 && (sum > 3 || sum < 2)) {
        next[i][j] = 0;
      } else if (state == 0 && sum == 3) {
        next[i][j] = 1;
      } else {
        next[i][j] = state;
      }
    }
  }
  let temp = grid;
  grid = next;
  next = temp;
 
}
statusText.html("Running: "+start);
}

function mousePressed() {


console.log(mouseX,mouseY);
console.log(cols,rows);



      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (
             //Calculating the square cordiante that is clicked.
            mouseX < i * w + w &&
            mouseX > i * w &&
            mouseY < j * w + w &&
            mouseY > j * w
          ) {
            // console.log(mouseX);
            if(mouseButton==LEFT)
            grid[i][j] = 1;
            else if(mouseButton==RIGHT)
            grid[i][j] = 0;
          }
        }
    }
  
    }


    function countNeighbour(grid, x, y) {

      let sum = 0;
    
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          let r = (x + i + rows) % rows;
          let c = (y + j + cols) % cols;
    
          sum += grid[r][c];
    
        }
      }
    
      //subtracting the value of self
      sum -= grid[x][y];
    
      return sum;
    }




 


  





