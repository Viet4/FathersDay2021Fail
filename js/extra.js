function extra(){
    
    imageMode(CENTER);

    if (choice[5] === 1) {
        if (choice[0] === 2) {
            image(bush1h, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(extra1h, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(stairs1h, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[5] === 2) {
        if (choice[0] === 2) {
            image(bush2h, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(extra2h, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(stairs2h, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[5] === 3) {
        if (choice[0] === 2) {
            image(bush3h, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(extra3h, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(stairs3h, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }

    else if (choice[5] === 4) {
        if (choice[0] === 2) {
            image(bush4h, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 3) {
            image(extra4h, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
        else if (choice[0] === 4) {
            image(stairs4h, displayWidth*.5, displayHeight*.5, displayHeight/2, displayHeight/2)
        }
    }
}