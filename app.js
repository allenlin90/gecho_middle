const express = require('express');
const app = express();
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

app.get('/', (req, res) => {
  res.send(`server is working at ${new Date()}`);
});

app.get('/gecko/coins', async (req, res) => {
  // let data = await CoinGeckoClient.coins.all();
  let data = await CoinGeckoClient.coins.markets();
  console.log(data);
  res.json(data);
});

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`server starts on port ${PORT}`);
});
