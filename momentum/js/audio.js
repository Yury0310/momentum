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

playList.forEach((el) => {
  const li = document.createElement("li");
  ul.append(li);
  li.classList.add("play-item");
  li.textContent = el.title;
});

const li = document.getElementsByClassName("play-item");

const audio = new Audio();

function playAudio() {
  musicName.textContent = playList[playNum].title;
  li[playNum].style.color = "red";
  if (!isPlay) {
    button.classList.add("pause");
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
  } else {
    button.classList.remove("pause");
    audio.pause();
    isPlay = false;
  }
}

function playNext() {
  li[playNum].style.color = "white";
  playNum++;
  if (playNum > playList.length - 1) playNum = 0;
  isPlay = !isPlay;
  playAudio();
}

function playPrev() {
  li[playNum].style.color = "white";

  playNum--;
  if (playNum == -1) playNum = playList.length - 1;
  isPlay = !isPlay;
  playAudio();
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
}

progressContainer.addEventListener("click", setProgress);

//autoPlay

audio.addEventListener("ended", playNext);

//musicTime
