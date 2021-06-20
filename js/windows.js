function windows(){
    
    imageMode(CENTER);

    if (choice[3] === 1) {
        if (choice[0] === 1) {
            image(window1h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(window1h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(window1h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(window1h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[3] === 2) {
        if (choice[0] === 1) {
            image(window2h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(window2h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(window2h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(window2h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[3] === 3) {
        if (choice[0] === 1) {
            image(window3h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(window3h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(window3h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(window3h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[3] === 4) {
        if (choice[0] === 1) {
            image(window4h1, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 2) {
            image(window4h2, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(window4h3, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(window4h4, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }
}