const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for (let x = 0; x < columns; x++)
  drops[x] = 1;

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
      drops[i] = 0;

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

// ================= TERMINAL =================

const terminal = document.getElementById("terminal");
const input = document.getElementById("commandInput");

const boot = [
  "Booting system...",
  "Injecting protocols...",
  "Bypassing security...",
  "Access granted ✔",
  "Welcome, Mahan 💀"
];

let i = 0;

function bootSequence() {
  if (i < boot.length) {
    terminal.innerHTML += boot[i] + "\n";
    i++;
    setTimeout(bootSequence, 600);
  }
}

bootSequence();

// commands
input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    let cmd = input.value.trim().toLowerCase();

    terminal.innerHTML += "\n> " + cmd;

    switch(cmd) {
      case "help":
        terminal.innerHTML += "\nhelp, about, hack, glitch, clear";
        break;

      case "about":
        terminal.innerHTML += "\nMahan | Cyber Security Mode 💀";
        break;

      case "hack":
        fakeHack();
        break;

      case "glitch":
        document.body.classList.add("glitch");
        setTimeout(() => {
          document.body.classList.remove("glitch");
        }, 1000);
        break;

      case "clear":
        terminal.innerHTML = "";
        break;

      default:
        terminal.innerHTML += "\nUnknown command...";
    }

    input.value = "";
  }
});

function fakeHack() {
  const lines = [
    "Accessing root...",
    "Decrypting...",
    "Uploading virus...",
    "System breached 💀"
  ];

  let x = 0;

  function next() {
    if (x < lines.length) {
      terminal.innerHTML += "\n" + lines[x];
      x++;
      setTimeout(next, 500);
    }
  }

  next();
}