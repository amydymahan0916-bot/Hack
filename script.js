// ===== MATRIX BACKGROUND =====
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01ABCDEF";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

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

// ===== LOGIN SYSTEM =====
const passwordInput = document.getElementById("passwordInput");
const lockScreen = document.getElementById("lockScreen");
const mainUI = document.getElementById("mainUI");

const PASSWORD = "1337"; // ← اینو عوض کن 😏

passwordInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    if (passwordInput.value === PASSWORD) {
      lockScreen.style.display = "none";
      mainUI.classList.remove("hidden");
      boot();
    } else {
      passwordInput.value = "";
      alert("ACCESS DENIED 💀");
    }
  }
});

// ===== TERMINAL =====
const terminal = document.getElementById("terminal");
const input = document.getElementById("commandInput");

function boot() {
  const lines = [
    "Booting system...",
    "Decrypting modules...",
    "Access granted ✔",
    "Welcome, Mahan 💀",
    "Type 'help'"
  ];

  let i = 0;

  function next() {
    if (i < lines.length) {
      terminal.innerHTML += lines[i] + "\n";
      i++;
      setTimeout(next, 500);
    }
  }

  next();
}

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    let cmd = input.value.trim().toLowerCase();

    terminal.innerHTML += "\n> " + cmd;

    switch(cmd) {
      case "help":
        terminal.innerHTML += "\nhelp, about, hack, glitch, secret";
        break;

      case "about":
        terminal.innerHTML += "\nMahan | Elite Mode 💀";
        break;

      case "hack":
        hackEffect();
        break;

      case "glitch":
        document.body.classList.add("glitch");
        setTimeout(() => {
          document.body.classList.remove("glitch");
        }, 800);
        break;

      case "secret":
        terminal.innerHTML += "\nHidden message unlocked 🔓";
        break;

      default:
        terminal.innerHTML += "\nUnknown command...";
    }

    input.value = "";
  }
});

function hackEffect() {
  const lines = [
    "Connecting...",
    "Injecting...",
    "Breaching system...",
    "DONE 💀"
  ];

  let i = 0;

  function next() {
    if (i < lines.length) {
      terminal.innerHTML += "\n" + lines[i];
      i++;
      setTimeout(next, 400);
    }
  }

  next();
    }
