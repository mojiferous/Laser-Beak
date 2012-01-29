var enemyArray = new Array();

var prefab: Transform;
var boundLeft : float = -1.03721881;
var boundRight : float = 11.48046;
var boundBottom : float = -1.5;
var boundTop : float = 8.0;

function Start() {
  boundRight = 14;
  boundLeft = -2;
}

function Update () {
}

/**
 * Utilty function to randomize an array
 */

static function RandomizeArray(arr : Array) {
  for (var i = arr.length - 1; i > 0; i--) {
    var r = Random.Range(0,i);
    var tmp = arr[i];
    arr[i] = arr[r];
    arr[r] = tmp;
  }
}