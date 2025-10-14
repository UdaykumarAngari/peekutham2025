import { motion } from 'framer-motion';
import Card from '../components/Card';
import Chart from '../components/Chart';
import { TrendingUp, Clock, CheckCircle, Users } from 'lucide-react';

const Dashboard = () => {
  const kpiData = [
    { title: 'Records Processed', value: '1,247', icon: TrendingUp, change: '+12%' },
    { title: 'Accuracy (%)', value: '94.2', icon: CheckCircle, change: '+2.1%' },
    { title: 'Avg Time Saved', value: '45min', icon: Clock, change: '+8%' },
    { title: 'Approval Rate', value: '87.5%', icon: Users, change: '+5.2%' },
  ];

  const accuracyData = [
    { name: 'Jan', value: 85 },
    { name: 'Feb', value: 88 },
    { name: 'Mar', value: 91 },
    { name: 'Apr', value: 89 },
    { name: 'May', value: 93 },
    { name: 'Jun', value: 94 },
  ];

  const recentRecords = [
    { id: 'REC-001', dept: 'Cardiology', status: 'Approved', updated: '2 hours ago' },
    { id: 'REC-002', dept: 'Neurology', status: 'Pending', updated: '4 hours ago' },
    { id: 'REC-003', dept: 'Oncology', status: 'Approved', updated: '6 hours ago' },
    { id: 'REC-004', dept: 'Emergency', status: 'Rejected', updated: '8 hours ago' },
    { id: 'REC-005', dept: 'Surgery', status: 'Approved', updated: '1 day ago' },
  ];

  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, Dr. Everest </h1>
        <p className="text-gray-600 mt-2">Here's your medical coding dashboard overview</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <Card>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{kpi.value}</p>
                    <p className="text-sm text-green-600 mt-1">{kpi.change}</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-200" />
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Charts and Table */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Accuracy Chart */}
        <Chart
          type="line"
          data={accuracyData}
          title="AI Accuracy Over Time"
        />

        {/* Recent Records Table */}
        <Card>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Records</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-4 font-medium text-gray-600">Record ID</th>
                  <th className="text-left py-2 px-4 font-medium text-gray-600">Dept</th>
                  <th className="text-left py-2 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-2 px-4 font-medium text-gray-600">Updated</th>
                </tr>
              </thead>
              <tbody>
                {recentRecords.map((record) => (
                  <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{record.id}</td>
                    <td className="py-3 px-4">{record.dept}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        record.status === 'Approved' ? 'bg-green-100 text-green-800' :
                        record.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-500">{record.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;