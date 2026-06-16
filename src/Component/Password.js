import React, { useState } from 'react';

export default function ChangePassword() {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (form.newPassword !== form.confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    // Placeholder for password update logic
    alert('Password updated successfully!');
    // In real app, call backend/Firebase API here
  };

  return (
    <div className="flex-1 p-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Dashboard &gt; Settings &gt; <span className="text-black font-semibold">Security</span>
      </div>

      <h2 className="text-xl font-bold mb-6">Change Password</h2>

      <div className="space-y-6 max-w-xl">
        {/* Current Password */}
        <div>
          <label className="block font-semibold mb-1">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            placeholder="Enter current password"
            className="w-full p-3 bg-purple-100 rounded-md outline-none"
          />
        </div>

        {/* New Password */}
        <div>
          <label className="block font-semibold mb-1">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full p-3 bg-purple-100 rounded-md outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block font-semibold mb-1">Confirm new Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter new password"
            className="w-full p-3 bg-purple-100 rounded-md outline-none"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-2 rounded-md hover:opacity-90"
        >
          Update password
        </button>
      </div>
    </div>
  );
}
