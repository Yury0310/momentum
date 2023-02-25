const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

const result = document.querySelector("#result");

btn.addEventListener("click", () => {
  if (input.value === "") return;
  liElement(input.value);
  input.value = "";
});

input.addEventListener("keydown", todo);

function todo(e) {
  if (e.keyCode === 13) {
    if (input.value === "") return;
    liElement(input.value);
    input.value = "";
  }
}

function liElement(value) {
  console.log(value);
  const li = document.createElement("li");
  result.appendChild(li);
  li.className = "li";
  li.textContent = value;

  const li1 = document.getElementsByClassName("li");
  const btn = document.createElement("button");

  li.appendChild(btn);
  btn.className = "btn1";
  btn.textContent = "Del";

  li.addEventListener("click", () => {
    li.classList.toggle("li-active");
  });

  btn.addEventListener("click", () => {
    result.removeChild(li);
  });
  btn2.addEventListener("click", () => {
    for (let i = 0; i < li1.length; i++) {
      result.removeChild(li);
    }
  });
}
