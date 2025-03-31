<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter</title>
</head>
<body>
    <h1>Currency Converter</h1>
    <label for="amount">Amount:</label>
    <input type="number" id="amount" placeholder="Enter amount">
    <label for="fromCurrency">From Currency:</label>
    <select id="fromCurrency">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="INR">INR</option>
    </select>
    <label for="toCurrency">To Currency:</label>
    <select id="toCurrency">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="INR">INR</option>
    </select>
    <button onclick="convertCurrency()">Convert</button>
    <h2 id="result">Converted Amount: </h2>

    <script>
        async function convertCurrency() {
            const amount = document.getElementById("amount").value;
            const fromCurrency = document.getElementById("fromCurrency").value;
            const toCurrency = document.getElementById("toCurrency").value;

            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
            const data = await response.json();
            const rate = data.rates[toCurrency];

            const convertedAmount = amount * rate;
            document.getElementById("result").textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
        }
    </script>
</body>
</html>
