"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardStats from "./components/DashboardStats";
import { Plus } from "lucide-react";
import SalesChart from "./components/SalesChart"
import ProjectsChart from "./components/ProjectsChart";
import EmployeesChart from "./components/EmployeesChart";
import Image from "next/image";
export default function HomePage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="wrapper flex">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />

      {/* Main Content */}
      <div
        className="flex-1 transition-all duration-300"
        style={{ marginLeft: isOpen ? "256px" : "56px" }}
      >
        <Topbar toggleSidebar={() => setIsOpen(!isOpen)} />

        <main className="py-7 px-8.5 bg-white min-h-screen">
          <h2 className="mb-5.5 font-medium text-[32px] text-[color:var(--heading-color)]" >Admin Dashboard</h2>

          {/* Welcome Card */}
          <div className="flex items-center justify-between bg-white rounded-sm  p-5 shadow-[0px_0px_1px_1px_rgba(198,198,198)]">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              {/* Profile Image */}
              <Image
                src="/images/user-img.png"
                alt="User Img"
                width={56}
                height={56}
                className="rounded-full"
              />
              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Welcome Back, Admirra John
                </h3>
                <p className="text-base font-light text-gray-600">
                  You have{" "}
                  <span className="text-[color:var(--primary-color)] underline cursor-pointer">
                    21
                  </span>{" "}
                  Pending Approvals
                </p>
              </div>
            </div>

            {/* Right Section (Button) */}
            <button className="flex items-center gap-2 px-4 py-2 text-[15px] cursor-pointer font-medium text-white bg-[var(--primary-color)] rounded-sm transition hover:bg-[var(--btn-hover-bg)]">
              <Plus size={16} />
              Add Project
            </button>
          </div>

          {/****DashboardStats */}
          <DashboardStats />
          {/****Sales Chart */}
          <SalesChart />

          {/****NO. OF NEW Projects and Employess Chart */}
          <div className="project-charts flex gap-5 mt-6">
            <div className="project-col basis-[66%]">
              <ProjectsChart />
            </div>
            <div className="employees-col basis-[34%]">
              <EmployeesChart />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
