var enemyPrefab: Transform;
// How often to spawn enemies
var spawnInterval: float = 1.0;
// Randomized y position storage
var cubeY : float = 0;
// Timer var to store time since start.
var timer: float = 0.0;
// Storage var to make duration comparisons
var lastTimer : float = 0.0;

function Start () {
  for(i = 0; i < 25; i++) {
    cubeY = Random.Range(GameObject.Find("Global").GetComponent(global).boundBottom, GameObject.Find("Global").GetComponent(global).boundTop);
    var cube = Instantiate(enemyPrefab, Vector3 (GameObject.Find("Global").GetComponent(global).boundRight, cubeY, 11.56675), Quaternion.identity);
    GameObject.Find("Global").GetComponent(global).enemyArray.push(cube);
  }
}

function Update () {
  timer = timer + Time.deltaTime;
  toSpawn = Mathf.Floor(Random.Range(0, 3));
  if (timer-lastTimer >= spawnInterval) {
    activateEnemies(toSpawn);
    lastTimer = timer;
  }
}

/**
 * utiltiy function to activate intstances.
 * setting an instances isActive to true allows resulting events to occur elsewhere (like enemyMover.js)
 * @param numToActivate
 * @returns bool true
 */

static function activateEnemies(numToActivate) {
  var count = 0;
  GameObject.Find("Global").GetComponent(global).RandomizeArray(GameObject.Find("Global").GetComponent(global).enemyArray);
  for (instance in GameObject.Find("Global").GetComponent(global).enemyArray) {
    if (instance.GetComponent(enemyMover).isActive == false && count <= numToActivate-1) {
      instance.GetComponent(enemyMover).isActive = true;
      count ++;
    }
    if (count >= numToActivate) {
      return true;
    }
  }
  return true;
}