const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.get("/crypto/:symbol", async (req, res) => {
    try {
        const symbol = req.params.symbol.toUpperCase();
        const response = await axios.get(
            "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
            {
                params: { symbol, convert: "USD" },
                headers: { "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY },
            }
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
