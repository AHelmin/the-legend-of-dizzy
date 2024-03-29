
localStorage.setItem("gameOver", JSON.stringify(false));

let currentScore;

export const changeScore = (addPoints) => {

    let currentScore = JSON.parse(localStorage.getItem("currentScore"));
    if (!currentScore || addPoints === 0) {
      currentScore = 0;
  }
    let newScore = currentScore += addPoints;
    localStorage.setItem("currentScore", JSON.stringify(newScore));
  
    return newScore;
  };

var map = {
    cols: 36,
    rows: 28,
    tsize: 32,
    layers: [[
        80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,
        80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 80, 12, 13, 13, 14, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 79, 80, 80,
        80, 80, 28, 29, 29, 30, 80, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 95, 96, 80,
        80, 80, 28, 29, 29, 30, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,
    ], [
        88, 89, 90, 98, 99, 100, 98, 99, 100, 98, 99, 100, 98, 99, 100, 98, 99, 100, 98, 99, 100, 98, 99, 100, 98, 99, 100, 98, 99, 100, 98, 99, 100, 98, 99, 88,
        180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
        54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49,
        54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49,
        54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
        54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49,
        54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
        54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
        54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
        54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 206, 0, 0, 33,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 222, 0, 0, 49,
        54, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 133, 134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49,
        54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33,
        38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49,
        54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65,
        116, 4, 4, 0, 0, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 4, 3, 4, 3, 3, 4, 3, 3, 4, 3, 18
    ]],
    music: "/snes-rpg/assets/openingtheme.mp3",
    getTile: function (layer, col, row) {
        return this.layers[layer][row * map.cols + col];
    },
    isSolidTileAtXY: function (x, y) {
        var col = Math.floor(x / this.tsize);
        var row = Math.floor(y / this.tsize);

        // loop through all layers and return TRUE if any tile is solid
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, col, row);
            var solidTiles = [3, 4, 88, 89, 90, 98, 99, 100, 180, 38, 54, 116, 18, 33, 49, 65, 117, 118, 232, 233, 248, 249, 206, 222]
            var isSolid = solidTiles.includes(tile);
            return res || isSolid;
        }.bind(this), false);
    },
    isDoorAtXY: function (x, y) {
        var col = Math.floor(x / this.tsize);
        var row = Math.floor(y / this.tsize);

        // loop through all layers and return TRUE if any tile is a door
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, col, row);
            var doorTiles = [29]
            var isDoor = doorTiles.includes(tile);
            return res || isDoor;
        }.bind(this), false);
    },
    getCol: function (x) {
        return Math.floor(x / this.tsize);
    },
    getRow: function (y) {
        return Math.floor(y / this.tsize);
    },
    getX: function (col) {
        return col * this.tsize;
    },
    getY: function (row) {
        return row * this.tsize;
    }
};

function Camera(map, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize - width;
    this.maxY = map.rows * map.tsize - height;
}

Camera.prototype.follow = function (sprite) {
    this.following = sprite;
    sprite.screenX = 0;
    sprite.screenY = 0;
};

Camera.prototype.update = function () {
    // assume followed sprite should be placed at the center of the screen
    // whenever possible
    this.following.screenX = this.width / 2;
    this.following.screenY = this.height / 2;

    // make the camera follow the sprite
    this.x = this.following.x - this.width / 2;
    this.y = this.following.y - this.height / 2;
    // clamp values
    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));

    // in map corners, the sprite cannot be placed in the center of the screen
    // and we have to change its screen coordinates

    // left and right sides
    if (this.following.x < this.width / 2 ||
        this.following.x > this.maxX + this.width / 2) {
        this.following.screenX = this.following.x - this.x;
    }
    // top and bottom sides
    if (this.following.y < this.height / 2 ||
        this.following.y > this.maxY + this.height / 2) {
        this.following.screenY = this.following.y - this.y;
    }
};

function Hero(map, x, y) {
    this.map = map;
    this.x = x;
    this.y = y;
    this.width = map.tsize;
    this.height = map.tsize;

    this.image = Loader.getImage('hero');
}

Hero.SPEED = 256; // pixels per second

Hero.prototype.move = function (delta, dirx, diry) {
    // move hero
    this.x += dirx * Hero.SPEED * delta;
    this.y += diry * Hero.SPEED * delta;

    // check if we walked into a non-walkable tile
    this._collide(dirx, diry);

    // check if we walked through a door
    this._door(dirx, diry);

    // clamp values
    var maxX = this.map.cols * this.map.tsize;
    var maxY = this.map.rows * this.map.tsize;
    this.x = Math.max(0, Math.min(this.x, maxX));
    this.y = Math.max(0, Math.min(this.y, maxY));
};

