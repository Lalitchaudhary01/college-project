const SidebarMetrics = ({ data }) => (
  <div className="bg-gray-800/80 p-6 rounded-xl backdrop-blur-sm space-y-6">
    <div className="space-y-2">
      <h3 className="text-gray-400 font-nhg">Market Cap</h3>
      <p className="text-white font-bold text-lg">
        ${data.market_data.market_cap.usd.toLocaleString()}
      </p>
    </div>

    <div className="space-y-2">
      <h3 className="text-gray-400 font-nhg">Price Change 24hrs</h3>
      <p className="text-white font-bold text-lg">
        ${data.market_data.price_change_24h_in_currency.usd.toLocaleString()}
      </p>
    </div>

    <div className="space-y-2">
      <h3 className="text-gray-400 font-nhg">Total Volume</h3>
      <p className="text-white font-bold text-lg">
        ${data.market_data.total_volume.usd.toLocaleString()}
      </p>
    </div>

    <div className="space-y-2">
      <h3 className="text-gray-400 font-nhg">Circulating Supply</h3>
      <p className="text-white font-bold text-lg">
        {data.market_data.circulating_supply.toLocaleString()}
      </p>
    </div>

    <div className="space-y-2">
      <h3 className="text-gray-400 font-nhg">Twitter Followers</h3>
      <p className="text-white font-bold text-lg">
        {data.community_data.twitter_followers.toLocaleString()}
      </p>
    </div>
  </div>
);

export default SidebarMetrics;
