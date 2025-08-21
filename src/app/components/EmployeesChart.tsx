"use client";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function EmployeesChart() {
  // ✅ Define types explicitly
  const data: ChartData<"doughnut"> = {
    labels: ["Business", "Design", "Development", "Testing"],
    datasets: [
      {
        label: "Employees",
        data: [30, 40, 25, 20],
        backgroundColor: ["#F87171", "#FACC15", "#3B82F6", "#22C55E"],
        borderWidth: 2,
      },
    ],
  };

 const options: ChartOptions<"doughnut"> = {
  responsive: true,
  cutout: "75%", // inner circle size (higher = thinner ring)
  radius: "80%", // overall circle size (smaller = smaller circle)
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};


  return (
    <div className="p-4 min-h-[454.2px] flex items-center flex-col justify-center bg-white rounded-2xl border border-[#ECECEC]">
      <div className="flex justify-center items-center mt-3 -mb-2">
        <h2 className="font-semibold text-center">TOTAL EMPLOYEES</h2>
      </div>
      {/* ✅ Works with typed data & options */}
      <Doughnut data={data} options={options} />
    </div>
  );
}
