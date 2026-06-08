// ===== MATRIX =====
const c = document.getElementById("matrix");
const ctx = c.getContext("2d");
c.width = innerWidth;
c.height = innerHeight;

const letters = "01ABCDEF";
const fontSize = 14;
const cols = c.width / fontSize;
const drops = Array(Math.floor(cols)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle="#0F0";
  ctx.font=fontSize+"px monospace";

  drops.forEach((y,i)=>{
    const text = letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text,i*fontSize,y*fontSize);
    if(y*fontSize>c.height && Math.random()>0.975) drops[i]=0;
    drops[i]++;
  });
}
setInterval(draw,33);

// ===== ELEMENTS =====
const loading = document.getElementById("loading");
const login = document.getElementById("login");
const stage2 = document.getElementById("stage2");
const main = document.getElementById("main");

const pass = document.getElementById("pass");
const code = document.getElementById("code");

const terminal = document.getElementById("terminal");
const cmd = document.getElementById("cmd");

const sound = document.getElementById("typeSound");

// ===== INIT =====
setTimeout(()=>{
  loading.style.display="none";

  if(localStorage.getItem("auth") === "true"){
    main.classList.remove("hidden");
    boot();
  } else {
    login.classList.remove("hidden");
  }

},1500);

// ===== LOGIN =====
const PASSWORD = "1337";
const CODE = "root";

pass.addEventListener("keydown", e=>{
  if(e.key==="Enter"){
    if(pass.value===PASSWORD){
      login.style.display="none";
      stage2.classList.remove("hidden");
    } else {
      pass.value="";
      alert("ACCESS DENIED 💀");
    }
  }
});

code.addEventListener("keydown", e=>{
  if(e.key==="Enter"){
    if(code.value.toLowerCase()===CODE){
      stage2.style.display="none";
      main.classList.remove("hidden");
      localStorage.setItem("auth","true");
      boot();
    } else {
      code.value="";
      alert("WRONG CODE");
    }
  }
});

// ===== BOOT =====
function boot(){
  const lines=[
    "Booting...",
    "Loading modules...",
    "Access granted ✔",
    "Welcome Mahan 💀",
    "Type 'help'"
  ];

  let i=0;
  function next(){
    if(i<lines.length){
      terminal.innerHTML+=lines[i]+"\n";
      i++;
      setTimeout(next,400);
    }
  }
  next();
}

// ===== TERMINAL =====
cmd.addEventListener("keydown", e=>{
  if(e.key==="Enter"){
    let c = cmd.value.trim().toLowerCase();

    terminal.innerHTML+="\n> "+c;
    playSound();

    switch(c){
      case "help":
        terminal.innerHTML+="\nhelp about hack clear glitch scan exit";
        break;

      case "about":
        terminal.innerHTML+="\nMahan | Cyber Elite 💀";
        break;

      case "hack":
        sequence(["Injecting...","Bypassing...","DONE 💀"]);
        break;

      case "scan":
        sequence(["Scanning ports...","Open: 22,80,443","Done"]);
        break;

      case "glitch":
        document.body.classList.add("glitch");
        setTimeout(()=>document.body.classList.remove("glitch"),800);
        break;

      case "clear":
        terminal.innerHTML="";
        break;

      case "exit":
        localStorage.removeItem("auth");
        location.reload();
        break;

      default:
        terminal.innerHTML+="\nUnknown command...";
    }

    cmd.value="";
  }
});

function sequence(arr){
  let i=0;
  function next(){
    if(i<arr.length){
      terminal.innerHTML+="\n"+arr[i];
      i++;
      setTimeout(next,400);
    }
  }
  next();
}

function playSound(){
  if(sound){
    sound.currentTime=0;
    sound.play();
  }
  }
