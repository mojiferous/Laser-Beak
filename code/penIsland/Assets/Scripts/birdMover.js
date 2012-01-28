
var laserPrefab: Transform; 
var speed : float = 6.0;

private var moveDirection : Vector3 = Vector3.zero;

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
    
    if(processMove) {
	    moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *= speed;
	      
	    controller.Move(moveDirection * Time.deltaTime);
    }
    if (Input.GetAxis("Fire1")) {
      var laser = Instantiate(laserPrefab, Vector3 (0.3915816, 3.344011, 10.69799), Quaternion.identity);
      laserPrefab.transform.localScale += Vector3(0.1,0,0);
    }
}