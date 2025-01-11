import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoDetails = () => {
  const [cryptoData, setCryptoData] = useState({});

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then((response) => setCryptoData(response.data));
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold">
        {cryptoData.name} ({cryptoData.symbol?.toUpperCase()})
      </h2>
      <p className="text-xl">
        Current Price: ${cryptoData.market_data?.current_price?.usd}
      </p>
    </div>
  );
};

export default CryptoDetails;
