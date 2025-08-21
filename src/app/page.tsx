"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ResponsiveSidebar from "./components/Responsive-Sidebar";
import Topbar from "./components/Topbar";
import DashboardStats from "./components/DashboardStats";
import { Plus } from "lucide-react";
import SalesChart from "./components/SalesChart";
import ProjectsChart from "./components/ProjectsChart";
import EmployeesChart from "./components/EmployeesChart";
import Image from "next/image";
import FooterCopyright from "./components/FooterCopyright";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <div className="wrapper ">
        <div className="dashboard-container flex">

          <Sidebar isOpen={isOpen} />
          <ResponsiveSidebar />
          {/* Main Content */}
          <div className="h-screen flex-1 flex flex-col transition-all duration-300 overflow-hidden">
            <Topbar toggleSidebar={() => setIsOpen(!isOpen)} />

            <main className="flex-1 bg-white overflow-x-hidden">
              <div className="dashboard-wrapper px-4 py-7 lg:py-7 lg:px-8 max-w-full">
                <h2 className="mb-6 font-medium text-[26px] sm:text-[32px] text-[color:var(--heading-color)] leading-snug">
                  Admin Dashboard
                </h2>


                {/* Welcome Card */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full bg-white rounded-sm p-5 shadow-[0px_0px_1px_1px_rgba(198,198,198)]">
                  {/* Left Section */}
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/user-img.png"
                      alt="User Img"
                      width={56}
                      height={56}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug">
                        Welcome Back, Admirra John
                      </h3>
                      <p className="text-sm sm:text-base font-light text-gray-600">
                        You have{" "}
                        <span className="text-[color:var(--primary-color)] underline cursor-pointer">
                          21
                        </span>{" "}
                        Pending Approvals
                      </p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <button className="mt-4 sm:mt-0 flex items-center gap-2 px-4 py-2 text-[14px] sm:text-[15px] cursor-pointer font-medium text-white bg-[var(--primary-color)] rounded-sm transition hover:bg-[var(--btn-hover-bg)] w-full sm:w-auto justify-center">
                    <Plus size={16} />
                    Add Project
                  </button>
                </div>

                {/* Dashboard Stats */}
                <DashboardStats />

                {/* Sales Chart */}
                <div className="w-full mt-6">
                  <SalesChart key={isOpen ? "open" : "closed"} />
                </div>

                <div className="project-charts flex flex-col lg:flex-row gap-5 mt-6">
                  {/* Projects Chart */}
                  <div className="project-col w-full lg:flex-1 min-w-0">
                    <div className="w-full">
                      <ProjectsChart key={isOpen ? "open" : "closed"} />
                    </div>
                  </div>

                  {/* Employees Chart */}
                  <div className="employees-col w-full lg:w-[35%] min-w-0">
                    <div className="w-full">
                      <EmployeesChart key={isOpen ? "open" : "closed"} />
                    </div>
                  </div>
                </div>




              </div>
              {/* Footer */}
              <FooterCopyright />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
