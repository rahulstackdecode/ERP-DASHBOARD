import { Bell } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      {/* Search */}
      <input
        type="text"
        placeholder="Search"
        className="border rounded-lg px-3 py-1 w-80"
      />

      {/* Right side */}
      <div className="flex items-center gap-6">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <div className="flex items-center gap-2">
          <Image
            src="/user.jpg"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-medium">Admirra John</span>
        </div>
      </div>
    </header>
  )
}
