function TextTool() {
    this.icon = "assets/text.jpg";
    this.name = "text";

    //Create input field and set initial field styles
    input.id('text-input');
    input.style('display', 'none');

    //Slider creation and properties
    let fontSizeSlider = createSlider(1, 100, 20, 20);
    fontSizeSlider.style('display', 'none'); //Hide before tool is called
    fontSizeSlider.position(420, 600);
    fontSize = fontSizeSlider.value();

    //Dropdown Menu to choose font
    let fontMenu = createSelect();
    //Populates menu with browser native fonts
    fontMenu.option('Roboto', 'Roboto');
    fontMenu.option('Merriweather', 'Merriweather');
    fontMenu.option('Georgia', 'Georgia');
    fontMenu.option('Helvetica', 'Helvetica');
    fontMenu.option('Courier New', 'Courier New');

    fontMenu.selected('Courier New');
    fontMenu.style('display', 'none'); //Hide font menu before tool is called
    fontMenu.position(620, 600);

    //Select Title of font slider and font menu ids
    let fontSizeId = document.getElementById('Font-Size');
    let fontMenuId = document.getElementById('Font-Menu');


    //Reminder: Edit buttons for shape tool are accesed via helperFunctions.js
    let printButton = document.getElementById('Print-Text');


    this.draw = function () {

        //Elements that print and modify text (size,font)
        printButton.style.display = "block";
        fontSizeSlider.style('display', 'block');
        fontMenu.style('display', 'block');

        //Display of font slider and font menu titles
        fontSizeId.style.display = "block";
        fontMenuId.style.display = "block";

        cursor('text');

        this.mouseIsClicked()

        if (readyForPrint) {
            this.printInputValue();
            readyForPrint = false;
            saveTextStates = [];
            saveTextData = [];
        }

        this.unselectTool = function () {
            //updatePixels(); removed because we don't want our text to disappear
            //clear options by hiding styles
            printButton.style.display = "none";
            fontMenuId.style.display = "none";
            fontSizeId.style.display = "none";
            fontMenu.style.display = "none";
            fontSizeSlider.style('display', 'none');
            fontMenu.style('display', 'none');


        };

    }


    //Important to know this function stores whever your click is to
    //later print whatever you typed on the inputfied  
    this.mouseIsClicked = function () {
        if (mouseButton === LEFT && cursorIsOnCanvas() && mouseIsPressed) {
            saveTextStates.push({
                x: mouseX,
                y: mouseY,
                //Lets you use the text input field
            });
            inputFieldOn = true;
            input.style('display', 'block');

            for (var i = 0; i < saveTextStates.length; i++) {
                input.position(saveTextStates[i].x, mouseY + 20);

            }

        }


    }

    this.printInputValue = function () {
        const inputValue = input.value();

        saveTextData.push({ inputValue: input.value() });
        for (const [indexState, state] of saveTextStates.entries()) {

            for (const [indexTextInput, inputs] of saveTextData.entries()) {

                textSize(fontSizeSlider.value());
                textFont(fontMenu.value());
                text(saveTextData[indexTextInput].inputValue,
                    saveTextStates[indexState].x,
                    saveTextStates[indexState].y);
            }

        }

        inputFieldOn = false;
    }

    //Checks limits of canvas 
    cursorIsOnCanvas = function () {
        if ((mouseX <= canvasContainer.size().width && mouseX >= 0) &&
            mouseY <= canvasContainer.size().height && mouseY >= 0) {
            return true;
        }
        return false;
    }

}