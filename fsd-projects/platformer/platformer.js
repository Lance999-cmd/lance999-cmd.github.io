$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatforms(200, 650, 100, 20);
    createPlatforms(400, 600, 100, 100);
    createPlatforms(600, 550, 100, 150);
    createPlatforms(800, 500, 100, 200);
    createPlatforms(1000, 450, 100, 250);






    // TODO 3 - Create Collectables
    createCollectable("diamond", 250, 600);
    createCollectable("diamond", 450, 550);
    createCollectable("diamond", 650, 500);



    
    // TODO 4 - Create Cannons
    createCannon("left", 400, 2000);
    createCannon("top", 500, 2000);
    createCannon("top", 900, 2000);
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
