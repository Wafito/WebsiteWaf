const yes1 = document.getElementById("yes1");
const yes2 = document.getElementById("yes2");
const no = document.getElementById("no");

yes1.addEventListener("click", () => {
  window.location.href = "result.html?answer=yes1";
});

yes2.addEventListener("click", () => {
  window.location.href = "result.html?answer=yes2";
});

// Funktion zum zufälligen Bewegen des Buttons
function moveButton() {
  const btnWidth = no.offsetWidth - 100;
  const btnHeight = no.offsetHeight - 100;

  const x = Math.random() * (window.innerWidth - btnWidth - 700);
  const y = Math.random() * (window.innerHeight - btnHeight - 700);

  no.style.position = "absolute";
  no.style.left = `${x}px`;
  no.style.top = `${y}px`;
}

// Desktop: Maus über Button
no.addEventListener("mouseover", moveButton);

// Touchgeräte: Button bewegt sich, wenn man ihn berührt
no.addEventListener("touchstart", (e) => {
  e.preventDefault(); // verhindert, dass man den Button kurz „antippen“ kann
  moveButton();
});