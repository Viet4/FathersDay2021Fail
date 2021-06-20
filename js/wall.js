function wall(){
    
    imageMode(CENTER);

    if (choice[2] === 1) {
        if (choice[0] === 1) {
            image(wall1h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(wall1h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(wall1h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(wall1h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[2] === 2) {
        if (choice[0] === 1) {
            image(wall2h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(wall2h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(wall2h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(wall2h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[2] === 3) {
        if (choice[0] === 1) {
            image(wall3h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(wall3h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(wall3h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(wall3h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[2] === 4) {
        if (choice[0] === 1) {
            image(wall4h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(wall4h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(wall4h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(wall4h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }
}