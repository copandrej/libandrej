window.addEventListener("scroll", test);
var paralex1 = document.getElementById("paralex1");
var paralex3 = document.getElementById("paralex3");
var h1 = document.getElementById("h1");

function test() {
  var x = document.documentElement.scrollTop;
  paralex1.style.backgroundPositionY = -x / 3 + "px";
  paralex3.style.backgroundPositionY = -x / 3 + 300 + "px";
  h1.style.boxShadow = "5px " + (10 - x / 40) + "px  4px 0px";
  console.log("5px " + (10 - x / 9) + "px");
}