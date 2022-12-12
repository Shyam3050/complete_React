import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const item of props.expenses) {
    const month = item.date.getMonth();
    chartDataPoints[month].value += item.amount;
  }
  const totalValue = chartDataPoints.reduce(
    (total, val) => (total += val.value),
    0
  );

  return (
    <div className="chart">
      {chartDataPoints.map((item) => (
        <ChartBar
          key={item.label}
          totalValue={totalValue}
          title={item.label}
          amount={item.value}
        />
      ))}
    </div>
  );
}

export default Chart;
