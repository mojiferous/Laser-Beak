var laserPrefab: Transform; 
var fired: boolean = false;
var laserFired : boolean = false;
var laserSpeed: float = 5;
var laser;


function Update () {
	if (fired && !laserFired) {
		laserFire();
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
  laser = Instantiate(laserPrefab, Vector3(transform.position.x - 30, transform.position.y, transform.position.z), transform.rotation);
}