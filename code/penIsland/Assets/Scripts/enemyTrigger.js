var animScript;
animScript = GetComponent(birdAnimation);
var animTimer: float = 0.0;


function OnTriggerEnter (other: Collider) {

 if (other.gameObject.name == 'laserPrefab(Clone)' && this.transform.position.x > -13) {
   animScript.rowNumber = 1;
   animTimer = animTimer + Time.deltaTime;
   yield WaitForSeconds(.5);
   this.transform.position.x = -14;
   animScript.rowNumber = 0;
 }

 //This doesn't work yet..
   /*if (other.name == 'Bird')  {
   var animation = other.GetComponent(birdAnimation);
   animation.rowNumber = 1;
   //other.transform.y -= 1;
 }*/
}