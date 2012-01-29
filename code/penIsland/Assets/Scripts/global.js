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
  boundRight = -14;
  boundLeft = 2;
}

function Update () {
	if (ghostBirds.length > 0) {
		playGhosts();
	}
}

function runUpdate(yPos: float, isFiring: boolean) { 
	var serialData = yPos+","+isFiring;
	locationArray.push(serialData);
	
	
	turnNum++;
	if (turnNum > 5000) {
		pushToGhosts();
	}
}

function pushToGhosts() {
	//assuming this is called when the player gets to the end
	//should probably also make a new ghost bird here, or in the bird object itself
	
	GameObject.Find("GhostBird").transform.position.x = GameObject.Find("Bird").transform.position.x; 
	GameObject.Find("Bird").transform.position.x = GameObject.Find("Bird").transform.position.x - 1.5;
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
			ghostObj.GetComponent(ghostMover).laserFire();
		}
				
		countGhost++;
	}

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