function View(game, $el) {
  this.game = game;
  this.$el = $el;
  this.clickedPileNum = null;
  this.setupTowers();
  this.render();
  this.$el.on("click", ".tower", this.clickTower.bind(this));
}

View.prototype.clickTower = function(e) {
  // debugger;
  if (!this.clickedPileNum) {
    this.clickedPileNum = ($(e.currentTarget)).attr("num");
  }
  else {
    var endTowerIdx = $(e.currentTarget).attr("num");
    if (this.game.move(this.clickedPileNum, $(e.currentTarget).attr("num"))) {
      this.clickedPileNum = null;
    }
    else {
      window.alert("Invalid move");
    }
    this.render();
  }
  if (this.game.isWon()) {
    window.alert("Good work, you!");
  }
};

View.prototype.setupTowers = function() {
  for (var i = 0; i < 3; i++) {
    var $stack = $("<ul>").addClass("tower").attr("num", i);
    for (var j = 1; j < 4; j++) {
      var $disk = $("<li>");
      $stack.append($disk);
    }
    this.$el.append($stack);
  }
};

View.prototype.render = function() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      this.$el.children().eq(i).children().eq(2-j).removeClass();
      if (this.game.towers[i][j]) {
        this.$el.children().eq(i).children().eq(2-j).addClass("disk-" +
         (this.game.towers[i][j]));
      }
    }
  }
};

module.exports = View;
