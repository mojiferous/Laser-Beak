/// This script moves the character controller forward 
/// and sideways based on the arrow keys.
/// It also jumps when pressing space.
/// Make sure to attach a character controller to the same game object.
/// It is recommended that you make only one call to Move or SimpleMove per frame.    

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
}