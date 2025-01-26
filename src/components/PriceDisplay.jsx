const PriceDisplay = ({ data }) => (
  <div className="my-8 text-center">
    <div className="text-gray-400 text-lg font-nhg mb-2">Current Price</div>
    <div className="text-cyan-400 font-nhg text-6xl font-bold">
      ${data.market_data.current_price.usd.toLocaleString()}
    </div>
  </div>
);

export default PriceDisplay;
