// import Chart from "react-apexcharts";

// const ChartsSection = ({ chartData }) => {
//   const priceOptions = {
//     chart: {
//       type: "area",
//       height: 400,
//       foreColor: "#00ffea",
//       toolbar: { show: false },
//       zoom: { enabled: false },
//     },
//     dataLabels: { enabled: false },
//     stroke: { curve: "smooth" },
//     series: [
//       {
//         name: "Price",
//         data: chartData.prices.map((p) => p[1]),
//       },
//     ],
//     xaxis: {
//       type: "datetime",
//       categories: chartData.prices.map((p) => p[0]),
//       labels: { style: { colors: "#00ffea" } },
//     },
//     yaxis: { show: false },
//     grid: { borderColor: "#374151" },
//     colors: ["#00ffea"],
//     tooltip: {
//       theme: "dark",
//       x: { format: "dd MMM yyyy" },
//     },
//   };

//   const marketCapOptions = {
//     chart: {
//       type: "line",
//       height: 200,
//       foreColor: "#ff69f5",
//       toolbar: { show: false },
//     },
//     series: [
//       {
//         name: "Market Cap",
//         data: chartData.market_caps.map((p) => p[1]),
//       },
//     ],
//     xaxis: { type: "datetime", labels: { show: false } },
//     yaxis: { show: false },
//     stroke: { curve: "smooth" },
//     grid: { borderColor: "#374151" },
//     colors: ["#ff69f5"],
//     dataLabels: { enabled: false },
//   };

//   //   const volumeOptions = {
//   //     chart: {
//   //       type: "line",
//   //       height: 200,
//   //       foreColor: "#ffff00",
//   //       toolbar: { show: false },
//   //     },
//   //     series: [
//   //       {
//   //         name: "Volume",
//   //         data: chartData.total_volumes.map((p) => p[1]),
//   //       },
//   //     ],
//   //     xaxis: { type: "datetime", labels: { show: false } },
//   //     yaxis: { show: false },
//   //     stroke: { curve: "smooth" },
//   //     grid: { borderColor: "#374151" },
//   //     colors: ["#ffff00"],
//   //     dataLabels: { enabled: false },
//   //   };

//   return (
//     <div className="space-y-6">
//       <div className="bg-gray-800/80 p-4 rounded-xl backdrop-blur-sm">
//         <Chart
//           options={priceOptions}
//           series={priceOptions.series}
//           type="area"
//           height={350}
//         />
//       </div>

//       <div className="grid grid-cols-1 gap-6">
//         <div className="bg-gray-800/80 p-4 rounded-xl backdrop-blur-sm">
//           {/* <Chart
//             options={marketCapOptions}
//             series={marketCapOptions.series}
//             type="line"
//             height={200}
//           /> */}
//         </div>

//         <div className="bg-gray-800/80 p-4 rounded-xl backdrop-blur-sm">
//           {/* <Chart
//             options={volumeOptions}
//             series={volumeOptions.series}
//             type="line"
//             height={200}
//           /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChartsSection;
