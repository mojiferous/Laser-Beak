
var laserPrefab: Transform; 
var speed : float = 6.0;
var fired: boolean = false;
var laserSpeed: float = 1;
var laser;
private var moveDirection : Vector3 = Vector3.zero;
private var laserDirection: Vector3 = Vector3.zero;
var animScript;
animScript = GetComponent(birdAnimation);
var fireRate : float = 0.5;
private var nextFire : float = 0.0;

function Update() {

    var controller : CharacterController = GetComponent(CharacterController);
    
    // We are grounded, so recalculate
    // move direction directly from axes
	var processMove : boolean = false;
    if (this.transform.position.y <= 7.736407 && this.transform.position.y >= -1.159487){
    	moveDirection = Vector3(0, Input.GetAxis("Move"), 0);
    	processMove = true;
    } else {
    
    
    	if (this.transform.position.y > 7.736407) {
    		if (Input.GetAxis("Move") < 0) {
    			moveDirection = Vector3(0, Input.GetAxis("Move"), 0);
    			processMove = true;
			}
    	} else {
    		if (Input.GetAxis("Move") > 0) {
    			moveDirection = Vector3(0, Input.GetAxis("Move"), 0);
    			processMove = true;
			}
    	}	
    }
    
    var isFiring : boolean = false;
    
    if(processMove) {
	    moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *= speed;
	      
	    controller.Move(moveDirection * Time.deltaTime);
    }
    if (Input.GetAxis("Fire1")) {
      if (fired == false && Time.time > nextFire){
      	isFiring = true;
        nextFire = Time.time + fireRate;
        fireLaser();
      }
    }
    if (fired) {
      laser.position.x -= laserSpeed * .05;
      if (laser.position.x <-20){
        Destroy(laser.gameObject);
        fired = false;
        animScript.rowNumber = 0;
      }
    }
    
    GameObject.Find("Global").GetComponent(global).runUpdate(this.transform.position.y,isFiring);
}

function fireLaser() {
  fired = true;
  animScript.rowNumber = 1;
  laser = Instantiate(laserPrefab, Vector3(transform.position.x - 5, transform.position.y - .1, transform.position.z), transform.rotation);
}