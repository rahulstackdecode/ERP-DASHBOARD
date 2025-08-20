"use client";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const filterOptions = ["Last week", "Last month", "Last 4 months", "Last year"];

export default function ProjectsChart() {
  const [filter, setFilter] = useState("Last 4 months");

  const data = {
    labels: ["August", "September", "October", "November"],
    datasets: [
      { label: "UI/UX", data: [4, 3, 1, 4], backgroundColor: "#3B82F6" },
      { label: "Web Developer", data: [1, 1, 2, 1], backgroundColor: "#FACC15" },
      { label: "Web Designer", data: [1, 1, 1, 1], backgroundColor: "#F87171" },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
      legend: { position: "bottom" as const },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">NO. OF NEW PROJECTS</h2>
        <select
          className="border rounded-md px-2 py-1 text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {filterOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
