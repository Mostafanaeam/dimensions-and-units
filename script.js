let curr = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function move(n) {
  slides[curr].classList.remove("active");
  curr += n;
  slides[curr].classList.add("active");
  document.getElementById("prevBtn").disabled = curr === 0;
  document.getElementById("nextBtn").disabled = curr === totalSlides - 1;
  document.getElementById("counter").innerText = `${curr + 1} / ${totalSlides}`;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight" || e.key === "ArrowUp") {
    move(1);
  }
  if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
    move(-1);
  }
});
