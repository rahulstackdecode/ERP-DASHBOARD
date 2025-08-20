"use client";
import { Menu, Bell, MessageSquareMore, Search, ChevronDown } from "lucide-react";
import Image from "next/image";


export default function Topbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="w-full h-18 bg-white border-b border-[#0000001A] flex items-center justify-between px-8.5 sticky top-0 z-10">
      <div className="flex items-center gap-5">
        <button onClick={toggleSidebar} className="p-0 cursor-pointer rounded text-[color:var(--heading-color)]">
          <Menu size={26} />
        </button>
        <div className="search-form relative w-[350px] max-w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#D5D5D5] rounded-md bg-[#F5F6FA] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary-color)]"
          />
          <Search
            size={18}
            className="search-icon absolute left-2.5 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button className="text-[#B2B2B2] cursor-pointer">
          <Bell size={22} />
        </button>
        <button className="text-[#B2B2B2] cursor-pointer">
          <MessageSquareMore size={22} />
        </button>

        <div className="flex items-center gap-2.5">
          <Image
            src="/images/user-img.png"
            alt="User Img"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span className="md:flex gap-1 items-center hidden cursor-pointer text-[color:var(--heading-color)]">Admirra John <ChevronDown /> </span>
        </div>
      </div>
    </header>
  );
}
