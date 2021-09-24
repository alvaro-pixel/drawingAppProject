function EraserTool() {
	this.name = "eraser";
	this.icon = "assets/eraser.jpg";
	this.erasercursor = '/assets/erasercusor.png'

	//Simple adjustment to change size of line
	//The styles for the UI controls are edited in the appUI object in sketch.js
	let eraserText = createP('Eraser Width');
	eraserText.position(appUI.position[0], appUI.position[1]);
	eraserText.style(appUI.fontStyle[0], appUI.fontStyle[1]);
	eraserText.style(appUI.fontColor[0], appUI.fontColor[1]);
	eraserText.style(appUI.fontFamily[0], appUI.fontFamily[1]);
	eraserText.style(appUI.fontDisplay[0], appUI.fontDisplay[1]);

	eraserSlider = createSlider(5, 100, 20);
	eraserSlider.position(340, 587);
	eraserSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

	var previousMouseX = -1;
	var previousMouseY = -1;


	this.draw = function () {
		cursor(this.erasercursor, 10, 10);

		if (mouseIsPressed) {
			eraserText.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);
			eraserSlider.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);



			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1) {
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}


			push();
			stroke(255, 255, 255);
			strokeWeight(eraserSlider.value());
			line(previousMouseX, previousMouseY, mouseX, mouseY);
			pop(); // restroke original state
			previousMouseX = mouseX;
			previousMouseY = mouseY;
		}



		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		else {
			previousMouseX = -1;
			previousMouseY = -1;
		}


	};

	// used to reset the options html when tool is unselected
	this.unselectTool = function () {
		//clear options by hiding styles
		eraserSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
		eraserText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
		strokeWeight(1);

	}


	mouseIsOnCanvas = function () {
		if ((mouseX <= canvasContainer.size().width && mouseX >= 0) &&
			mouseY <= canvasContainer.size().height && mouseY >= 0) {
			text(mouseX, mouseX, mouseY);
			return true;

		};
		return false;

	}


}

