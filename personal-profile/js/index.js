var hide = true;
function showorhide(title) {
  var h = document.getElementById("showorhide-" + title);
  if (hide) {
    h.style.display = "block";
    hide = false;
  } else {
    h.style.display = "none";
    hide = true;
  }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // 每2秒切换一张图片
}

function showskill(id) {
  let skills = document.getElementsByClassName("information-skill");
  for (i = 0; i < skills.length; i++) {
    skills[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
