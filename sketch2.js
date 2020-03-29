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
  

  myString = '';
  grayscaleValue = 0;
  background(grayscaleValue);

  sel = createSelect();
  sel.position(610, 260);
  sel.option('Fuck You');
  sel.option('Let Me Go!');
  sel.option('I have a headache...');
}

function draw() {

}

function buttonPressed() {
  console.log('pressed');
  myTitle.html('So...Anxious. Please Rate your pain.');
  myButton.hide();
  showInput();

}

function showInput() {
  myInput.show();
  myParagraph.show();
}
