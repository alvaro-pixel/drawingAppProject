function UploadTool(){

	this.name = "upload-image",
    this.icon = "assets/upload-image.png",
	
	this.input = createFileInput(handleFile);
	this.input.position(320,560);
	this.input.style(appUI.fontStyle[0], appUI.fontStyle[1]);
	this.input.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
	this.input.style('background-color', 'darkviolet');

	//Filter menu 
	let filterMenu = createSelect();
	filterMenu.position(600,560);
	filterMenu.option('Select Filter');
	filterMenu.option('Threshold');
	filterMenu.option('Gray');
	filterMenu.option('Opaque');
	filterMenu.option('Posterize');
	filterMenu.option('Dilate');
	filterMenu.option('Blur');
	filterMenu.option('Erode');
	filterMenu.option('Invert');
	filterMenu.selected('Select Filter');
	filterMenu.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

	//Posterize Slider
	let posterizeSlider = createSlider(2,255);
	posterizeSlider.style('display','none');
	posterizeText = createP('Posterize:');
	posterizeText.style('font-size','16px');
	posterizeText.style('color','white');
	posterizeText.style('font-family','nunito');
	posterizeText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
	//Posterize Position
	posterizeText.position(720,545);
	posterizeSlider.position(850,560);

	
	this.filters = [THRESHOLD,GRAY,OPAQUE,POSTERIZE,DILATE,BLUR,ERODE,INVERT];

	 
this.draw = function(){

	//Button to upload images
	this.input.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);
	//Filter menu
	filterMenu.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);
	

	if (img) {
		image(img, 0, 0, width, height);
	  }

	this.unselectTool = function () {
		//clear options by hiding styles
		this.input.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
		filterMenu.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

	};

	if(filterMenu.value() == 'Threshold')
	{
		filter(THRESHOLD);
		
			//Hide Posterize Slider
			posterizeSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
		    posterizeText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);		
	
	}

	if(filterMenu.value() == 'Gray')
	{
		filter(GRAY);
		
		//Hide Threshold slider when not needed
		posterizeSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
		posterizeText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
	
	}

	if(filterMenu.value() == 'Opaque')
	{
		filter(OPAQUE);
		//Hide Threshold slider when not needed
		posterizeSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
		posterizeText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

	}

	if(filterMenu.value() == 'Posterize')
	{
		filter(POSTERIZE, posterizeSlider.value());
		//Hide Threshold slider when not needed
		posterizeSlider.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);
		posterizeText.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);

		
	}

	if(filterMenu.value() == 'Dilate')
	{
		filter(DILATE);
		//Hide Threshold slider when not needed
		posterizeSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
		posterizeText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

		
	}

	if(filterMenu.value() == 'Blur')
	{
		filter(BLUR,10);
		
		//Hide Threshold slider when not needed
		posterizeSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
		posterizeText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

		
	}

	if(filterMenu.value() == 'Erode')
	{
		filter(ERODE);
		//Hide Threshold slider when not needed
		posterizeSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
		posterizeText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

		
	}

	if(filterMenu.value() == 'Invert')
	{
		filter(INVERT);
		posterizeSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
		posterizeText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

		
	}

}

};


handleFile = function(file) {
	print(file);
	if (file.type === 'image') {
	  img = createImg(file.data, '');
	  img.hide();
	} else {
	  img = null;
	}
  }


