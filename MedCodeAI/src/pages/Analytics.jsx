import { motion } from 'framer-motion';
import Card from '../components/Card';
import Chart from '../components/Chart';
import { TrendingUp, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const Analytics = () => {
  const kpiData = [
    { title: 'Total Records', value: '2,847', icon: TrendingUp, change: '+18%' },
    { title: 'Avg Accuracy', value: '94.2%', icon: CheckCircle, change: '+2.1%' },
    { title: 'Time Saved', value: '1,240h', icon: Clock, change: '+15%' },
    { title: 'Error Reduction', value: '67%', icon: AlertTriangle, change: '-12%' },
  ];

  const departmentData = [
    { name: 'Cardiology', value: 35 },
    { name: 'Emergency', value: 25 },
    { name: 'Surgery', value: 20 },
    { name: 'Oncology', value: 12 },
    { name: 'Neurology', value: 8 },
  ];

  const topCodes = [
    { name: 'I21.9', value: 145 },
    { name: 'J18.9', value: 98 },
    { name: 'E11.9', value: 87 },
    { name: 'I11.0', value: 76 },
    { name: 'J44.9', value: 65 },
  ];

  const speedData = [
    { name: 'Manual', value: 45 },
    { name: 'AI-Assisted', value: 12 },
  ];

  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h1>
        <p className="text-gray-600 mt-2">Performance metrics and insights</p>
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
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{kpi.value}</p>
                    <p className="text-sm text-green-600 mt-1">{kpi.change}</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Distribution */}
        <Chart
          type="pie"
          data={departmentData}
          title="Code Distribution by Department"
        />

        {/* Top ICD Codes */}
        <Chart
          type="bar"
          data={topCodes}
          title="Top ICD-10 Codes"
        />

        {/* Coding Speed Comparison */}
        <Chart
          type="bar"
          data={speedData}
          title="Manual vs AI Coding Speed (min/record)"
        />

        {/* Additional Analytics Card */}
        <Card>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Key Insights</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-800">Highest Accuracy in Cardiology</p>
                <p className="text-sm text-gray-600">96.8% accuracy rate with AI assistance</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-800">67% Reduction in Errors</p>
                <p className="text-sm text-gray-600">Compared to manual coding processes</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-800">1,240 Hours Saved</p>
                <p className="text-sm text-gray-600">Equivalent to 3.4 FTE coders</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default Analytics;