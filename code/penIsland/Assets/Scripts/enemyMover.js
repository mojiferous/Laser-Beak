var speed : float = 5.0;

function Update () {

 this.transform.position.x -= speed * Time.deltaTime;
 if (this.transform.position.x < -1){
   //Destroy(GameObject.Find ("Cube(Clone)"));
 }
}