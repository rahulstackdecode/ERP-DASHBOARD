export default function DashboardPage() {
    return (
        <main className="p-6 bg-gray-100 min-h-screen">
            {/* Page Title */}
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="rounded-xl border bg-white shadow-sm p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Employees</h3>
                    <p className="text-2xl font-bold">1000</p>
                    <span className="text-sm text-green-600">+8.5% from last year</span>
                </div>

                {/* Card 2 */}
                <div className="rounded-xl border bg-white shadow-sm p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Projects</h3>
                    <p className="text-2xl font-bold">2000</p>
                    <span className="text-sm text-green-600">+1.3% from last month</span>
                </div>

                {/* Card 3 */}
                <div className="rounded-xl border bg-white shadow-sm p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Sales</h3>
                    <p className="text-2xl font-bold">$5000</p>
                    <span className="text-sm text-red-600">-4.3% from last month</span>
                </div>

                {/* Card 4 */}
                <div className="rounded-xl border bg-white shadow-sm p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Pending Invoices</h3>
                    <p className="text-2xl font-bold">$3000</p>
                    <span className="text-sm text-orange-600">+1.8% from last month</span>
                </div>
            </div>
        </main>
    );
}
