var container = document.querySelector(".container");
var count = 1;
function showData() {
    var i = 1;
  while (i <= 25) {
    var div = document.createElement("div");
    var p = document.createElement("p");
    p.textContent = "Masai Student " + count;
    div.append(p);
    container.append(div);
    count++
    i++;
  }
}
showData();