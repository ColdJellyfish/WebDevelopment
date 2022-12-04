var header = document.getElementById("myTopnav");
var link = header.getElementsByTagName("a")
for (var i = 0; i < btns.length; i++) {
link[i].addEventListener("click", function() {
var current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace(" active", "");
this.className += " active";
});
}