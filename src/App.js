import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import DashboardStats from "./components/DashboardStats";
import PriceDisplay from "./components/PriceDisplay";
import ChartsSection from "./components/ChartsSection";
import SidebarMetrics from "./components/SidebarMetrics";

const App = () => {
  const [coinId, setCoinId] = useState("bitcoin");
  const [coinData, setCoinData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dataRes, chartRes] = await Promise.all([
          axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`),
          axios.get(
            `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30`
          ),
        ]);

        setCoinData(dataRes.data);
        setChartData(chartRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [coinId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-fixed"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/2095724.png')",
      }}
    >
      <Navbar coinId={coinId} setCoinId={setCoinId} />

      <main className="container mx-auto px-4 py-6">
        <DashboardStats data={coinData} />
        <PriceDisplay data={coinData} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <ChartsSection chartData={chartData} />
          </div>
          <div className="lg:col-span-1">
            <SidebarMetrics data={coinData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
