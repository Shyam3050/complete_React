import "./ChartBar.css";
function ChartBar(props) {
  let barFillHeight = "0%";
  if (props.amount > 0) {
    barFillHeight = Math.trunc((props.amount / props.totalValue) * 100) + "%";
  }
  console.log(barFillHeight);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.title}</div>
    </div>
  );
}

export default ChartBar;
