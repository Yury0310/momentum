const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const result = document.querySelector("#result");

let values = JSON.parse(localStorage.getItem("values")) || [];

if (values.length !== 0) {
  for (let i = 0; i < values.length; i++) {
    liElement(values[i]);
  }
}

function addingToStorage() {
  let valueObj = {
    id: values.length ? values.length : 0,
    value: input.value,
  };
  values.push(valueObj);
  localStorage.setItem("values", JSON.stringify(values));
  liElement(valueObj);
}

btn.addEventListener("click", () => {
  if (input.value === "") return;
  addingToStorage();
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    if (input.value === "") return;
    addingToStorage();
    input.value = "";
  }
});

btn2.addEventListener("click", () => {
  result.innerHTML = "";
  localStorage.setItem("values", JSON.stringify([]));
});

function liElement(valueObj) {
  const { id, value } = valueObj;

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
    values = values.filter((item) => item.id !== id);
    localStorage.setItem("values", JSON.stringify(values));

    result.removeChild(li);
  });
}
