var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
        
          { type: "enemy", x: 1300, y: groundY - 50 },
      
          { type: "reward", x: 2000, y: groundY - 60 },
      
          { type: "marker", x: 2500, y: groundY - 100 },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
        
          { type: "enemy", x: 1600, y: groundY - 50 },
      
          { type: "reward", x: 2300, y: groundY - 60 },
      
          { type: "marker", x: 2800, y: groundY - 100 },
        ],
      },
    {
      name: "Robot Rebellion",
      number: 3,
      speed: -5,
      gameItems: [
        { type: "sawblade", x: 500, y: groundY },
        { type: "sawblade", x: 900, y: groundY },
        { type: "sawblade", x: 1300, y: groundY },
        { type: "enemy", x: 1700, y: groundY - 50 },
        { type: "enemy", x: 2000, y: groundY - 50 },
        { type: "reward", x: 2400, y: groundY - 60 },
        { type: "marker", x: 3000, y: groundY - 100 },
       ],
    }
    
  ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
