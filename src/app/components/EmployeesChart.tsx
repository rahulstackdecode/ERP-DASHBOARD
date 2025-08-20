"use client";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function EmployeesChart() {
    const data = {
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

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "bottom" as const },
        },
    };

    return (
        <div className="p-4 bg-white rounded-2xl shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]">
            <div className="flex justify-center items-center mb-6">
                <h2 className="font-semibold text-center">TOTAL EMPLOYEES</h2>
            </div>
            <Doughnut data={data} options={options} />
        </div>
    );
}
