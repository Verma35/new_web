
var sIndex = 0;
showSlides();

function showSlides() {
  var i;
  var s = document.getElementsByClassName("mySlides");
  var d = document.getElementsByClassName("dot");
  for (i = 0; i < s.length; i++) {
    s[i].style.display = "none";
  }
  sIndex++;
  if (sIndex > s.length) {sIndex = 1}
  for (i = 0; i < d.length; i++) {
    d[i].className = d[i].className.replace(" active", "");
  }
  s[sIndex-1].style.display = "block";
  d[sIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}

