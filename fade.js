var pic = document.getElementById("pic");

document.addEventListener("mousemove", (e) => {
  if (e.x > screen.width/2) {
    pic.style.opacity = 0.2;
  } else {
    pic.style.opacity = 1;
  }
});
