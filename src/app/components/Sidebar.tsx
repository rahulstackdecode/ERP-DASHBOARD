"use client";
import { useState, ReactNode } from "react";
import Image from "next/image";
import Logo from "@/app/components/Logo";
import {
  Home,
  Users,
  Folder,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
  UsersRound,
  ChevronDown,
  ChevronRight,
  User,
  Building2,
  Calendar,
  UserCheck,
  DollarSign,
  BarChart,
  UserCog,
  Briefcase,
} from "lucide-react";

type SubMenuItem = {
  label: string;
  href: string;
  icon?: ReactNode;
};

type MenuItem = {
  label: string;
  icon: ReactNode;
  href?: string;
  children?: SubMenuItem[];
};

const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: <Home size={18} />, href: "#" },
  {
    label: "Peoples & Teams",
    icon: <Users size={18} />,
    children: [
      { label: "Employee", href: "#", icon: <User size={16} /> },
      { label: "Company", href: "#", icon: <Building2 size={16} /> },
      { label: "Leaves", href: "#", icon: <Calendar size={16} /> },
    ],
  },
  { label: "Projects", icon: <Folder size={18} />, href: "#" },
  {
    label: "Clients",
    icon: <UsersRound size={18} />,
    children: [
      { label: "Clients List", href: "#", icon: <UserCheck size={16} /> },
      {
        label: "Invoices & Payments",
        href: "#",
        icon: <DollarSign size={16} />,
      },
    ],
  },
  {
    label: "Reports",
    icon: <FileText size={18} />,
    children: [
      { label: "Team Report", href: "#", icon: <BarChart size={16} /> },
      { label: "Leave Report", href: "#", icon: <Calendar size={16} /> },
    ],
  },
  {
    label: "Account Settings",
    icon: <Settings size={18} />,
    children: [
      { label: "Profile", href: "#", icon: <User size={16} /> },
      {
        label: "Department Manage",
        href: "#",
        icon: <Briefcase size={16} />,
      },
      { label: "Role & Permission", href: "#", icon: <UserCog size={16} /> },
    ],
  },
  { label: "Helpdesk / Support", icon: <HelpCircle size={18} />, href: "#" },
];

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const [activeMenu, setActiveMenu] = useState<string>("Dashboard"); // Default active

  const toggleSubmenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <aside
      className={`${isOpen ? "w-64" : "w-14"}
        bg-white h-screen fixed top-0 left-0 transition-all duration-300 flex flex-col shadow-[0px_10px_60px_0px_#E2ECF980]`}
    >
      {/* Logo */}
      <div className="px-2 py-6 flex items-center justify-center">
        {isOpen ? (
          <Logo className="logo-dashboard" />
        ) : (
          <Image
            src="/images/icon-logo.png"
            alt="Logo Icon"
            width={30}
            height={30}
          />
        )}
      </div>

      {/* Menu */}
      <nav className="flex-1 p-2 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label} className="mb-3">
              {item.children ? (
                <>
                  {/* Parent with toggle */}
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={`w-full flex items-center justify-between rounded-[5px] font-medium text-[14px] px-[10px] py-[10px] transition-colors duration-200
                      ${activeMenu === item.label
                        ? "bg-[color:var(--primary-color)] text-[color:var(--white-text)]"
                        : "text-[color:var(--heading-color)] hover:bg-[color:var(--primary-color)] hover:text-[color:var(--white-text)]"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      {isOpen && <span>{item.label}</span>}
                    </div>
                    {isOpen &&
                      (openMenus.includes(item.label) ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      ))}
                  </button>

                  {/* Submenu */}
                  {openMenus.includes(item.label) && isOpen && (
                    <ul className="mt-1 space-y-1 p-3 bg-[#F7F7F7] rounded-[5px]">
                      {item.children.map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.href}
                            onClick={() => setActiveMenu(sub.label)}
                            className={`flex items-center gap-3 rounded-[5px] font-medium text-[14px] px-[10px] py-[10px] transition-colors duration-200
                              ${activeMenu === sub.label
                                ? "bg-[color:var(--primary-color)] text-[color:var(--white-text)]"
                                : "text-[color:var(--heading-color)] hover:bg-[color:var(--primary-color)] hover:text-[color:var(--white-text)]"
                              }`}
                          >
                            {sub.icon && sub.icon}
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setActiveMenu(item.label)}
                  className={`flex items-center gap-3 rounded-[5px] font-medium text-[14px] px-[10px] py-[10px] transition-colors duration-200
                    ${activeMenu === item.label
                      ? "bg-[color:var(--primary-color)] text-[color:var(--white-text)]"
                      : "text-[color:var(--heading-color)] hover:bg-[color:var(--primary-color)] hover:text-[color:var(--white-text)]"
                    }`}
                >
                  {item.icon}
                  {isOpen && <span>{item.label}</span>}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="py-4 px-2 border-t border-[var(--border-light)]">
        <button className="w-full flex items-center justify-center font-medium gap-3 px-2 cursor-pointer py-2.5 text-white bg-red-500 rounded-md hover:bg-red-600 text-center">
          <LogOut size={18} />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
