import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { User, Building, Brain, Shield, Sun, Moon } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    name: 'Dr. Sarah Smith',
    role: 'Chief Medical Officer',
    hospital: 'City General Hospital',
    aiModel: 'MedBERT',
    onPremise: true,
    anonymizeData: true,
    theme: 'light'
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const aiModels = ['MedBERT', 'BioBERT', 'GPT-Coder', 'ClinicalBERT'];

  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your profile, AI models, and privacy settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Section */}
        <Card>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <User className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Profile Settings</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => handleSettingChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <input
                type="text"
                value={settings.role}
                onChange={(e) => handleSettingChange('role', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hospital</label>
              <input
                type="text"
                value={settings.hospital}
                onChange={(e) => handleSettingChange('hospital', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </Card>

        {/* AI Model Settings */}
        <Card>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">AI Model Settings</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">AI Model</label>
              <select
                value={settings.aiModel}
                onChange={(e) => handleSettingChange('aiModel', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {aiModels.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">On-premise Processing</label>
                <p className="text-xs text-gray-500">Run AI locally on hospital servers</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.onPremise}
                  onChange={(e) => handleSettingChange('onPremise', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Privacy & Security</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Anonymize PHI Data</label>
                <p className="text-xs text-gray-500">Remove personal identifiers before processing</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.anonymizeData}
                  onChange={(e) => handleSettingChange('anonymizeData', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Privacy Notice:</strong> Patient data never leaves hospital servers. AI runs locally to maintain HIPAA compliance and data privacy.
              </p>
            </div>
          </div>
        </Card>

        {/* Theme Settings */}
        <Card>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              {settings.theme === 'light' ? <Sun className="w-6 h-6 text-primary" /> : <Moon className="w-6 h-6 text-primary" />}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Appearance</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleSettingChange('theme', 'light')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                    settings.theme === 'light'
                      ? 'border-primary bg-primary text-white'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  <span>Light</span>
                </button>
                <button
                  onClick={() => handleSettingChange('theme', 'dark')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                    settings.theme === 'dark'
                      ? 'border-primary bg-primary text-white'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Moon className="w-4 h-4" />
                  <span>Dark</span>
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors">
          Save Settings
        </button>
      </div>
    </motion.div>
  );
};

export default Settings;