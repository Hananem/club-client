import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Navbar from '../components/common/Navbar';
import { 
   
    FiDollarSign,
    FiFileText,
  
    FiCalendar,
    FiGift,
    FiUsers
  } from 'react-icons/fi';
  import { IoTicketOutline } from "react-icons/io5";

  import Subscriptions from '../components/dashboard/Subscriptions';
  import Receipts from '../components/dashboard/Receipts';
  import Tickets from '../components/dashboard/Tickets';
  import Attendance from '../components/dashboard/Attendance';
  import FreeInvites from '../components/dashboard/FreeInvites';
  import Leads from '../components/dashboard/Leads';
  

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState('subscriptions');

  // Navigation 
  const navItems = [
    { 
      id: 'subscriptions', 
      name: 'Subscriptions', 
      icon: <FiDollarSign />, 
      content: <Subscriptions /> 
    },
    { 
      id: 'receipts', 
      name: 'Receipts', 
      icon: <FiFileText />, 
      content: <Receipts /> 
    },
    { 
      id: 'tickets', 
      name: 'Tickets', 
      icon: <IoTicketOutline />, 
      content: <Tickets/> 
    },
    { 
      id: 'attendance', 
      name: 'Attendance', 
      icon: <FiCalendar />, 
      content: <Attendance /> 
    },
    { 
      id: 'free-invites', 
      name: 'Free Invites', 
      icon: <FiGift />, 
      content: <FreeInvites /> 
    },
    { 
      id: 'leads', 
      name: 'Leads', 
      icon: <FiUsers />, 
      content: <Leads /> 
    },
  ];
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Backdrop  */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-10 bg-gray-800/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed z-20 md:relative
        transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        w-64 h-full bg-white border-r border-gray-200
        transition-transform duration-300 ease-in-out
      `}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header with Menu Button */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Logo</h1>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
          </div>
          
          {/* Sidebar Content */}
          <div className="flex-1 p-4 overflow-y-auto">
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveContent(item.id)}
                    className={`
                      w-full flex items-center space-x-3 p-3 rounded-lg
                      transition-colors duration-200 text-left
                      ${activeContent === item.id ? 
                        'bg-blue-50 text-blue-600 font-medium' : 
                        'text-gray-700 hover:bg-gray-100'}
                    `}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          </div>
          
          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200">
            Footer Content
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-auto">
        {/* Navbar with only the menu button removed (keep other navbar content) */}
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} hideMenuButton />
        
        <main className="flex-1 p-4 overflow-auto">
        {navItems.find(item => item.id === activeContent)?.content}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;