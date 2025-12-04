let fromSelect = document.querySelector("#from");
let toSelect = document.querySelector("#to");
let amountInput = document.querySelector("#amount");
let resultBox = document.querySelector("#result");
let convertBtn = document.querySelector("#convertBtn");

let apiURL = "https://api.exchangerate-api.com/v4/latest/USD";

async function loadCurrencies() {
  let response = await fetch(apiURL);
  let data = await response.json();

  let currencies = Object.keys(data.rates);

  currencies.forEach(curr => {
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");

    option1.value = curr;
    option1.textContent = curr;

    option2.value = curr;
    option2.textContent = curr;

    fromSelect.appendChild(option1);
    toSelect.appendChild(option2);
  });

  fromSelect.value = "USD";
  toSelect.value = "INR";
}

async function convertCurrency() {
  let amount = amountInput.value;
  let from = fromSelect.value;
  let to = toSelect.value;

  if (amount === "" || amount <= 0) {
    resultBox.innerText = "Please enter a valid amount!";
    return;
  }

  let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
  let data = await response.json();

  let rate = data.rates[to];
  let converted = (amount * rate).toFixed(2);

  resultBox.innerText = `${amount} ${from} = ${converted} ${to}`;
}

convertBtn.addEventListener("click", convertCurrency);
loadCurrencies();
