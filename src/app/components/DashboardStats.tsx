import { Users, Package, TrendingUp, Clock, TrendingDown } from "lucide-react";

export default function DashboardStats() {
    const stats = [
        {
            title: "Total Employees",
            value: "1000",
            icon: <Users className="text-purple-600" size={24} />,
            iconBg: "bg-purple-100",
            change: (
                <>
                    <TrendingUp className="inline mr-1 text-green-500" size={14} />
                    8.5% Up from Last Year
                </>
            ),
            changeColor: "text-green-500",
        },
        {
            title: "Total Projects",
            value: "200",
            icon: <Package className="text-yellow-600" size={24} />,
            iconBg: "bg-yellow-100",
            change: (
                <>
                    <TrendingDown className="inline mr-1 text-red-500" size={14} />
                    1.3% Less than yesterday
                </>
            ),
            changeColor: "text-red-500",
        },
        {
            title: "Total Sales",
            value: "100",
            icon: <TrendingUp className="text-green-600" size={24} />,
            iconBg: "bg-green-100",
            change: (
                <>
                    <TrendingUp className="inline mr-1 text-green-500" size={14} />
                    4.3% Increase than yesterday
                </>
            ),
            changeColor: "text-green-500",
        },
        {
            title: "Pending Invoice",
            value: "20",
            icon: <Clock className="text-orange-600" size={24} />,
            iconBg: "bg-orange-100",
            change: (
                <>
                    <TrendingUp className="inline mr-1 text-green-500" size={14} />
                    1.8% Up from Last Month
                </>
            ),
            changeColor: "text-green-500",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-6">
            {stats.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-[14px] p-5 flex flex-col gap-4"
                    style={{ boxShadow: "6px 6px 54px 0px #0000000D" }}
                >
                    <div className="flex items-center justify-between">
                        <div className="stats-content">
                            <h3 className="text-[16px] font-medium" style={{ color: "rgba(32, 34, 36, 0.7)" }}>
                                {item.title}
                            </h3>
                            <h2
                                className="font-medium"
                                style={{ fontSize: "28px", fontWeight: 500, color: "#2C2C2C" }}
                            >
                                {item.value}
                            </h2>
                        </div>
                        <div
                            className={`p-4 rounded-2xl ${item.iconBg} flex items-center justify-center`}
                        >
                            {item.icon}
                        </div>
                    </div>

                    <p className={`text-sm flex items-center ${item.changeColor}`}>
                        {item.change}
                    </p>
                </div>
            ))}
        </div>
    );
}
