function ShapeTool(){
    this.name = "shapeTool"
    this.icon = "assets/shape.jpg";

    //Reminder: Edit buttons for shape tool are accesed via helperFunctions.js
    let finishShape= document.getElementById('Finish-Shape');
    let editshape = document.getElementById('Edit-Shape');
  
    this.draw = function(){

        finishShape.style.display = "block";
        editshape.style.display = "block";

        if(mouseIsPressed && mousePressedOnCanvas()){
            updatePixels();
            if(!editMode)
            {
                currentShapes.push({
                    x : mouseX,
                    y : mouseY
                });
            }
                else
                {
                    for(var i = 0; i < currentShapes.length; i++)
                    {
                        if(dist(currentShapes[i].x,
                                currentShapes[i].y,
                                mouseX,
                                mouseY) < 15)
                                {
                                    currentShapes[i].x = mouseX;
                                    currentShapes[i].y = mouseY;
                                }
                    }
                }
        
        
        beginShape()
        noFill();
        //Variation on for loop syntax
        for(const [index, shape] of currentShapes.entries())
        {
            vertex(currentShapes[index].x, currentShapes[index].y);
            if(editMode){
                fill('red');
                ellipse(currentShapes[index].x,
                        currentShapes[index].y,5);
                noFill();
            }
        }

        endShape();

        }

        this.unselectTool = function() {
            //clear options
            finishShape.style.display = "none";
            editshape.style.display = "none";
        };

    };

}  

    mousePressedOnCanvas = function(){
         if((mouseX <= canvasContainer.size().width && mouseX >= 0) &&
              mouseY <= canvasContainer.size().height && mouseY >= 0)
                
         {
             text(mouseX,mouseX,mouseY);
             return true;      
             
         };
            return false;
            
     } 



    

