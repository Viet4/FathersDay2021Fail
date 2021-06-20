function door(){
    
    imageMode(CENTER);

    if (choice[4] === 2) {
        if (choice[0] === 1) {
            image(door2h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(door2h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(door2h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(door2h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[4] === 3) {
        if (choice[0] === 1) {
            image(door3h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(door3h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(door3h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(door3h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[4] === 4) {
        if (choice[0] === 1) {
            image(door4h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(door4h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(door4h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(door4h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }
}