// app/(dashboard)/layout.tsx
import { Sidebar } from "@/components/Sidebar"
import { Navbar } from "@/components/Navbar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
