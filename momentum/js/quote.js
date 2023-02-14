const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");

async function getQuotes() {
  const quotes = "data.json";
  const res = await fetch(quotes);
  const data = await res.json();
  const randomQuoteNum = getRandomIntInclusive(0, data.length - 1);
  console.log(randomQuoteNum);
  quote.textContent = data[randomQuoteNum].text;
  author.textContent = data[randomQuoteNum].author;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

changeQuote.addEventListener("click", () => {
  changeQuote.style.transform =
    changeQuote.style.transform == "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
  getQuotes();
});

getQuotes();
