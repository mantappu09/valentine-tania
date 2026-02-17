const q = [
  "Aku mungkin belum seperti cowok lain atau memenuhi semua permintaan kamu…",
  "Tapi perasaanku ke kamu selalu serius dan perlahan aku ubah yang tidak kamu suka agar lebih sesuai dengan keinginan kamu baby.",
  "Aku ingin jalan sejauh mungkin sama kamu"
];

let i = 0;

const musicGame = document.getElementById("musicGame");
const musicLetter = document.getElementById("musicLetter");

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const final = document.getElementById("final");
const letter = document.getElementById("letter");
const videoBox = document.getElementById("videoBox");
const question = document.getElementById("question");
const noBtn = document.getElementById("noBtn");

function startGame(){
  musicGame.play();
  start.style.display = "none";
  quiz.style.display = "block";
  question.innerText = q[i];
}

function nextQ(){
  i++;
  if(i < q.length){
    question.innerText = q[i];
  }else{
    quiz.style.display = "none";
    final.style.display = "block";
    noBtn.style.display = "block";
    noBtn.onmouseover = moveNo;
  }
}

function moveNo(){
  noBtn.style.left = Math.random() * (innerWidth - 100) + "px";
  noBtn.style.top = Math.random() * (innerHeight - 50) + "px";
}

function showLetter(){
  final.style.display = "none";
  noBtn.style.display = "none";
  letter.style.display = "block";
  musicGame.pause();
  musicLetter.play();
  confetti();
}

function showVideo(){
  letter.style.display = "none";
  videoBox.style.display = "flex";
  romanticFireworks();
}

function romanticHearts(){
  const interval = setInterval(()=>{
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random()*2 + 5) + "s";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),7000);
  },400);

  // berhenti setelah 6 detik
  setTimeout(()=>clearInterval(interval),6000);
}

function showLetter(){
  final.style.display = "none";
  noBtn.style.display = "none";
  letter.style.display = "block";
  musicGame.pause();
  musicLetter.play();
  romanticHearts();
}


function romanticFireworks(){
  setInterval(()=>{
    let f = document.createElement("div");
    f.className = "firework";
    f.style.left = Math.random() * 100 + "vw";
    f.style.top = Math.random() * 60 + "vh";
    f.style.background = `hsl(${Math.random()*20+330},100%,70%)`;
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),2500);
  },500);
}

const video = document.getElementById("loveVideo");
video.addEventListener("loadedmetadata", () => {
  if(video.videoHeight > video.videoWidth){
    video.style.maxWidth = "300px";
  }
});
