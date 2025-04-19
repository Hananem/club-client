import React from 'react';
import { Outlet } from 'react-router-dom'; // ✅ Import Outlet!
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../components/dashboard/Sidebar';
import { closeSidebar } from '../redux/slices/uiSlice';

import {
  FiDollarSign, FiFileText, FiCalendar, FiGift, FiUsers,
} from 'react-icons/fi';
import { IoTicketOutline } from 'react-icons/io5';
import { MdOutlineDashboard } from 'react-icons/md';

const Dashboard = () => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);

  const navItems = [
    { path: '', name: 'Main', icon: <MdOutlineDashboard /> },
    { path: 'subscriptions', name: 'Subscriptions', icon: <FiDollarSign /> },
    { path: 'receipts', name: 'Receipts', icon: <FiFileText /> },
    { path: 'members', name: 'Members', icon: <FiUsers /> },
    { path: 'tickets', name: 'Tickets', icon: <IoTicketOutline /> },
    { path: 'attendance', name: 'Attendance', icon: <FiCalendar /> },
    { path: 'free-invites', name: 'Free Invites', icon: <FiGift /> },
    { path: 'leads', name: 'Leads', icon: <FiUsers /> },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        navItems={navItems}
        sidebarOpen={sidebarOpen}
        closeSidebar={() => dispatch(closeSidebar())}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-auto">
        <main className="flex-1 p-4 overflow-auto">
          <Outlet /> {/* ✅ Renders the matched child route */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;



