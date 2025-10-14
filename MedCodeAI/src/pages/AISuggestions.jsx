import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Search, Edit, Download, CheckCircle, AlertCircle } from 'lucide-react';

const AISuggestions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const suggestions = [
    {
      id: 'REC-001',
      diagnosis: 'Acute myocardial infarction',
      icd10: 'I21.9',
      cpt: '99291, 93010',
      confidence: 95,
      status: 'pending'
    },
    {
      id: 'REC-002',
      diagnosis: 'Type 2 diabetes mellitus',
      icd10: 'E11.9',
      cpt: '99213, 83036',
      confidence: 92,
      status: 'approved'
    },
    {
      id: 'REC-003',
      diagnosis: 'Pneumonia, unspecified',
      icd10: 'J18.9',
      cpt: '99214, 71020',
      confidence: 88,
      status: 'pending'
    },
    {
      id: 'REC-004',
      diagnosis: 'Hypertensive heart disease',
      icd10: 'I11.0',
      cpt: '99215, 93306',
      confidence: 91,
      status: 'approved'
    },
    {
      id: 'REC-005',
      diagnosis: 'Chronic obstructive pulmonary disease',
      icd10: 'J44.9',
      cpt: '99212, 94010',
      confidence: 87,
      status: 'pending'
    },
  ];

  const filteredSuggestions = suggestions.filter(item =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApprove = (id) => {
    // In a real app, this would update the backend
    console.log('Approved:', id);
  };

  const handleEdit = (id) => {
    // In a real app, this would open an edit modal
    console.log('Edit:', id);
  };

  const exportData = () => {
    // In a real app, this would export to CSV
    console.log('Exporting data...');
  };

  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">AI Suggestions</h1>
        <p className="text-gray-600 mt-2">Review and validate AI-generated medical codes</p>
      </div>

      {/* Search and Export */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by Record ID or Diagnosis..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <button
          onClick={exportData}
          className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors flex items-center space-x-2"
        >
          <Download className="w-4 h-4" />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Suggestions Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Record ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Diagnosis Summary</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">ICD-10</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">CPT</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Confidence</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSuggestions.map((item) => (
                <motion.tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="py-4 px-4 font-medium">{item.id}</td>
                  <td className="py-4 px-4">{item.diagnosis}</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                      {item.icd10}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                      {item.cpt}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{item.confidence}%</span>
                      {item.confidence >= 90 ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleApprove(item.id)}
                        className="px-3 py-1 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="px-3 py-1 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                      >
                        <Edit className="w-4 h-4 inline mr-1" />
                        Edit
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </motion.div>
  );
};

export default AISuggestions;