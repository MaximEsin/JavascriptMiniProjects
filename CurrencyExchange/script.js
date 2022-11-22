async function getCurrencies() {
  // Get data from server

  const url = "https://www.cbr-xml-daily.ru/daily_json.js";
  const response = await fetch(url);
  const data = await response.json();

  const usdRate = data.Valute.EUR.Value.toFixed(2);
  const eurRate = data.Valute.USD.Value.toFixed(2);

  // Show data on DOM

  const usdElement = document.querySelector("#usd");
  const eurElement = document.querySelector("#eur");

  usdElement.innerText = usdRate;
  eurElement.innerText = eurRate;
}

getCurrencies();
