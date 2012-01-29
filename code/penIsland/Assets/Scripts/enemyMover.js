var speed : float = 5.0;
var isActive : boolean = false;

function Update () {
 if (isActive == true) {
   this.transform.position.x += speed * Time.deltaTime;
   if (this.transform.position.x > GameObject.Find("Global").GetComponent(global).boundLeft) {
     isActive = false;
     this.transform.position.x = GameObject.Find("Global").GetComponent(global).boundRight;
   }
 }
 if (this.transform.position.x < -1) {
   //Destroy(this.gameObject);
 }
}