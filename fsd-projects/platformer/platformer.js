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
    createPlatform(200, 680, 200, 20);
    createPlatform(100, 550, 200, 20);
    createPlatform(200, 440, 200, 20);
    createPlatform(700, 440, 200, 20);
    createPlatform(400, 440, 10, 300);
    createPlatform(700, 440, 10, 300);
    createPlatform(700, 440, 10, 300);
    createPlatform(1000, 400, 10, 30);

    // TODO 3 - Create Collectables

    createCollectable("database", 550, 280);
    createCollectable("diamond", 1100, 280);
    createCollectable("steve", 300, 600, 0.5, 1);


    
    // TODO 4 - Create Cannons

    createCannon("top", 500, 2000);
    createCannon("top", 600, 1000);
    createCannon("top", 700, 2000);
    createCannon("top", 1200, 1000);

    

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
