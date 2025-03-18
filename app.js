// Dummy crypto data
const cryptoData = {
    BTC: {
        name: "Bitcoin",
        price: "$43,000",
        marketCap: "$850B",
        change24h: "+2.5%",
        volume24h: "$30B",
        supplyCirculating: "19.3M BTC",
        supplyTotal: "21M BTC",
        ATH: "$69,000",
        ATL: "$67",
        change1h: "+0.5%",
        change7d: "+5.2%",
        change30d: "-3.1%",
        change1y: "+120%",
        activeWallets: "900K",
        transactionsPerDay: "350K",
        gasFees: "$3.50",
        fearGreedIndex: "72 (Greedy)",
        socialMentions: "12K"
    },
    ETH: {
        name: "Ethereum",
        price: "$3,100",
        marketCap: "$370B",
        change24h: "-1.2%",
        volume24h: "$15B",
        supplyCirculating: "120M ETH",
        supplyTotal: "No max supply",
        ATH: "$4,878",
        ATL: "$0.42",
        change1h: "+0.3%",
        change7d: "+2.8%",
        change30d: "-4.5%",
        change1y: "+98%",
        activeWallets: "1.2M",
        transactionsPerDay: "1.1M",
        gasFees: "$5.75",
        fearGreedIndex: "68 (Greedy)",
        socialMentions: "9.5K"
    },
    SOL: {
        name: "Solana",
        price: "$145",
        marketCap: "$64B",
        change24h: "+3.1%",
        volume24h: "$5.2B",
        supplyCirculating: "420M SOL",
        supplyTotal: "508M SOL",
        ATH: "$260",
        ATL: "$0.50",
        change1h: "+0.8%",
        change7d: "+12.4%",
        change30d: "+18.6%",
        change1y: "+275%",
        activeWallets: "780K",
        transactionsPerDay: "60M",
        gasFees: "$0.00025",
        fearGreedIndex: "74 (Greedy)",
        socialMentions: "7.2K"
    }
};

// Function to add a crypto column
function addCryptoColumn() {
    const symbol = document.getElementById("cryptoInput").value.toUpperCase().trim();
    const data = cryptoData[symbol];

    if (!symbol) {
        alert("Please enter a crypto symbol.");
        return;
    }

    if (!data) {
        alert("Crypto not found.");
        return;
    }

    const container = document.getElementById("crypto-container");

    // Check if the crypto is already displayed
    if (document.getElementById(`crypto-${symbol}`)) {
        alert(`${symbol} is already displayed.`);
        return;
    }

    // Create a new div for the crypto
    const div = document.createElement("div");
    div.className = "crypto-column";
    div.id = `crypto-${symbol}`;
    div.innerHTML = `
        <h3>${data.name} (${symbol})</h3>
        <p><strong>Price:</strong> ${data.price}</p>
        <p><strong>Market Cap:</strong> ${data.marketCap}</p>
        <p><strong>24h Change:</strong> ${data.change24h}</p>
        <p><strong>Trading Volume (24h):</strong> ${data.volume24h}</p>
        <p><strong>Circulating Supply:</strong> ${data.supplyCirculating}</p>
        <p><strong>Total Supply:</strong> ${data.supplyTotal}</p>
        <p><strong>ATH:</strong> ${data.ATH}</p>
        <p><strong>ATL:</strong> ${data.ATL}</p>
        <p><strong>1h Change:</strong> ${data.change1h}</p>
        <p><strong>7d Change:</strong> ${data.change7d}</p>
        <p><strong>30d Change:</strong> ${data.change30d}</p>
        <p><strong>1y Change:</strong> ${data.change1y}</p>
        <p><strong>Active Wallets:</strong> ${data.activeWallets}</p>
        <p><strong>Transactions per Day:</strong> ${data.transactionsPerDay}</p>
        <p><strong>Gas Fees:</strong> ${data.gasFees}</p>
        <p><strong>Fear & Greed Index:</strong> ${data.fearGreedIndex}</p>
        <p><strong>Social Mentions (24h):</strong> ${data.socialMentions}</p>
        <hr>
    `;

    container.appendChild(div);
    document.getElementById("cryptoInput").value = ""; // Clear input after adding
}
