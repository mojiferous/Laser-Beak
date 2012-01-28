var enemyPrefab: Transform;
var spawnInterval: float = 5.0;
function Start () {
    for(i = 0; i < 25; i++){
      var cube = Instantiate(enemyPrefab, Vector3 (0, 0, 0), Quaternion.identity);
      var enemyArray = new Array();
      enemyArray.push(cube);
      /*var top : float = 8.0;
      var bottom : float = -1.5;
      var spawnPoint : float = Random.Range(bottom, top);
      cube.transform.position = Vector3 (12.43211, spawnPoint, 11.56675);*/
    }
} 
var timer: float = 0.0;

function Update () {
  timer = timer + Time.deltaTime;
}