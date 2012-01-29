var rotationAmount: float  = 5.0;
function Update () {
  transform.Rotate (0,-rotationAmount * Time.deltaTime,0);
}