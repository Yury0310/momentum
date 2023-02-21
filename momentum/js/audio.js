import playList from "./playList.js";

const button = document.querySelector(".play");
const prevBtn = document.querySelector(".play-prev");
const nextBtn = document.querySelector(".play-next");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const musicName = document.querySelector(".music-name");
//const musicTime = document.querySelector(".music-time");
const ul = document.querySelector(".play-list");

let isPlay = false;
let playNum = 0;

playList.forEach((el, index) => {
  const li = document.createElement("li");
  ul.append(li);
  li.classList.add("play-item");
  li.textContent = el.title;
  li.addEventListener("click", () => {
    crtTm = 0;
    isPlay = false;
    playNum = index;
    playAudio();
  });
});

const li = document.getElementsByClassName("play-item");

const audio = new Audio();

let crtTm = 0;

function playAudio() {
  musicName.textContent = playList[playNum].title;
  for (let i = 0; i < li.length; i++) {
    li[i].style.color = "white";
  }
  li[playNum].style.color = "red";
  if (!isPlay) {
    button.classList.add("pause");
    audio.src = playList[playNum].src;
    console.log(playList[playNum]);
    if (playList[playNum]) {
      audio.currentTime = crtTm;
    } else {
      audio.currentTime = 0;
    }
    audio.play();

    isPlay = true;
  } else {
    button.classList.remove("pause");
    crtTm = audio.currentTime;
    audio.pause();

    isPlay = false;
  }
}

function playNext() {
  playNum++;
  if (playNum > playList.length - 1) playNum = 0;
  isPlay = !isPlay;
  playAudio();
  audio.currentTime = 0;
}

function playPrev() {
  playNum--;
  if (playNum == -1) playNum = playList.length - 1;
  isPlay = !isPlay;
  playAudio();
  audio.currentTime = 0;
}

button.addEventListener("click", playAudio);

prevBtn.addEventListener("click", playPrev);
nextBtn.addEventListener("click", playNext);

//progress Bar

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

audio.addEventListener("timeupdate", updateProgress);

//Set progress

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
  crtTm = audio.currentTime;
}

progressContainer.addEventListener("click", setProgress);

//autoPlay

audio.addEventListener("ended", playNext);

//musicTime
// function showMusicTime() {
//   setTimeout(showMusicTime, 1000);
// }
// console.log(audio.duration);
