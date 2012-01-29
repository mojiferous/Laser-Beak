var enemyArray = new Array();

var prefab: Transform;
var boundLeft : float = -1.03721881;
var boundRight : float = 11.48046;
var boundBottom : float = -1.5;
var boundTop : float = 8.0;
var locationArray = new Array();
var ghostBirds = new Array();
var numGhosts : int;
var turnNum : int;

function Start() {
  boundRight = 14;
  boundLeft = -2;
}

function Update () {
	var newTrans : Transform;
	var isFiring : System.Boolean;
	
	newTrans = GameObject.Find("Bird").GetComponent(Transform);
	isFiring = GameObject.Find("Bird").GetComponent(birdMover).fired; 
	var serialData = newTrans.localPosition.y+","+isFiring;
	locationArray.push(serialData);
	
	if (ghostBirds.length > 0) {
		playGhosts();
	}
	turnNum++;
	
	if (turnNum > 100) {
		pushToGhosts();
	}
}

function pushToGhosts() {
	//assuming this is called when the player gets to the end
	//should probably also make a new ghost bird here, or in the bird object itself
	var tempArray  = new Array();
	for(var strVar : System.String in locationArray) {
		tempArray.push(strVar);
	}
	ghostBirds.push(tempArray);
	
	locationArray.clear();
	numGhosts++;
	turnNum = 0;
}

function playGhosts() {
	var countGhost : int = 0;
	
	for(var ghostObj : GameObject in GameObject.FindGameObjectsWithTag("Ghost")) {
		
		var serialData = ghostBirds[countGhost][turnNum];
		var dataArray = new Array();
		dataArray = serialData.Split(","[0]);
		ghostObj.GetComponent(Transform).localPosition.y = float.Parse(dataArray[0]);
		if (dataArray[1] == "True") {
			print("Fire!");
			ghostObj.GetComponent(ghostMover).fired = true;
		}
				
		countGhost++;
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