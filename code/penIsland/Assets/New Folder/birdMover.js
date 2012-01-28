/// This script moves the character controller forward 
/// and sideways based on the arrow keys.
/// It also jumps when pressing space.
/// Make sure to attach a character controller to the same game object.
/// It is recommended that you make only one call to Move or SimpleMove per frame.    

var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;
var blah: float = 1;

private var moveDirection : Vector3 = Vector3.zero;

function Update() {
    var controller : CharacterController = GetComponent(CharacterController);
    
    // We are grounded, so recalculate
    // move direction directly from axes

    moveDirection = Vector3(0, Input.GetAxis("Move"), 0);
    moveDirection = transform.TransformDirection(moveDirection);
    moveDirection *= speed;
        if (Input.GetButton ("Jump")) {
            moveDirection.y = jumpSpeed;
        }

    // Apply gravity
    moveDirection.y -= gravity * Time.deltaTime;
    
    if (this.transform.position.y >= 7.736407 && this.transform.position.y <= -1.159487){
    	moveDirection.y = 0;
    }
      // Move the controller
      controller.Move(moveDirection * Time.deltaTime);
    
}