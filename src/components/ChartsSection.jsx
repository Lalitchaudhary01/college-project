import Chart from "react-apexcharts";

const ChartsSection = ({ chartData }) => {
  const priceOptions = {
    chart: {
      type: "area",
      height: 400,
      foreColor: "#00ffea",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    series: [
      {
        name: "Price",
        data: chartData.prices.map((p) => p[1]),
      },
    ],
    xaxis: {
      type: "datetime",
      categories: chartData.prices.map((p) => p[0]),
      labels: { style: { colors: "#00ffea" } },
    },
    yaxis: { show: false },
    grid: { borderColor: "#374151" },
    colors: ["#00ffea"],
    tooltip: {
      theme: "dark",
      x: { format: "dd MMM yyyy" },
    },
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-800/80 p-4 rounded-xl backdrop-blur-sm">
        <Chart
          options={priceOptions}
          series={priceOptions.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartsSection;
