class RectangleTool{

constructor(){
    this.icon = "assets/rectangle.jpg";
    this.name = "rectangle";

    let startMouseX = -1;
	let startMouseY = -1;
	let drawing = false;

	let checkbox = createCheckbox('Click to remove fill or add again', true);
    checkbox.changed(myCheckedEvent);
	checkbox.style(appUI.fontStyle[0],appUI.fontStyle[1]);
	checkbox.style(appUI.fontColor[0],appUI.fontColor[1]);
	checkbox.style(appUI.fontFamily[0],appUI.fontFamily[1]);
	checkbox.position(appUI.position[0],appUI.position[1] + 20);
	checkbox.style('width','auto');
	checkbox.style('heigth','30px');
	checkbox.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);


    this.draw = function(){

		checkbox.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);

  
		if(mouseIsPressed){
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
				rectMode(CORNERS);
				rect(startMouseX, startMouseY, mouseX, mouseY);

				
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}


    };

	function myCheckedEvent() {
		if (this.checked()) {
			fill(this.c);
		} else {
		  noFill();
		}
	  }

	  this.unselectTool = function () {
        //clear options by hiding styles
		checkbox.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

    };
}

};
