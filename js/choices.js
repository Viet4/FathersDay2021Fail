function choices(){

    imageMode(CENTER);
    textAlign(CENTER);
    textSize(displayWidth/40);
    fill("#D4D4D4");
    textStyle("bold");
    textFont("Candara");

    if (choice.length === 0) {
        text("Step 1: Choose the house layout", displayWidth/2, displayHeight*.125)
    
        image(house1, displayWidth*.125, displayHeight*.25, displayHeight/6, displayHeight/6);
        image(house2, displayWidth*.125, displayHeight*.75, displayHeight/6, displayHeight/6);
        image(house3, displayWidth*.875, displayHeight*.25, displayHeight/6, displayHeight/6);
        image(house4, displayWidth*.875, displayHeight*.75, displayHeight/6, displayHeight/6);
      }
    
      if(choice.length === 1){
        text("Step 2: Choose the roof design", displayWidth/2, displayHeight*.125);
    
        image(roof1, displayWidth*.125, displayHeight*.25, displayHeight/6, displayHeight/6);
        image(roof2, displayWidth*.125, displayHeight*.75, displayHeight/6, displayHeight/6);
        image(roof3, displayWidth*.875, displayHeight*.25, displayHeight/6, displayHeight/6);
        image(roof4, displayWidth*.875, displayHeight*.75, displayHeight/6, displayHeight/6);
      }

      if(choice.length === 2){
        text("Step 3: Choose the wall design", displayWidth/2, displayHeight*.125);

        image(wall1, displayWidth*.125, displayHeight*.25, displayHeight/8, displayHeight/8);
        image(wall2, displayWidth*.125, displayHeight*.75, displayHeight/8, displayHeight/8);
        image(wall3, displayWidth*.875, displayHeight*.25, displayHeight/8, displayHeight/8);
        image(wall4, displayWidth*.875, displayHeight*.75, displayHeight/8, displayHeight/8);
      }
    
      if(choice.length === 3){
        text("Step 4: Choose the window color", displayWidth/2, displayHeight*.125);

        image(window1, displayWidth*.125, displayHeight*.25, displayHeight/8, displayHeight/8);
        image(window2, displayWidth*.125, displayHeight*.75, displayHeight/8, displayHeight/8);
        image(window3, displayWidth*.875, displayHeight*.25, displayHeight/8, displayHeight/8);
        image(window4, displayWidth*.875, displayHeight*.75, displayHeight/8, displayHeight/8);
      }

      if(choice.length === 4){
        text("Step 5: Choose the door color", displayWidth/2, displayHeight*.125);

        image(door1, displayWidth*.125, displayHeight*.25, displayHeight/8, displayHeight/8);
        image(door2, displayWidth*.125, displayHeight*.75, displayHeight/8, displayHeight/8);
        image(door3, displayWidth*.875, displayHeight*.25, displayHeight/8, displayHeight/8);
        image(door4, displayWidth*.875, displayHeight*.75, displayHeight/8, displayHeight/8);
      }

      if(choice.length === 5){
        if (choice[0] === 2){
          text("Step 6: Choose the bush type", displayWidth/2, displayHeight*.125);
          image(bush1, displayWidth*.125, displayHeight*.25, displayHeight/8, displayHeight/8);
          image(bush2, displayWidth*.125, displayHeight*.75, displayHeight/8, displayHeight/8);
          image(bush3, displayWidth*.875, displayHeight*.25, displayHeight/8, displayHeight/8);
          image(bush4, displayWidth*.875, displayHeight*.75, displayHeight/8, displayHeight/8);
        }
        else if (choice[0] === 3){
          text("Step 6: Choose the extra area color", displayWidth/2, displayHeight*.125);
          image(extra1, displayWidth*.125, displayHeight*.25, displayHeight/8, displayHeight/8);
          image(extra2, displayWidth*.125, displayHeight*.75, displayHeight/8, displayHeight/8);
          image(extra3, displayWidth*.875, displayHeight*.25, displayHeight/8, displayHeight/8);
          image(extra4, displayWidth*.875, displayHeight*.75, displayHeight/8, displayHeight/8);
        }
        else if (choice[0] === 4){
          text("Step 6: Choose the stairs color", displayWidth/2, displayHeight*.125);
          image(stairs1, displayWidth*.125, displayHeight*.25, displayHeight/8, displayHeight/8);
          image(stairs2, displayWidth*.125, displayHeight*.75, displayHeight/8, displayHeight/8);
          image(stairs3, displayWidth*.875, displayHeight*.25, displayHeight/8, displayHeight/8);
          image(stairs4, displayWidth*.875, displayHeight*.75, displayHeight/8, displayHeight/8);
        }
      }
}