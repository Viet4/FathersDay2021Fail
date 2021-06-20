function house(){

    imageMode(CENTER);

    if (choice.length === 0) {
        image(house0, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2);
    }

    if (choice.length > 0) {
        if (choice[0] === 1) {
          image(house1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
          image(house2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
          image(house3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
          image(house4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }
}