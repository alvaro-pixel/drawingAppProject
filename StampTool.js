
function StampTool() {
    this.icon = "assets/stamp.jpg";
    this.name = "stamp";
    //load image from the start, later when uploading a different image
    //for the stamp tool this.star needs to be changed
    const star = loadImage("assets/star.png");
    const heart = loadImage("assets/heart.png");
    const clover = loadImage("assets/clover.png");
    const moon = loadImage("assets/moon.png");
    const diamond = loadImage("assets/diamond.png");

    let starSize;
    let selectedStamp;

    //This creates the sliders outside the app since we are calling them
    //on setup
    let numSizeSlider = createSlider(1, 20, 1);
    let starSizeSlider = createSlider(5, 100, 5);

    //Turns off stamp tool editing sliders
    numSizeSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);
    starSizeSlider.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

    //Simple text message for user
    let stampText = createP('Hint: You need to pick stamp to start using tool');
    stampText.position(appUI.position[2],appUI.position[3]);
    stampText.style(appUI.fontStyle[0], appUI.fontStyle[1]);
	stampText.style(appUI.fontColor[0], appUI.fontColor[2]);
	stampText.style(appUI.fontFamily[0], appUI.fontFamily[1]);
    stampText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);



    //Array to store stamp names
    const stampNames = [
        'Select Stamp',
        'star ⭐',
        'heart 💝',
        'clover 🍀',
        'moon🌙',
        'diamond🔷'
    ];


    //Populates de dropdown with the stamp names array
    this.populateOptions = function () {
        select("#stampSelect").html("<select id='myStamps'></select>");
        let stampDropdown = document.getElementById('myStamps');
        //add options "stamp names" to the dropdown element
        for (var i = 0; i < stampNames.length; i++) {
            let createOption = document.createElement('option');
            createOption.text = stampNames[i];
            createOption.value = stampNames[i];
            stampDropdown.add(createOption);
        }

        this.select = document.getElementById('myStamps');

        //When using arrow function it makes it 'global'
        document.getElementById('myStamps').addEventListener('change', (event) => {
            selectedStamp = event.target.value;
        });

    };

    //Clears current tool
    this.unselectTool = function () {
        updatePixels();
        //clear options
        select("#stampSelect").html("");
    };

    //Selects the div where numstar and starsize sliders are stored
    let changeNumstar = document.getElementById('Numstars');
    let starOfSize = document.getElementById('Starsize');


    this.draw = function () {

        loadPixels();
        //This puts both sliders inside a div called content 
        numSizeSlider.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);
        starSizeSlider.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);
        stampText.style(appUI.uiElementsDisplayOn[0],appUI.uiElementsDisplayOn[1]);


        numSizeSlider.parent('#Numstars');
        starSizeSlider.parent('#Starsize');

        //Changes style in numstar div
        changeNumstar.style.color = "white";
        changeNumstar.style.display = "block";

        starOfSize.style.color = "white";
        starOfSize.style.display = "block";

        this.unselectTool = function () {
            updatePixels();
            //clear options
            select("#stampSelect").html("");
            starOfSize.style.display = "none";
            changeNumstar.style.display = "none";
            stampText.style(appUI.uiElementsDisplayOff[0],appUI.uiElementsDisplayOff[1]);

        };

        if (mouseIsPressed) {
            for (var i = 0; i < numSizeSlider.value(); i++) {

                starSize = starSizeSlider.value();
                var starX = random((mouseX - starSize / 2) - 10,
                    (mouseX - starSize / 2) + 10);

                var starY = random((mouseY - starSize / 2) - 10,
                    (mouseY - starSize / 2) + 10)

                              
                if (stampNames[1] === selectedStamp) {

                    image(star, starX, starY, starSize, starSize);
                }


                if (stampNames[2] === selectedStamp) {
                    image(heart, starX, starY, starSize, starSize);
                }


                if (stampNames[3] === selectedStamp) {
                    image(clover, starX, starY, starSize, starSize);
                }

                if (stampNames[4] === selectedStamp) {
                    image(moon, starX, starY, starSize, starSize);
                }

                if (stampNames[5] === selectedStamp) {
                    image(diamond, starX, starY, starSize, starSize);
                }



            }

        }


    }

}