Hero.prototype._collide = function (dirx, diry) {
    var row, col;
    // -1 in right and bottom is because image ranges from 0..63
    // and not up to 64
    var left = this.x - this.width / 2;
    var right = this.x + this.width / 2 - 1;
    var top = this.y - this.height / 2;
    var bottom = this.y + this.height / 2 - 1;

    // check for collisions on sprite sides
    var collision =
        this.map.isSolidTileAtXY(left, top) ||
        this.map.isSolidTileAtXY(right, top) ||
        this.map.isSolidTileAtXY(right, bottom) ||
        this.map.isSolidTileAtXY(left, bottom);
    if (!collision) { return; }

    if (diry > 0) {
        row = this.map.getRow(bottom);
        this.y = -this.height / 2 + this.map.getY(row);
    }
    else if (diry < 0) {
        row = this.map.getRow(top);
        this.y = this.height / 2 + this.map.getY(row + 1);
    }
    else if (dirx > 0) {
        col = this.map.getCol(right);
        this.x = -this.width / 2 + this.map.getX(col);
    }
    else if (dirx < 0) {
        col = this.map.getCol(left);
        this.x = this.width / 2 + this.map.getX(col + 1);
    }
};

let openedDoor = false;

Hero.prototype._door = async function (dirx, diry) {
  var row, col;
  // -1 in right and bottom is because image ranges from 0..63
  // and not up to 64
  var left = this.x - this.width / 2;
  var right = this.x + this.width / 2 - 1;
  var top = this.y - this.height / 2;
  var bottom = this.y + this.height / 2 - 1;

  // check for door on sprite sides
  var door =
    this.map.isDoorAtXY(left, top) ||
    this.map.isDoorAtXY(right, top) ||
    this.map.isDoorAtXY(right, bottom) ||
    this.map.isDoorAtXY(left, bottom);
  if (!door) {
    openedDoor = false;
    return;
  } else {
    if (!openedDoor) {
      const sound = new Audio((src = "/snes-rpg/assets/doorOpen.mp3"));
      sound.volume = 0.2;
      sound.play();
      openedDoor = true;
      sound.addEventListener("ended", (event) => {
          document.location.replace("/2d-game-concept/index.html")
          currentScore = changeScore(10);
      })
    }
  }
};

Game.load = function () {
    return [
        Loader.loadImage('tiles', '/snes-rpg/assets/mountain_landscape.png'),
        Loader.loadImage('hero', '/snes-rpg/assets/character.png'),
    ];
};

Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN, Keyboard.A, Keyboard.D, Keyboard.W, Keyboard.S, Keyboard.SPACE]);
    this.tileAtlas = Loader.getImage('tiles');

    this.hero = new Hero(map, 800, 100);
    this.camera = new Camera(map, 800, 600);
    this.camera.follow(this.hero);
};

Game.update = function (delta) {
    // handle hero movement with arrow keys
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
    else if (Keyboard.isDown(Keyboard.A)) { dirx = -1; }
    else if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
    else if (Keyboard.isDown(Keyboard.D)) { dirx = 1; }
    else if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
    else if (Keyboard.isDown(Keyboard.W)) { diry = -1; }
    else if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }
    else if (Keyboard.isDown(Keyboard.S)) { diry = 1; }
    else if (Keyboard.isDown(Keyboard.SPACE)) {console.log("pew pew!")}

    this.hero.move(delta, dirx, diry);
    this.camera.update();
};

Game._drawLayer = function (layer) {
    var startCol = Math.floor(this.camera.x / map.tsize);
    var endCol = startCol + (this.camera.width / map.tsize);
    var startRow = Math.floor(this.camera.y / map.tsize);
    var endRow = startRow + (this.camera.height / map.tsize);
    var offsetX = -this.camera.x + startCol * map.tsize;
    var offsetY = -this.camera.y + startRow * map.tsize;

    for (var c = startCol; c <= endCol; c++) {
        for (var r = startRow; r <= endRow; r++) {
            var tile = map.getTile(layer, c, r);
            var x = (c - startCol) * map.tsize + offsetX;
            var y = (r - startRow) * map.tsize + offsetY;
            if (tile !== 0) { // 0 => empty tile
                this.ctx.drawImage(
                    this.tileAtlas, // image
                    ((tile - 1) % 16) * map.tsize, // source x
                    Math.floor((tile - 1)/16) * map.tsize, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    Math.round(x),  // target x
                    Math.round(y), // target y
                    map.tsize, // target width
                    map.tsize // target height
                );
            }
        }
    }
};

Game._drawGrid = function () {
        var width = map.cols * map.tsize;
    var height = map.rows * map.tsize;
    var x, y;
    for (var r = 0; r < map.rows; r++) {
        x = - this.camera.x;
        y = r * map.tsize - this.camera.y;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(width, y);
        this.ctx.stroke();
    }
    for (var c = 0; c < map.cols; c++) {
        x = c * map.tsize - this.camera.x;
        y = - this.camera.y;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x, height);
        this.ctx.stroke();
    }
};


Game.render = function () {
    // draw map background layer
    this._drawLayer(0);

    // draw main character
    this.ctx.drawImage(
        this.hero.image,
        this.hero.screenX - this.hero.width / 2,
        this.hero.screenY - this.hero.height / 2);

    // draw map top layer
    this._drawLayer(1);

    // this._drawGrid();
};
