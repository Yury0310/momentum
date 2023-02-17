import playList from "./playList.js";

const button = document.querySelector(".play");
const prevBtn = document.querySelector(".play-prev");
const nextBtn = document.querySelector(".play-next");
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
console.log(li[2]);
console.log(playList);
const audio = new Audio();
function playAudio() {
  if (!isPlay) {
    button.classList.add("pause");
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    li[playNum].style.color = "red";

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
