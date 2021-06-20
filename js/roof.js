function roof(){
    
    imageMode(CENTER);

    if (choice[1] === 1) {
        if (choice[0] === 1) {
            image(roof1h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(roof1h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(roof1h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(roof1h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[1] === 2) {
        if (choice[0] === 1) {
            image(roof2h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(roof2h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(roof2h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(roof2h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[1] === 3) {
        if (choice[0] === 1) {
            image(roof3h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(roof3h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(roof3h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(roof3h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[1] === 4) {
        if (choice[0] === 1) {
            image(roof4h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(roof4h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(roof4h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(roof4h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }
}