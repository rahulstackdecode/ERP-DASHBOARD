"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler, Legend);

export default function SalesChart() {
  const data = {
    labels: Array(20).fill("5k"), // X-axis labels
    datasets: [
      {
        label: "Sales",
        data: [
          20, 25, 40, 45, 30, 50, 60, 35, 50, 45, 60, 20, 25, 70, 55, 50, 45, 40, 50, 55,
        ], // Example data
        borderColor: "#1DA1F2",
        backgroundColor: "rgba(29,161,242,0.1)", // Shaded area
        tension: 0.4, // Smooth curve
        fill: true,
        pointBackgroundColor: "#1DA1F2",
        pointBorderColor: "#fff",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1DA1F2",
        titleColor: "#fff",
        bodyColor: "#fff",
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#999" },
      },
      y: {
        min: 20,
        max: 100,
        ticks: { stepSize: 20, callback: (val) => val + "%" },
        grid: { color: "#eee" },
      },
    },
  };

  return (
   <div
  className="p-6.5 bg-white rounded-[14px]"
  style={{ boxShadow: "6px 6px 54px 0px rgba(0, 0, 0, 0.05)" }}
>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sales Details</h2>
      <div className="h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
