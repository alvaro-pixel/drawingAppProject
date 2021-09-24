function FreehandTool(){
	//set an icon and a name for the object
	this.icon = "assets/freehand.jpg";
	this.name = "freehand";

	//Simple adjustment to change size of line
	let pencilText = createP('Pencil Width');
	pencilText.position(appUI.position[0], appUI.position[1]);
	pencilText.style(appUI.fontStyle[0], appUI.fontStyle[1]);
	pencilText.style(appUI.fontColor[0], appUI.fontColor[1]);
	pencilText.style(appUI.fontFamily[0], appUI.fontFamily[1]);
	pencilText.style(appUI.fontDisplay[0], appUI.fontDisplay[1]);

	let pencilSlider = createSlider(0,20,10);
	pencilSlider.position(340,587);
	pencilSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);


	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	let previousMouseX = -1;
	let previousMouseY = -1;

	this.draw = function(){

		//if the mouse is pressed
		if(mouseIsPressed){

			pencilSlider.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);
			pencilText.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);


			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				strokeWeight(pencilSlider.value());
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
			}
			
			this.unselectTool = function () {
				//clear options by hiding styles
				pencilSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
				pencilText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

				strokeWeight(1);
	
			};
	};
}