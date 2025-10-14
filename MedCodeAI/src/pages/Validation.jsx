import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { CheckCircle, XCircle, MessageSquare, Eye } from 'lucide-react';

const Validation = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);

  const records = [
    {
      id: 'REC-001',
      confidence: 95,
      status: 'pending',
      diagnosis: 'Acute myocardial infarction',
      clinicalNote: 'Patient presented with chest pain, ST elevation on ECG, elevated troponin levels. Treated with aspirin, heparin, and emergent PCI.',
      aiCodes: { icd10: 'I21.9', cpt: '99291, 93010' }
    },
    {
      id: 'REC-002',
      confidence: 92,
      status: 'pending',
      diagnosis: 'Type 2 diabetes mellitus',
      clinicalNote: 'Patient with uncontrolled hyperglycemia, HbA1c 9.2%. Started on metformin and insulin therapy.',
      aiCodes: { icd10: 'E11.9', cpt: '99213, 83036' }
    },
    {
      id: 'REC-003',
      confidence: 88,
      status: 'pending',
      diagnosis: 'Community-acquired pneumonia',
      clinicalNote: 'Fever, cough, shortness of breath. Chest X-ray shows right lower lobe infiltrate. Started on ceftriaxone and azithromycin.',
      aiCodes: { icd10: 'J18.9', cpt: '99214, 71020' }
    },
  ];

  const handleAction = (recordId, action) => {
    console.log(`${action} record:`, recordId);
    // In a real app, this would update the backend
  };

  const openModal = (record) => {
    setSelectedRecord(record);
  };

  const closeModal = () => {
    setSelectedRecord(null);
  };

  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Validation Queue</h1>
        <p className="text-gray-600 mt-2">Review and validate AI-generated medical codes</p>
      </div>

      {/* Records List */}
      <div className="space-y-4">
        {records.map((record) => (
          <Card key={record.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="font-semibold text-gray-800">{record.id}</h3>
                  <p className="text-sm text-gray-600">{record.diagnosis}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">AI Confidence:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    record.confidence >= 90 ? 'bg-green-100 text-green-800' :
                    record.confidence >= 80 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {record.confidence}%
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => openModal(record)}
                  className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-1"
                >
                  <Eye className="w-4 h-4" />
                  <span>Review</span>
                </button>
                <button
                  onClick={() => handleAction(record.id, 'approve')}
                  className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-1"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Approve</span>
                </button>
                <button
                  onClick={() => handleAction(record.id, 'reject')}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-1"
                >
                  <XCircle className="w-4 h-4" />
                  <span>Reject</span>
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selectedRecord && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Record Validation</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Clinical Note</h3>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-700">{selectedRecord.clinicalNote}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">AI Suggested Codes</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-gray-600">ICD-10:</span>
                    <div className="mt-1 px-3 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium">
                      {selectedRecord.aiCodes.icd10}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">CPT:</span>
                    <div className="mt-1 px-3 py-2 bg-green-100 text-green-800 rounded-lg font-medium">
                      {selectedRecord.aiCodes.cpt}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Feedback/Comments</h3>
                <textarea
                  placeholder="Add your feedback or corrections..."
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  rows={3}
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    handleAction(selectedRecord.id, 'feedback');
                    closeModal();
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Feedback</span>
                </button>
                <button
                  onClick={() => {
                    handleAction(selectedRecord.id, 'approve');
                    closeModal();
                  }}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Approve</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Validation;