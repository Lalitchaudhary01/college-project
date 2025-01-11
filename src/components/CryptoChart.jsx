import React, { useState, useEffect } from "react";
import axios from "axios";
import ApexCharts from "react-apexcharts";

const CryptoChart = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "line",
    },
    xaxis: {
      categories: [],
    },
  });

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30"
      )
      .then((response) => {
        const prices = response.data.prices.map((price) => price[1]);
        const dates = response.data.prices.map((price) =>
          new Date(price[0]).toLocaleDateString()
        );
        setHistoricalData(prices);
        setChartOptions({
          ...chartOptions,
          xaxis: { categories: dates },
        });
      });
  }, []);

  return (
    <div>
      <ApexCharts
        options={chartOptions}
        series={[{ name: "Price", data: historicalData }]}
        type="line"
        height={350}
      />
    </div>
  );
};

export default CryptoChart;
