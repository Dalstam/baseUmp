let strikeZoneHit = document.getElementById("hitStrikezone");

strikeZoneHit.addEventListener("alongpath-trigger-activated", function (e) {
  let position = strikeZoneHit.getAttribute("position");
  console.log(position);
});
