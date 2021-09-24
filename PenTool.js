function PenTool() {
    this.icon = "assets/pen.jpg";
    this.name = "pen";
    this.pencursor = '/assets/pencursor.png'
    //Let's user close path when shape is finished
    closePath = false;
    
    //These buttons let you manage the pen tool
    //Their functions are accessed via helperfunctions
    let closePointsButton = document.getElementById('close-button');
    //let addPointsButton = document.getElementById('add-button');
    let bezierControls = document.getElementById('bezier-controls');

    this.draw = function () {
        cursor(this.pencursor, 10, 10);

        //Array to retrieve default values
        const defaultBezier = [
            document.getElementById('X1').value,
            document.getElementById('Y1').value,
            document.getElementById('X2').value,
            document.getElementById('Y2').value,
            document.getElementById('X3').value,
            document.getElementById('Y3').value,
            document.getElementById('X4').value,
            document.getElementById('Y4').value

        ];


        //Displays editing buttons for pen tool
        closePointsButton.style.display = "block";
        //addPointsButton.style.display = "block";
        bezierControls.style.display = "flex";


        for (const [pIndex, inputs] of points.entries()) {

            beginShape()
            noFill();
            strokeWeight(0);
            updatePixels();
            fill('red');
            ellipse(defaultBezier[0], defaultBezier[1], 5) //For first anchor
            ellipse(defaultBezier[6], defaultBezier[7], 5) //for second anchor
            fill('green');
            ellipse(defaultBezier[2], defaultBezier[3], 5) //For first control
            ellipse(defaultBezier[4], defaultBezier[5], 5) //For first control

            noFill();
            strokeWeight(1);
            //Values for initial bezier - Stored in points array in sketch.js
            vertex(document.getElementById('X1').value, document.getElementById('Y1').value); //First anchor point - default

            //User input to edit initial bezier values
            //First and second Anchorpoints switched to improve usability
            bezierVertex(defaultBezier[2], defaultBezier[3],
                defaultBezier[4], defaultBezier[5],
                defaultBezier[6], defaultBezier[7]);

            //Close created bezier
            if (closePath) {
                endShape(CLOSE);
            }
            else {
                endShape();
            }
        }


        this.unselectTool = function () {
            //clear options by hiding styles
            strokeWeight(1);
            fill('black');
            closePointsButton.style.display = "none";
            //addPointsButton.style.display = "none";
            bezierControls.style.display = "none";

        };

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




