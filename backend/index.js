const express = require("express");
const app = express();
const port = 5001;
const Moralis = require("moralis").default;
const cors = require("cors");

require("dotenv").config({ path: ".env" });

app.use(cors());
app.use(express.json());

const address = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

app.get("/getethprice", async (req, res) => {
  try {
    const response = await Moralis.EvmApi.token.getTokenPrice({
      address,
      chain: '0x1',
    });
console.log(response)
    return res.status(200).json(response);
  } catch (e) {
    console.log(`Somthing went wrong ${e}`);
    return res.status(400).json();
  }
});

app.get("/address", async (req, res) => {
  try {
    const { address } = req.query;
    const chain = "0x1"; // Ethereum Mainnet

    if (!address) {
      return res.status(400).json({ error: "Address parameter is required" });
    }

    const response = await Moralis.EvmApi.transaction.getWalletTransactions({
      address,
      chain,
    });

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching wallet transactions:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


Moralis.start({
  apiKey: MORALIS_API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});