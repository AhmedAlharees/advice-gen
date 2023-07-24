const btn = document.querySelector("button");
const idContainer = document.querySelector('.advice-id');
const adviceContainer = document.querySelector('.advice');

function randNumber() {
  return Math.floor(Math.random() * 224);
}

function fetchAdvice() {
  fetch(`https://api.adviceslip.com/advice/${randNumber()}`)
    .then((promise) => promise.json())
    .then((data) => {
      const {id, advice} = data.slip;
      console.log(advice);
      idContainer.textContent = `ADVICE #${id}`;
      adviceContainer.textContent = `"${advice}"`
    })
    .catch(error => console.log(error));
}

btn.addEventListener('pointerdown', fetchAdvice)
