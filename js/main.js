var View = require("./view.js");
var HanoiGame = require("../../hanoi-core-solution/game.js");

$(function () {
  var rootEl = $('.hanoi');
  var game = new HanoiGame();
  new View(game,rootEl);
});
