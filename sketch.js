//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;

//Global variables for image import
var input;
var img;

//Global variable and arrays for editshape tool
var editMode = false;
var currentShapes = []; 

//Global for text tool
saveTextStates = [];
saveTextData = [];
var inputFieldOn = false;
var readyForPrint = false;

//Global for Pen tool
var points = [{x: 255, y: 313 }];

//Closes path in pen tool
var closePath = false;
var openCloseShape;

//Adds new point in pen tool
var newPoint = false;

function setup() 
	{

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//Global stamp values 
	stampValues = [];

	//Global variables for text tool
	input = createInput();
	

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new EllipseTool());
	toolbox.addTool(new RectangleTool());
	toolbox.addTool(new StampTool());
	toolbox.addTool(new TextTool());
	toolbox.addTool(new PenTool());
	toolbox.addTool(new ShapeTool());
	toolbox.addTool(new EraserTool());
	toolbox.addTool(new UploadTool());
	
	background(255);

}

function draw() {

	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	cursor(CROSS);
	//mouse dragged for rectangle
	
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();

	} 
	else {
		alert("it doesn't look like your tool has a draw method!");
	}

};

//This object has the basic UI elements used across the apps for modifying the tools
//First position tuple for most texts on the UI
//Second position tupple specific for stamp tool hint text
this.appUI = { position  : [340,540,810,535],
	fontStyle  : ['font-size','16px'],
	fontColor  : ['color','white','#EB5F00'],
	fontFamily : ['font-family','nunito'],
	fontDisplay : ['display','none'],
	uiElementsDisplayOff : ['display','none'],
	uiElementsDisplayOn : ['display','block'],
	
}





