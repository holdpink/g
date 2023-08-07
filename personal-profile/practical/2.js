var hide = true;
function showorhide(title) {
  var d = document.getElementById("d" + title);
  if (hide) {
    d.style.display = "block";
    hide = false;
  } else {
    d.style.display = "none";
    hide = true;
  }
}
