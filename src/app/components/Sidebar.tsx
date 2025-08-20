import { Home, Users, Briefcase, BarChart, Settings, HelpCircle, LogOut } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="p-6 font-bold text-xl">StackDecode</div>

        {/* Nav Links */}
        <nav className="space-y-2 px-4">
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <Home className="w-5 h-5 mr-3" /> Dashboard
          </a>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <Users className="w-5 h-5 mr-3" /> People & Teams
          </a>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <Briefcase className="w-5 h-5 mr-3" /> Projects
          </a>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <BarChart className="w-5 h-5 mr-3" /> Reports
          </a>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <Settings className="w-5 h-5 mr-3" /> Account Settings
          </a>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <HelpCircle className="w-5 h-5 mr-3" /> Helpdesk / Support
          </a>
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4">
        <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg">
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </div>
    </aside>
  )
}
