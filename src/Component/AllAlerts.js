import React from "react";
import '../css/allalerts.css';
import {
  CheckCircle,
  AlertTriangle,
  WifiOff,
  UserPlus,
  BellRing,
} from "lucide-react"; // Lucide icons

const alerts = [
  {
    id: 1,
    icon: <CheckCircle className="text-white" size={20} />,
    title: "System Update Applied",
    subtitle: "Energy settings updates successfully.",
    type: "update",
  },
  {
    id: 2,
    icon: <AlertTriangle className="text-white" size={20} />,
    title: "Unauthorized Access Attempt",
    subtitle: "Guest access denied at 10:42 AM.",
    type: "alert",
  },
  {
    id: 3,
    icon: <WifiOff className="text-white" size={20} />,
    title: "Device Offline",
    subtitle: "Living Room Camera disconnected.",
    type: "alert",
  },
  {
    id: 4,
    icon: <UserPlus className="text-white" size={20} />,
    title: "New Guest Added",
    subtitle: "Guest profile created by Homeowner.",
    type: "update",
  },
  {
    id: 5,
    icon: <BellRing className="text-white" size={20} />,
    title: "Security Alert",
    subtitle: "Multiple failed login attempts detected.",
    type: "warning",
  },
];

export default function AlertsUpdates() {
  return (
    <div className="p-6">
      <div className="text-sm text-gray-600 mb-2">Alerts &gt; Updates</div>
      <h2 className="text-2xl font-semibold mb-4">Alerts & Updates</h2>

      <div className="flex border-b mb-6 text-sm font-medium">
        <button className="py-2 px-4 border-b-2 border-black">All</button>
        <button className="py-2 px-4 text-purple-600">Warnings</button>
        <button className="py-2 px-4 text-purple-600">Alert</button>
        <button className="py-2 px-4 text-purple-600">Updates</button>
      </div>

      <h3 className="font-semibold text-lg mb-4">Recent Notifications</h3>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-center gap-4 bg-white shadow-sm p-3 rounded-lg"
          >
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-3 rounded-full">
              {alert.icon}
            </div>
            <div>
              <p className="font-medium text-black">{alert.title}</p>
              <p className="text-sm text-gray-600">{alert.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
