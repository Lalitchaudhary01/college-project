import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";

// Register necessary components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: true, // Enable sparkline to get historical data for charts
            },
          }
        );
        setCryptoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  if (loading) return <p>Loading...</p>;

  const chartData = {
    labels: cryptoData[0]?.sparkline_in_7d?.price.map(
      (_, index) => `Day ${index + 1}`
    ),
    datasets: cryptoData.map((crypto) => ({
      label: crypto.name,
      data: crypto.sparkline_in_7d.price,
      borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      tension: 0.3,
      fill: false,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (Last 7 Days)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USD)",
        },
        ticks: {
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white">
      <h1 className="text-3xl font-bold mb-6">Crypto Prices (Last 7 Days)</h1>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CryptoList;
