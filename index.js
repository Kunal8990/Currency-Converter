function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    const exchangeRate = getExchangeRate(fromCurrency, toCurrency);
  
    const convertedAmount = amount * exchangeRate;
  
    document.getElementById('result').innerText = `Result: ${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  }
  function getExchangeRate(fromCurrency, toCurrency) {
    const exchangeRates = {
      USD: {
        EUR: 0.85,
        GBP: 0.74,
        INR: 73.50, // Sample exchange rate, replace with the actual rate
      },
      EUR: {
        USD: 1.18,
        GBP: 0.87,
        INR: 88.95, // Sample exchange rate, replace with the actual rate
      },
      GBP: {
        USD: 1.35,
        EUR: 1.15,
        INR: 101.25, // Sample exchange rate, replace with the actual rate
      },
      INR: {
        USD: 0.014, // Sample exchange rate, replace with the actual rate
        EUR: 0.011, // Sample exchange rate, replace with the actual rate
        GBP: 0.0099, // Sample exchange rate, replace with the actual rate
      },
    };
  
    return exchangeRates[fromCurrency][toCurrency];
  }
  
  