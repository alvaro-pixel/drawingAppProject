function LineToTool(){
	//name and icon are necessary for our tool to work
	//this.icon calls the image of the line tool
	//this.name is just our name
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	//Simple adjustment to change size of line
	let lineText = createP('Line Width');
	lineText.position(appUI.position[0], appUI.position[1]);
	lineText.style(appUI.fontStyle[0], appUI.fontStyle[1]);
	lineText.style(appUI.fontColor[0], appUI.fontColor[1]);
	lineText.style(appUI.fontFamily[0], appUI.fontFamily[1]);
	lineText.style(appUI.fontDisplay[0], appUI.fontDisplay[1]);
	
	let lineSlider = createSlider(1,50,5);
	lineSlider.position(appUI.position[0], appUI.position[1] + 47);
	lineSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

	//This probably just sets the two coordinates needed to
	//draw a line. A line is the distance between to points a and b
	let startMouseX = -1;
	let startMouseY = -1;
	let drawing = false;

	//our draw line function
	this.draw = function(){

		if(mouseIsPressed){
			lineText.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);
			lineSlider.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);

			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//p5.js native function
				//explanation on the website...
				loadPixels();
			}

			else{
				//same as loadPixels() they need to be used
				//in tandem
				updatePixels();
				strokeWeight(lineSlider.value());
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
		this.unselectTool = function () {
			//clear options by hiding styles
			lineText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
			lineSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

			strokeWeight(1);
		}
		
	};

	
}
