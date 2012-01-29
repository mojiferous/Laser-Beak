var laserPrefab: Transform; 
var fired: boolean = false;
var laserFired : boolean = false;
var laserSpeed: float = 5;
var laser;
var animScript;
animScript = GetComponent(birdAnimation);


function Update () {
	if (fired && !laserFired) {
		//laserFire();
	}
	if (laserFired) {
    laser.position.x -= laserSpeed * .2;
    if (laser.position.x < -10){
      Destroy(laser.gameObject);
      laserFired = false;
    }
  }
}

function laserFire() {
	fired = false;
	laserFired = true;
	animScript.rowNumber = 1;
  	laser = Instantiate(laserPrefab, Vector3(transform.position.x - 5, transform.position.y - .1, transform.position.z), transform.rotation);
}