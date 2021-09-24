function HelperFunctions() {

	//p5.dom click click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function () {
		//Applies a layer of white background on top
		background(255);

		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
		background(255);


	});

	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function () {
		//Saves drawn image to the canvas
		saveCanvas('myCanvas', 'jpg');
	});

	select("#Finish-Shape").mouseClicked(function () {
		//Empties array to start a new shape
		editMode = false;
		draw();
		loadPixels();
		currentShapes = [];
	});

	//Edit buttons for shape tool
	select("#Edit-Shape").mouseClicked(function () {

		if (editMode) {
			editMode = false;
			select("#Edit-Shape").html("Edit Shape");
		}
		else {
			editMode = true;
			select("#Edit-Shape").html("Add Vertices");
		}

	});

	//Print text button for text tool
	select("#Print-Text").mouseClicked(function () {

		if (inputFieldOn) {
			input.style('display', 'none');

			readyForPrint = true;
		}

		else {
			readyForPrint = false;
		}

	});


	//Closes path on Pen tool by chaging boolean 
	select("#close-button").mouseClicked(function () {

		//Arrow function to simplify toggle
		let toggle = () => closePath = !closePath;

		if (toggle()) {
			select("#close-button").html("Open Shape");
			document.getElementById("close-button").style.backgroundColor = '#b36200';
			document.getElementById("close-button").style.color = 'white';
		}
		else {
			select("#close-button").html("Close Shape");
			document.getElementById("close-button").style.backgroundColor = 'darkviolet';
			document.getElementById("close-button").style.color = 'white';

		}


	});







}