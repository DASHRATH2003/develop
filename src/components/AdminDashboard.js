import React, { useState } from 'react';
import { FiMenu, FiUser, FiSettings, FiLogOut, FiBarChart2, FiUsers, FiDatabase, FiBriefcase } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import JobsManagement from './Admin/JobsManagement';
import UsersPage from './UsersPage';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { icon: <FiBarChart2 className="w-5 h-5" />, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: <FiBriefcase className="w-5 h-5" />, label: 'Jobs', path: '/admin/jobs' },
    { icon: <FiUsers className="w-5 h-5" />, label: 'Users', path: '/admin/users' },
    { icon: <FiSettings className="w-5 h-5" />, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-indigo-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center justify-between p-4 border-b border-indigo-700">
        {isOpen && <h1 className="text-xl font-bold">Innomatrics</h1>}
        <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-indigo-700">
          <FiMenu className="w-6 h-6" />
        </button>
      </div>
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center px-4 py-3 text-gray-300 hover:bg-indigo-700 hover:text-white transition-colors ${
              location.pathname === item.path ? 'bg-indigo-700 text-white' : ''
            }`}
          >
            {item.icon}
            {isOpen && <span className="ml-4">{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};

const Header = ({ user }) => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FiUser className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">{user?.fullName || 'Admin'}</span>
          </div>
          <button className="flex items-center space-x-2 text-red-600 hover:text-red-700">
            <FiLogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  </header>
);

const DashboardStats = () => {
  const stats = [
    { label: 'Total Jobs', value: '15', change: '+3', changeType: 'increase' },
    { label: 'Active Jobs', value: '12', change: '+2', changeType: 'increase' },
    { label: 'Applications', value: '234', change: '+18%', changeType: 'increase' },
    { label: 'Hired', value: '45', change: '+5', changeType: 'increase' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <span className={`ml-2 text-sm font-medium ${
              stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const DashboardContent = () => (
  <div className="p-6">
    <DashboardStats />
    
    {/* Recent Activity Section */}
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {[
          { title: 'New job posted', time: '2 hours ago', type: 'job' },
          { title: 'New application received', time: '4 hours ago', type: 'application' },
          { title: 'Candidate hired', time: '1 day ago', type: 'hire' }
        ].map((activity, index) => (
          <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <FiBriefcase className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
            <button className="text-sm text-indigo-600 hover:text-indigo-700">View</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const user = { fullName: 'Dashrath yadav' }; // Replace with actual user data

  const renderContent = () => {
    switch (location.pathname) {
      case '/admin/jobs':
        return <JobsManagement />;
      case '/admin/users':
        return <UsersPage />;
      case '/admin/settings':
        return <div className="p-6">Settings page content</div>;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header user={user} />
        <main className="max-w-7xl mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard; 