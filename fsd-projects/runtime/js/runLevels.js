var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    function createSawBlade (x, y) {
   var hitZoneSize = 25;
   var damageFromObstacle = 10;
   var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);








   sawBladeHitZone.x = x;
   sawBladeHitZone.y = y;
   game.addGameItem(sawBladeHitZone);








   var obstacleImage = draw.bitmap("img/sawblade.png");
   sawBladeHitZone.addChild(obstacleImage);








   obstacleImage.x = -25
   obstacleImage.y = -25
 }
  createSawBlade(400, 500); 
  createSawBlade(600, 375); 
  createSawBlade(800, 500);




 function createEnemy(x, y) {
 var enemy = game.createGameItem("enemy", 25);
 var redStar = draw.rect(50, 50, "red");
 redStar.x = -25;
 redStar.y = -25;
 enemy.addChild(redStar);




 enemy.x = x;
 enemy.y = y;




 game.addGameItem(enemy);


 enemy.velocityX = -3
 enemy.rotationalVelocity = 5




 enemy.onPlayerCollision = function () {
  game.changeIntegrity(-10)
 };




 enemy.onProjectileCollision = function () {
   game.increaseScore(1000);
   enemy.shrink();
 }
}




  createEnemy(1300, groundY - 50);
  createEnemy(1400, groundY - 50);
  createEnemy(1200, groundY - 50);
  createEnemy(1500, groundY - 120)


   function createReward(x, y) {
   var reward = game.createGameItem("reward", 25);
   var goldCircle = draw.circle(20, "gold");
   goldCircle.x = -1;
   goldCircle.y = -1;
   reward.addChild(goldCircle);


   reward.x = x;
   reward.y = y;


   game.addGameItem(reward);


   reward.velocityX = -3;


   reward.onPlayerCollision = function () {
       game.increaseScore(1000);
       reward.fadeOut();      
   };


   reward.onProjectileCollision = function () {
       reward.fadeOut();      
   };
}

createReward(1700, groundY - 150); 
createReward(1900, groundY - 150);
    
    
    function createMarker(x, y) {
    var marker = game.createGameItem('marker', 50);
    var circle = draw.circle(40, "white");
    circle.x = -1; 
    circle.y = -1;
    marker.addChild(circle);

    
    marker.x = x;
    marker.y = y;
   
   
    game.addGameItem(marker);

    marker.velocityX = -2
    
    marker.onPlayerCollision = function() {
      console.log("Marker touched — trying to start next level!");  
      startLevel(); 
    };

    
    marker.onProjectileCollision = function() {  
      console.log("Marker shot — trying to start next level!");
      startLevel(); 
    };
}
    createMarker(1600, groundY - 50);
      
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];

      var levelObjects = level.gameItems;

      for (var i = 0; i < levelObjects.length; i++) {
    var obj = levelObjects[i];

    if (obj.type === "sawblade") {
        createSawblade(obj.x, obj.y);
    } else if (obj.type === "enemy") {
        createEnemy(obj.x, obj.y);
    } else if (obj.type === "reward") {
        createReward(obj.x, obj.y);
    } else if (obj.type === "marker") {
        createMarker(obj.x, obj.y);
    }
}


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
