import React from "react";
const Navbar = ({ coinId, setCoinId }) => {
  const coins = [
    { id: "avalanche-2", name: "Avalanche (AVAX)" },
    { id: "binancecoin", name: "Binance (BNB)" },
    { id: "bitcoin", name: "Bitcoin (BTC)" },
    { id: "cardano", name: "Cardano (ADA)" },
    { id: "decentraland", name: "Decentraland (MANA)" },
    { id: "dogecoin", name: "Dogecoin (DOGE)" },
    { id: "ethereum", name: "Ethereum (ETH)" },
    { id: "ripple", name: "Ripple (XRP)" },
    { id: "solana", name: "Solana (SOL)" },
    { id: "tether", name: "Tether (USDT)" },
  ];

  return (
    <nav className="bg-gray-800/90 backdrop-blur-sm p-4 shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        <select
          value={coinId}
          onChange={(e) => setCoinId(e.target.value)}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {coins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>

        <h1 className="text-2xl font-bold text-cyan-400 font-nhg tracking-wide">
          CRYPTO DASHBOARD
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
