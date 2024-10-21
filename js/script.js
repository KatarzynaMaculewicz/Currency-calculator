const resultElement = document.querySelector(".js-result");

const welcome = () => {
  console.log("Hello world");
};

const init = () => {
  resultElement.innerText = (0.0).toFixed(2);
  welcome();
};

const onFormSubmit = () => {
  const formElement = document.querySelector(".js-form");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    calculateResult();
  });
};

const GBPrate = 1;
const EURrate = 1.19;
const USDrate = 1.3;
const PLNrate = 5.13;

const returnRate = () => {
  const fromCurrency = document.querySelector(".js-fromCurrency");
  const currency = fromCurrency.value;

  switch (currency) {
    case "gbp":
      return GBPrate;

    case "eur":
      return EURrate;

    case "usd":
      return USDrate;

    case "pln":
      return PLNrate;
  }
};

const returnRateTo = () => {
  const toCurrency = document.querySelector(".js-toCurrency");

  const finalCurrency = toCurrency.value;

  switch (finalCurrency) {
    case "gbp":
      return GBPrate;

    case "eur":
      return EURrate;

    case "usd":
      return USDrate;

    case "pln":
      return PLNrate;
  }
};

const calculateResult = () => {
  const rate = returnRate();
  const rateTo = returnRateTo();
  const amountElement = document.querySelector(".js-amount");
  let amount = amountElement.value;

  let result = (amount / rate) * rateTo;
  resultElement.innerText = result.toFixed(2);
};

const reset = () => {
  const resetButton = document.querySelector(".js-resetButton");

  resetButton.addEventListener("click", (event) => {
    resultElement.innerText = (0.0).toFixed(2);
  });
};

init();
onFormSubmit();
reset();
