var enemyPrefab: Transform;
var spawnInterval: float = 5.0;
function Start () {
  
} 
var timer: float = 0.0;

function Update () {
  timer = timer + Time.deltaTime;
  print(timer);
  if (timer >= spawnInterval){
    var cube = Instantiate(enemyPrefab, Vector3 (0, 0, 0), Quaternion.identity);
    var top : float = 8.0;
    var bottom : float = -1.5;
    var spawnPoint : float = Random.Range(bottom, top);
    cube.transform.position = Vector3 (11.63709, spawnPoint, 11.56675);
    timer = 0.0;
  }
}