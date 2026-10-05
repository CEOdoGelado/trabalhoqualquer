const yes = document.getElementById("yes");
const no = document.getElementById("no");
const overlay = document.getElementById("overlay");
const close = document.getElementById("close");

let moving = false;

function moveNo() {
  if (!moving) {
    moving = true;
    no.classList.add("moving");
  }

  const padding = 12;
  const maxX = window.innerWidth - no.offsetWidth - padding;
  const maxY = window.innerHeight - no.offsetHeight - padding;

  const x = padding + Math.random() * Math.max(1, maxX - padding);
  const y = padding + Math.random() * Math.max(1, maxY - padding);

  no.style.left = `${Math.max(padding, Math.min(x, maxX))}px`;
  no.style.top = `${Math.max(padding, Math.min(y, maxY))}px`;
  no.style.transform = `rotate(${Math.random() * 14 - 7}deg)`;
}

// Computador: foge quando o mouse chega.
no.addEventListener("mouseenter", moveNo);

// Celular: foge quando a pessoa toca nele.
no.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNo();
}, { passive: false });

// Evita que o botão seja clicado por acidente.
no.addEventListener("click", (event) => {
  event.preventDefault();
  moveNo();
});

yes.addEventListener("click", () => {
  overlay.classList.add("show");
});

close.addEventListener("click", () => {
  overlay.classList.remove("show");
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.classList.remove("show");
  }
});

window.addEventListener("resize", () => {
  if (moving) moveNo();
});
