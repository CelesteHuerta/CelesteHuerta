let myButton;
let myButton2;
let myTitle;
let myInput;
let myParagraph;
let myString;
let myTitle2;

function setup() {
  noCanvas();
  myButton = select('#myButton');
  myButton.mousePressed(buttonPressed);
  myTitle = select('#myTitle');
  myInput = select('#myInput');
  myParagraph = select('#myParagraph');

  var button = document.createElement("button");
button.innerHTML = "Where am I?"



}

function draw() {

}

function buttonPressed() {
  console.log('pressed');
  myTitle.html('Ah good... you are conscious... I was beginning to worry...');
  myButton.hide();
  showInput();

}

function showInput() {
  myInput.show();
  myParagraph.show();

}
