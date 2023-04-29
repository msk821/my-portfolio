const gallay1 = document.getElementById("gallay-1");
const gallay2 = document.getElementById("gallay-2");
const gallay3 = document.getElementById("gallay-3");
const gallay4 = document.getElementById("gallay-4");

gallay1.onclick = function () {
  const img = document.createElement("img");
  img.src = "20birth2.jpg";
  document.querySelector(".gallay-1").prepend(img);
  gallay1.style.display = "none";
};
gallay2.onclick = function () {
  const img = document.createElement("img");
  img.src = "kyouto.jpg";
  document.querySelector(".gallay-2").prepend(img);
  gallay2.style.display = "none";
};
gallay3.onclick = function () {
  const img = document.createElement("img");
  img.src = "drive.jpg";
  document.querySelector(".gallay-3").prepend(img);
  gallay3.style.display = "none";
};
gallay4.onclick = function () {
  const img = document.createElement("img");
  img.src = "ikuta.jpg";
  document.querySelector(".gallay-4").prepend(img);
  gallay4.style.display = "none";
};
