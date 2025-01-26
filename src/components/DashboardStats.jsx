const DashboardStats = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {/* Market Cap 24Hrs */}
      <div className="bg-gray-800/80 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm text-gray-400 font-nhg">Market Cap 24Hrs</h3>
        <p className="text-cyan-400 font-bold text-lg">
          {data.market_data.market_cap_change_percentage_24h?.toFixed(2)}%
        </p>
      </div>

      {/* All Time High */}
      <div className="bg-gray-800/80 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm text-gray-400 font-nhg">All Time High</h3>
        <p className="text-cyan-400 font-bold text-lg">
          ${data.market_data.ath.usd.toLocaleString()}
        </p>
      </div>

      {/* All Time Low */}
      <div className="bg-gray-800/80 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm text-gray-400 font-nhg">All Time Low</h3>
        <p className="text-cyan-400 font-bold text-lg">
          ${data.market_data.atl.usd.toLocaleString()}
        </p>
      </div>

      {/* Positive Sentiments */}
      <div className="bg-gray-800/80 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm text-gray-400 font-nhg">Positive Sentiments</h3>
        <p className="text-cyan-400 font-bold text-lg">
          {data.sentiment_votes_up_percentage?.toFixed(1)}%
        </p>
      </div>

      <div className="bg-gray-800/80 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm text-gray-400 font-nhg">High 24Hrs</h3>
        <p className="text-green-400 font-bold text-lg">
          ${data.market_data.high_24h.usd.toLocaleString()}
        </p>
      </div>

      {/* Low 24h */}
      <div className="bg-gray-800/80 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm text-gray-400 font-nhg">Low 24Hrs</h3>
        <p className="text-red-400 font-bold text-lg">
          ${data.market_data.low_24h.usd.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default DashboardStats;
