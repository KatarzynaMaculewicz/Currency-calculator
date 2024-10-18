console.log("Hello world");

let formElement = document.querySelector(".js-form");
let fromCurrency = document.querySelector(".js-fromCurrency");
let toCurrency = document.querySelector(".js-toCurrency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let resetButton = document.querySelector(".js-resetButton");

resultElement.innerText = (0.0).toFixed(2);

let GBPrate = 1;
let EURrate = 1.19;
let USDrate = 1.3;
let PLNrate = 5.13;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currency = fromCurrency.value;
  let amount = amountElement.value;
  let rate;

  switch (currency) {
    case "gbp":
      rate = GBPrate;
      break;

    case "eur":
      rate = EURrate;
      break;

    case "usd":
      rate = USDrate;
      break;

    case "pln":
      rate = PLNrate;
      break;
  }

  let finalCurrency = toCurrency.value;
  let rateTo;

  switch (finalCurrency) {
    case "gbp":
      rateTo = GBPrate;
      break;

    case "eur":
      rateTo = EURrate;
      break;

    case "usd":
      rateTo = USDrate;
      break;

    case "pln":
      rateTo = PLNrate;
      break;
  }

  let result = (amount / rate) * rateTo;
  resultElement.innerText = result.toFixed(2);
});

resetButton.addEventListener("click", (event) => {
  resultElement.innerText = (0.0).toFixed(2);
});
