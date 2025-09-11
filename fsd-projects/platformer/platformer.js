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
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 600, 200, 20);          
    createPlatform(400, 500, 150, 20, "red");   
    createPlatform(700, 400, 200, 20, "blue");  
    createPlatform(1000, 300, 100, 20, "lime"); 
    createPlatform(1300, 200, 250, 20);         






    // TODO 3 - Create Collectables
    createCollectable("diamond", 150, 550, 0, 0);  
    createCollectable("steve", 750, 350, 0.5, 0.7); 
    createCollectable("grace", 1350, 150, 0, 0);   



    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1500);    
    createCannon("right", 400, 2000);   
    createCannon("left", 500, 1000);    



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
