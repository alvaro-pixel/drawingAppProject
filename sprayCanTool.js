//spray can object literal
function SprayCanTool() {
    this.name = "sprayCanTool",
    this.icon = "assets/sprayCan.jpg",

    //Spray can width slider controls
    this.sprayText = createP('Spray Can Width');
	this.sprayText.position(340,540);
	this.sprayText.style('font-size','16px');
	this.sprayText.style('color','white');
	this.sprayText.style('font-family','nunito');
	this.sprayText.style('display','none');

	
	this.spraySlider = createSlider(10,50,20);
	this.spraySlider.position(340,587);
	this.spraySlider.style('display','none');

    this.points = 30,
    this.spread = 10,



    this.draw = function(){
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.

        this.spraySlider.style('display','block');
        this.sprayText.style('display','block');

        this.spread = this.spraySlider.value();


        if(mouseIsPressed){
            for(var i = 0; i < this.points; i++){
                point(random(mouseX-this.spread, mouseX + this.spread), 
                    random(mouseY-this.spread, mouseY+this.spread));
            }
        }
    }
    this.unselectTool = function () {
        //clear options by hiding styles
        this.spraySlider.style('display','none');
        this.sprayText.style('display','none');


    };
}

