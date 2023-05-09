const year = document.getElementById("year");

const date = new Date();

const tahun = date.getFullYear();

year.innerHTML = tahun;

const gulir = document.getElementById("gulir");
let skrol = window.pageYOffset;
window.addEventListener("scroll", function () {
  skrol = window.pageYOffset;
  if (skrol > 700) {
    gulir.style.display = "inline";
  } else {
    gulir.style.display = "none";
  }
});
