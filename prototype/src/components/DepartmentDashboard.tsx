import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// TypeScript interfaces
interface DataItem {
  text: string;
  count: number;
  percentage: number;
}

interface ProficiencyItem {
  level: string;
  count: number;
  percentage: number;
}

interface FrequencyItem {
  frequency: string;
  count: number;
  percentage: number;
}

interface AIUsageItem {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

interface DepartmentData {
  department: string;
  totalResponses: number;
  proficiency: ProficiencyItem[];
  frequency: FrequencyItem[];
  avgTimeSpent: number;
  overallAvg: number;
  topTasks: DataItem[];
  topTools: DataItem[];
  topChallenges: DataItem[];
  topSkills: DataItem[];
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: ProficiencyItem | FrequencyItem;
  }>;
  label?: string;
}

interface CompactMetricCardProps {
  title: string;
  data: DataItem[];
  icon: string;
  bgColor: string;
}

interface AIAdoptionCardProps {
  aiUsage: AIUsageItem[];
}

interface TimeGaugeProps {
  deptTime: number;
  overallTime: number;
}

const DepartmentDashboard: React.FC = () => {
  // Overall aggregated data
  const overallData: DepartmentData = {
    department: "Overall Organization",
    totalResponses: 108,
    proficiency: [
      { level: "Basic", count: 61, percentage: 56 },
      { level: "Confident", count: 37, percentage: 34 },
      { level: "Advanced", count: 10, percentage: 9 },
      { level: "Expert", count: 3, percentage: 3 },
      { level: "Beginner", count: 2, percentage: 2 }
    ],
    frequency: [
      { frequency: "Regular", count: 50, percentage: 46 },
      { frequency: "Daily", count: 38, percentage: 35 },
      { frequency: "Occasional", count: 18, percentage: 17 },
      { frequency: "Never", count: 2, percentage: 2 }
    ],
    avgTimeSpent: 58,
    overallAvg: 58,
    topTasks: [
      { text: "Data Analysis & Reports", count: 53, percentage: 49 },
      { text: "Meeting Preparation", count: 50, percentage: 46 },
      { text: "Email Correspondence", count: 47, percentage: 44 }
    ],
    topTools: [
      { text: "Pair Chat", count: 97, percentage: 90 },
      { text: "Other GenAI", count: 64, percentage: 59 },
      { text: "AIBots", count: 34, percentage: 31 }
    ],
    topChallenges: [
      { text: "Accuracy Concerns", count: 55, percentage: 51 },
      { text: "Privacy Concerns", count: 48, percentage: 44 },
      { text: "Poor Prompting", count: 32, percentage: 30 }
    ],
    topSkills: [
      { text: "Presentation Skills", count: 47, percentage: 44 },
      { text: "Data Analysis", count: 44, percentage: 41 },
      { text: "Chart Generation", count: 41, percentage: 38 }
    ]
  };

  // Expanded department data with all 9 departments
  const departmentData: Record<string, DepartmentData> = {
    "Overall": overallData,
    "Digital Governance": {
      department: "Digital Governance",
      totalResponses: 22,
      proficiency: [
        { level: "Basic", count: 5, percentage: 23 },
        { level: "Confident", count: 11, percentage: 50 },
        { level: "Advanced", count: 3, percentage: 14 },
        { level: "Expert", count: 3, percentage: 14 }
      ],
      frequency: [
        { frequency: "Daily", count: 13, percentage: 59 },
        { frequency: "Regular", count: 8, percentage: 36 },
        { frequency: "Occasional", count: 1, percentage: 5 }
      ],
      avgTimeSpent: 58,
      overallAvg: 54,
      topTasks: [
        { text: "Data Analysis & Reports", count: 12, percentage: 55 },
        { text: "Meeting Preparation", count: 10, percentage: 45 },
        { text: "Email Correspondence", count: 9, percentage: 41 }
      ],
      topTools: [
        { text: "Pair Chat", count: 20, percentage: 91 },
        { text: "Other GenAI", count: 14, percentage: 64 },
        { text: "AIBots", count: 11, percentage: 50 }
      ],
      topChallenges: [
        { text: "Privacy Concerns", count: 15, percentage: 68 },
        { text: "Accuracy Concerns", count: 9, percentage: 41 },
        { text: "Needs Editing", count: 5, percentage: 23 }
      ],
      topSkills: [
        { text: "Presentation Skills", count: 12, percentage: 55 },
        { text: "Data Analysis", count: 9, percentage: 41 },
        { text: "Chart Generation", count: 6, percentage: 27 }
      ]
    },
    "People & Org": {
      department: "People & Org",
      totalResponses: 18,
      proficiency: [
        { level: "Basic", count: 12, percentage: 67 },
        { level: "Confident", count: 6, percentage: 33 }
      ],
      frequency: [
        { frequency: "Daily", count: 9, percentage: 50 },
        { frequency: "Regular", count: 6, percentage: 33 },
        { frequency: "Occasional", count: 2, percentage: 11 }
      ],
      avgTimeSpent: 45,
      overallAvg: 54,
      topTasks: [
        { text: "Data Analysis & Reports", count: 15, percentage: 83 },
        { text: "Meeting Preparation", count: 8, percentage: 44 },
        { text: "Email Correspondence", count: 7, percentage: 39 }
      ],
      topTools: [
        { text: "Pair Chat", count: 18, percentage: 100 },
        { text: "Other GenAI", count: 9, percentage: 50 },
        { text: "Transcribe", count: 6, percentage: 33 }
      ],
      topChallenges: [
        { text: "Accuracy Concerns", count: 9, percentage: 50 },
        { text: "Privacy Concerns", count: 8, percentage: 44 },
        { text: "Needs Editing", count: 7, percentage: 39 }
      ],
      topSkills: [
        { text: "Data Analysis", count: 10, percentage: 56 },
        { text: "Presentation Skills", count: 9, percentage: 50 },
        { text: "Chart Generation", count: 8, percentage: 44 }
      ]
    },
    "Finance": {
      department: "Finance",
      totalResponses: 23,
      proficiency: [
        { level: "Basic", count: 20, percentage: 87 },
        { level: "Confident", count: 2, percentage: 9 },
        { level: "Beginner", count: 1, percentage: 4 }
      ],
      frequency: [
        { frequency: "Regular", count: 11, percentage: 48 },
        { frequency: "Occasional", count: 9, percentage: 39 },
        { frequency: "Daily", count: 3, percentage: 13 }
      ],
      avgTimeSpent: 59,
      overallAvg: 54,
      topTasks: [
        { text: "Data Analysis & Reports", count: 18, percentage: 78 },
        { text: "Budget Planning", count: 13, percentage: 57 },
        { text: "Email Correspondence", count: 8, percentage: 35 }
      ],
      topTools: [
        { text: "Pair Chat", count: 19, percentage: 83 },
        { text: "Other GenAI", count: 10, percentage: 43 },
        { text: "Transcribe", count: 4, percentage: 17 }
      ],
      topChallenges: [
        { text: "Poor Prompting", count: 13, percentage: 57 },
        { text: "Accuracy Concerns", count: 12, percentage: 52 },
        { text: "Technical Difficulties", count: 7, percentage: 30 }
      ],
      topSkills: [
        { text: "Data Analysis", count: 13, percentage: 57 },
        { text: "Chart Generation", count: 10, percentage: 43 },
        { text: "Template Creation", count: 10, percentage: 43 }
      ]
    },
    "Strat Plans & Transformation": {
      department: "Strat Plans & Transformation",
      totalResponses: 13,
      proficiency: [
        { level: "Basic", count: 5, percentage: 38 },
        { level: "Confident", count: 5, percentage: 38 },
        { level: "Advanced", count: 3, percentage: 23 }
      ],
      frequency: [
        { frequency: "Regular", count: 6, percentage: 46 },
        { frequency: "Daily", count: 4, percentage: 31 },
        { frequency: "Occasional", count: 3, percentage: 23 }
      ],
      avgTimeSpent: 48,
      overallAvg: 54,
      topTasks: [
        { text: "Meeting Preparation", count: 9, percentage: 69 },
        { text: "Email Correspondence", count: 6, percentage: 46 },
        { text: "Admin Tasks", count: 6, percentage: 46 }
      ],
      topTools: [
        { text: "Pair Chat", count: 11, percentage: 85 },
        { text: "Other GenAI", count: 11, percentage: 85 },
        { text: "AIBots", count: 6, percentage: 46 }
      ],
      topChallenges: [
        { text: "Inconsistent Quality", count: 5, percentage: 38 },
        { text: "Accuracy Concerns", count: 4, percentage: 31 },
        { text: "Privacy Concerns", count: 4, percentage: 31 }
      ],
      topSkills: [
        { text: "Multi-step Prompting", count: 7, percentage: 54 },
        { text: "Presentation Skills", count: 4, percentage: 31 },
        { text: "Template Creation", count: 4, percentage: 31 }
      ]
    },
    "Comms & Marketing": {
      department: "Comms & Marketing",
      totalResponses: 10,
      proficiency: [
        { level: "Basic", count: 5, percentage: 50 },
        { level: "Confident", count: 5, percentage: 50 }
      ],
      frequency: [
        { frequency: "Regular", count: 7, percentage: 70 },
        { frequency: "Daily", count: 2, percentage: 20 },
        { frequency: "Occasional", count: 1, percentage: 10 }
      ],
      avgTimeSpent: 62,
      overallAvg: 54,
      topTasks: [
        { text: "Email Correspondence", count: 7, percentage: 70 },
        { text: "Stakeholder Engagement", count: 5, percentage: 50 },
        { text: "Document Review", count: 4, percentage: 40 }
      ],
      topTools: [
        { text: "Pair Chat", count: 10, percentage: 100 },
        { text: "Other GenAI", count: 7, percentage: 70 },
        { text: "Transcribe", count: 6, percentage: 60 }
      ],
      topChallenges: [
        { text: "Accuracy Concerns", count: 4, percentage: 40 },
        { text: "Privacy Concerns", count: 4, percentage: 40 },
        { text: "Poor Prompting", count: 4, percentage: 40 }
      ],
      topSkills: [
        { text: "Presentation Skills", count: 5, percentage: 50 },
        { text: "Chart Generation", count: 5, percentage: 50 },
        { text: "Template Creation", count: 4, percentage: 40 }
      ]
    },
    "Org Excellence": {
      department: "Org Excellence",
      totalResponses: 7,
      proficiency: [
        { level: "Basic", count: 3, percentage: 43 },
        { level: "Confident", count: 4, percentage: 57 }
      ],
      frequency: [
        { frequency: "Regular", count: 5, percentage: 71 },
        { frequency: "Daily", count: 1, percentage: 14 },
        { frequency: "Occasional", count: 1, percentage: 14 }
      ],
      avgTimeSpent: 60,
      overallAvg: 54,
      topTasks: [
        { text: "Meeting Preparation", count: 6, percentage: 86 },
        { text: "Admin Tasks", count: 5, percentage: 71 },
        { text: "Email Correspondence", count: 3, percentage: 43 }
      ],
      topTools: [
        { text: "Pair Chat", count: 7, percentage: 100 },
        { text: "AIBots", count: 5, percentage: 71 },
        { text: "Other GenAI", count: 5, percentage: 71 }
      ],
      topChallenges: [
        { text: "Accuracy Concerns", count: 6, percentage: 86 },
        { text: "Needs Editing", count: 4, percentage: 57 },
        { text: "Poor Prompting", count: 4, percentage: 57 }
      ],
      topSkills: [
        { text: "Chart Generation", count: 4, percentage: 57 },
        { text: "Presentation Skills", count: 3, percentage: 43 },
        { text: "Template Creation", count: 3, percentage: 43 }
      ]
    },
    "Partnerships & Engagement": {
      department: "Partnerships & Engagement",
      totalResponses: 7,
      proficiency: [
        { level: "Basic", count: 2, percentage: 29 },
        { level: "Confident", count: 3, percentage: 43 },
        { level: "Advanced", count: 2, percentage: 29 }
      ],
      frequency: [
        { frequency: "Regular", count: 4, percentage: 57 },
        { frequency: "Daily", count: 3, percentage: 43 }
      ],
      avgTimeSpent: 67,
      overallAvg: 54,
      topTasks: [
        { text: "Meeting Preparation", count: 5, percentage: 71 },
        { text: "Stakeholder Engagement", count: 4, percentage: 57 },
        { text: "Data Analysis & Reports", count: 2, percentage: 29 }
      ],
      topTools: [
        { text: "Pair Chat", count: 5, percentage: 71 },
        { text: "Other GenAI", count: 5, percentage: 71 },
        { text: "Transcribe", count: 4, percentage: 57 }
      ],
      topChallenges: [
        { text: "Accuracy Concerns", count: 5, percentage: 71 },
        { text: "Privacy Concerns", count: 4, percentage: 57 },
        { text: "Inconsistent Quality", count: 2, percentage: 29 }
      ],
      topSkills: [
        { text: "Presentation Skills", count: 5, percentage: 71 },
        { text: "Data Analysis", count: 4, percentage: 57 },
        { text: "Chart Generation", count: 4, percentage: 57 }
      ]
    },
    "Legal": {
      department: "Legal",
      totalResponses: 2,
      proficiency: [
        { level: "Beginner", count: 1, percentage: 50 },
        { level: "Advanced", count: 1, percentage: 50 }
      ],
      frequency: [
        { frequency: "Daily", count: 1, percentage: 50 },
        { frequency: "Never", count: 1, percentage: 50 }
      ],
      avgTimeSpent: 78,
      overallAvg: 54,
      topTasks: [
        { text: "Document Review", count: 2, percentage: 100 },
        { text: "Email Correspondence", count: 2, percentage: 100 }
      ],
      topTools: [
        { text: "Pair Chat", count: 1, percentage: 50 },
        { text: "Other GenAI", count: 1, percentage: 50 },
        { text: "Transcribe", count: 1, percentage: 50 }
      ],
      topChallenges: [
        { text: "Accuracy Concerns", count: 2, percentage: 100 },
        { text: "Privacy Concerns", count: 2, percentage: 100 }
      ],
      topSkills: [
        { text: "Template Creation", count: 1, percentage: 50 },
        { text: "Quality Checking", count: 1, percentage: 50 }
      ]
    },
    "Procurement": {
      department: "Procurement",
      totalResponses: 6,
      proficiency: [
        { level: "Basic", count: 4, percentage: 67 },
        { level: "Confident", count: 1, percentage: 17 },
        { level: "Advanced", count: 1, percentage: 17 }
      ],
      frequency: [
        { frequency: "Regular", count: 3, percentage: 50 },
        { frequency: "Daily", count: 2, percentage: 33 },
        { frequency: "Occasional", count: 1, percentage: 17 }
      ],
      avgTimeSpent: 69,
      overallAvg: 54,
      topTasks: [
        { text: "Email Correspondence", count: 5, percentage: 83 },
        { text: "Meeting Preparation", count: 3, percentage: 50 },
        { text: "Procurement Management", count: 3, percentage: 50 }
      ],
      topTools: [
        { text: "Pair Chat", count: 6, percentage: 100 },
        { text: "AIBots", count: 5, percentage: 83 },
        { text: "Other GenAI", count: 2, percentage: 33 }
      ],
      topChallenges: [
        { text: "Accuracy Concerns", count: 5, percentage: 83 },
        { text: "Privacy Concerns", count: 3, percentage: 50 },
        { text: "Inconsistent Quality", count: 2, percentage: 33 }
      ],
      topSkills: [
        { text: "Presentation Skills", count: 4, percentage: 67 },
        { text: "Template Creation", count: 2, percentage: 33 },
        { text: "Multi-step Prompting", count: 2, percentage: 33 }
      ]
    }
  };

  const [selectedDepartment, setSelectedDepartment] = useState<string>('Overall');
  const currentData = departmentData[selectedDepartment];

  // AI Usage data by department
  const aiUsageData: Record<string, AIUsageItem[]> = {
    "Overall": [
      { name: 'Using AI', value: 73, percentage: 68, color: '#22c55e' },
      { name: 'Not Using AI', value: 35, percentage: 32, color: '#ef4444' }
    ],
    "Digital Governance": [
      { name: 'Using AI', value: 16, percentage: 73, color: '#22c55e' },
      { name: 'Not Using AI', value: 6, percentage: 27, color: '#ef4444' }
    ],
    "People & Org": [
      { name: 'Using AI', value: 8, percentage: 44, color: '#22c55e' },
      { name: 'Not Using AI', value: 10, percentage: 56, color: '#ef4444' }
    ],
    "Finance": [
      { name: 'Using AI', value: 11, percentage: 48, color: '#22c55e' },
      { name: 'Not Using AI', value: 12, percentage: 52, color: '#ef4444' }
    ],
    "Strat Plans & Transformation": [
      { name: 'Using AI', value: 10, percentage: 77, color: '#22c55e' },
      { name: 'Not Using AI', value: 3, percentage: 23, color: '#ef4444' }
    ],
    "Comms & Marketing": [
      { name: 'Using AI', value: 9, percentage: 90, color: '#22c55e' },
      { name: 'Not Using AI', value: 1, percentage: 10, color: '#ef4444' }
    ],
    "Org Excellence": [
      { name: 'Using AI', value: 7, percentage: 100, color: '#22c55e' },
      { name: 'Not Using AI', value: 0, percentage: 0, color: '#ef4444' }
    ],
    "Partnerships & Engagement": [
      { name: 'Using AI', value: 6, percentage: 86, color: '#22c55e' },
      { name: 'Not Using AI', value: 1, percentage: 14, color: '#ef4444' }
    ],
    "Legal": [
      { name: 'Using AI', value: 1, percentage: 50, color: '#22c55e' },
      { name: 'Not Using AI', value: 1, percentage: 50, color: '#ef4444' }
    ],
    "Procurement": [
      { name: 'Using AI', value: 5, percentage: 83, color: '#22c55e' },
      { name: 'Not Using AI', value: 1, percentage: 17, color: '#ef4444' }
    ]
  };

  const currentAIUsage = aiUsageData[selectedDepartment];

  const COLORS: string[] = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Custom tooltip for pie charts
  const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const isFrequency = 'frequency' in data;
      const isLevel = 'level' in data;
      
      return (
        <div className="bg-white p-2 border border-gray-300 rounded shadow-lg text-xs">
          <p className="font-semibold">
            {isLevel ? data.level : isFrequency ? data.frequency : 'Unknown'}
          </p>
          <p className="text-blue-600">Count: {data.count}</p>
          <p className="text-green-600">Percentage: {data.percentage}%</p>
        </div>
      );
    }
    return null;
  };

  // Compact metric card with bars and full names
  const CompactMetricCard: React.FC<CompactMetricCardProps> = ({ title, data, icon, bgColor }) => (
    <div className={`${bgColor} rounded-lg p-2`}>
      <div className="flex items-center mb-2">
        <span className="text-sm mr-1">{icon}</span>
        <h4 className="text-xs font-bold text-gray-800">{title}</h4>
      </div>
      <div className="space-y-1">
        {data.slice(0, 3).map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-0.5">
              <span className="text-xs text-gray-700 mr-1 flex-1" title={item.text}>
                {item.text}
              </span>
              <span className="font-bold text-gray-800 text-xs ml-2">{item.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className={`h-1 rounded-full ${
                  index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-blue-500' : 'bg-blue-400'
                }`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // AI Adoption card
  const AIAdoptionCard: React.FC<AIAdoptionCardProps> = ({ aiUsage }) => {
    const adoptionRate = aiUsage.find(u => u.name === 'Using AI')?.percentage || 0;
    const usingCount = aiUsage.find(u => u.name === 'Using AI')?.value || 0;
    const totalCount = aiUsage.reduce((sum, item) => sum + item.value, 0);
    
    return (
      <div className="bg-white rounded-lg shadow p-2 text-center">
        <h4 className="text-xs font-bold text-gray-800 mb-1">AI Adoption</h4>
        <div className={`text-lg font-bold mb-1 ${adoptionRate === 100 ? 'text-green-600' : adoptionRate >= 90 ? 'text-green-500' : adoptionRate >= 70 ? 'text-yellow-500' : 'text-red-500'}`}>
          {adoptionRate}%
        </div>
        <div className="text-xs text-gray-600 mb-1">{usingCount}/{totalCount} people</div>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            className={`h-1 rounded-full ${adoptionRate === 100 ? 'bg-green-600' : adoptionRate >= 90 ? 'bg-green-500' : adoptionRate >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
            style={{ width: `${adoptionRate}%` }}
          />
        </div>
      </div>
    );
  };

  // Time gauge
  const TimeGauge: React.FC<TimeGaugeProps> = ({ deptTime, overallTime }) => {
    const difference = deptTime - overallTime;
    const isAbove = difference > 0;
    
    return (
      <div className="bg-white rounded-lg shadow p-2 text-center">
        <h4 className="text-xs font-bold text-gray-800 mb-1">Time vs Average</h4>
        <div className={`text-lg font-bold mb-1 ${isAbove ? 'text-red-600' : 'text-green-600'}`}>
          {deptTime}%
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 mb-1">
          <div
            className={`h-1 rounded-full ${isAbove ? 'bg-red-500' : 'bg-green-500'}`}
            style={{ width: `${Math.min(deptTime, 100)}%` }}
          />
        </div>
        <div className={`text-xs font-medium ${isAbove ? 'text-red-600' : 'text-green-600'}`}>
          {difference > 0 ? '+' : ''}{difference}% vs {overallTime}%
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen bg-gray-100 p-4 flex items-center justify-center overflow-hidden">
      {/* 16:9 Container */}
      <div className="w-full max-w-8xl bg-gray-50 rounded-xl shadow-2xl overflow-hidden" style={{ aspectRatio: '16/9', height: 'min(92vh, calc(92vw * 9 / 16))' }}>
        <div className="h-full p-2 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-3 text-white mb-2 flex-shrink-0" style={{ height: '60px' }}>
            <div className="h-full flex justify-between items-center">
              <div>
                <h1 className="text-xl font-bold">{currentData.department}</h1>
                <p className="text-xs opacity-90">{currentData.totalResponses} responses</p>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold">{currentData.avgTimeSpent}%</div>
                  <div className="text-xs opacity-80">Time Spent</div>
                </div>
                <div>
                  <div className="text-lg font-bold">
                    {currentData.proficiency.find(p => p.level === 'Basic')?.percentage || 0}%
                  </div>
                  <div className="text-xs opacity-80">Basic Level</div>
                </div>
                <div>
                  <div className="text-lg font-bold">
                    {currentAIUsage.find(u => u.name === 'Using AI')?.percentage || 0}%
                  </div>
                  <div className="text-xs opacity-80">AI Adoption</div>
                </div>
                <div>
                  <div className="text-lg font-bold">
                    {currentData.frequency.find(f => f.frequency === 'Daily')?.percentage || 0}%
                  </div>
                  <div className="text-xs opacity-80">Daily Users</div>
                </div>
              </div>
            </div>
          </div>

          {/* Department Navigation */}
          <div className="bg-white rounded-lg shadow p-2 mb-2 flex-shrink-0" style={{ height: '80px' }}>
            <div className="h-full grid grid-cols-10 gap-1">
              {Object.keys(departmentData).map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`h-full rounded text-xs font-medium transition-all flex items-center justify-center px-1 ${
                    selectedDepartment === dept
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="text-center leading-tight">
                    {dept === "Overall" ? (
                      <>
                        <div>🏢</div>
                        <div>Overall</div>
                      </>
                    ) : dept === "Strat Plans & Transformation" ? (
                      <>
                        <div>Strategy &</div>
                        <div>Transform</div>
                      </>
                    ) : dept === "Comms & Marketing" ? (
                      <>
                        <div>Comms &</div>
                        <div>Marketing</div>
                      </>
                    ) : dept === "Digital Governance" ? (
                      <>
                        <div>Digital</div>
                        <div>Governance</div>
                      </>
                    ) : dept === "People & Org" ? (
                      <>
                        <div>People &</div>
                        <div>Org</div>
                      </>
                    ) : dept === "Org Excellence" ? (
                      <>
                        <div>Org</div>
                        <div>Excellence</div>
                      </>
                    ) : dept === "Partnerships & Engagement" ? (
                      <>
                        <div>Partnerships</div>
                        <div>& Engage</div>
                      </>
                    ) : (
                      <div>{dept}</div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Dashboard */}
          <div className="flex-1 grid grid-cols-12 gap-3 min-h-0">
            
            {/* Left Column - Charts and Gauges */}
            <div className="col-span-5 flex flex-col gap-2 min-h-0">
              
              {/* Pie Charts */}
              <div className="grid grid-cols-2 gap-2" style={{ height: '180px' }}>
                <div className="bg-white rounded-lg shadow p-2">
                  <h3 className="text-xs font-bold text-gray-800 mb-1 text-center">AI Proficiency</h3>
                  <ResponsiveContainer width="100%" height={120}>
                    <PieChart>
                      <Pie
                        data={currentData.proficiency}
                        cx="50%"
                        cy="50%"
                        outerRadius={45}
                        fill="#8884d8"
                        dataKey="count"
                        label={({percentage}) => `${percentage}%`}
                        labelStyle={{fontSize: '9px', fontWeight: 'bold', fill: '#ffffff'}}
                      >
                        {currentData.proficiency.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Legend */}
                  <div className="flex flex-wrap justify-center gap-1 text-xs">
                    {currentData.proficiency.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className="w-2 h-2 rounded-full mr-1" 
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className="text-xs text-gray-600">{item.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-2">
                  <h3 className="text-xs font-bold text-gray-800 mb-1 text-center">Usage Frequency</h3>
                  <ResponsiveContainer width="100%" height={120}>
                    <PieChart>
                      <Pie
                        data={currentData.frequency}
                        cx="50%"
                        cy="50%"
                        outerRadius={45}
                        fill="#8884d8"
                        dataKey="count"
                        label={({percentage}) => `${percentage}%`}
                        labelStyle={{fontSize: '9px', fontWeight: 'bold', fill: '#ffffff'}}
                      >
                        {currentData.frequency.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Legend */}
                  <div className="flex flex-wrap justify-center gap-1 text-xs">
                    {currentData.frequency.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className="w-2 h-2 rounded-full mr-1" 
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className="text-xs text-gray-600">{item.frequency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gauges and Tasks */}
              <div className="flex-1 grid grid-cols-7 gap-2 min-h-0">
                <div className="col-span-2 flex flex-col gap-1">
                  <TimeGauge 
                    deptTime={currentData.avgTimeSpent} 
                    overallTime={currentData.overallAvg} 
                  />
                  <AIAdoptionCard aiUsage={currentAIUsage} />
                </div>
                
                <div className="col-span-5 bg-white rounded-lg shadow p-2">
                  <div className="flex items-center mb-2">
                    <span className="text-sm mr-2">⏱️</span>
                    <h3 className="text-xs font-bold text-gray-800">Top Tasks</h3>
                  </div>
                  <div className="space-y-1">
                    {currentData.topTasks.map((task, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-xs text-gray-700 mr-1 flex-1" title={task.text}>
                            {task.text}
                          </span>
                          <span className="text-xs font-bold text-gray-800 ml-2">{task.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${
                              index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-blue-500' : 'bg-blue-400'
                            }`}
                            style={{ width: `${task.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Metrics and Insights */}
            <div className="col-span-7 grid grid-cols-3 gap-2 min-h-0" style={{ gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr 1fr 2fr' }}>
              
              {/* Top Left - Tools Used */}
              <CompactMetricCard 
                title="Tools Used" 
                data={currentData.topTools} 
                icon="🛠️" 
                bgColor="bg-green-50"
              />
              
              {/* Top Middle - Challenges */}
              <CompactMetricCard 
                title="Challenges" 
                data={currentData.topChallenges} 
                icon="⚠️" 
                bgColor="bg-red-50"
              />

              {/* Top Right - Key Insights (spans 2 rows) */}
              <div className="bg-blue-50 rounded-lg p-2 row-span-2">
                <h4 className="text-xs font-bold text-gray-800 mb-2 flex items-center">
                  <span className="mr-1">💡</span>
                  Key Insights for {currentData.department}
                </h4>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Readiness Level</h5>
                    <p className="text-gray-700 text-xs leading-tight">
                      {selectedDepartment === 'Overall' 
                        ? "🟡 Mixed readiness - 56% at basic level, need targeted training"
                        : currentData.proficiency.find(p => p.level === 'Basic')?.percentage >= 70 
                        ? "🔴 High training need - majority at basic level" 
                        : currentData.proficiency.find(p => ['Advanced', 'Expert'].includes(p.level))?.percentage >= 20
                        ? "🟢 Good foundation - some advanced users"
                        : "🟡 Mixed levels - moderate training need"}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Time Impact</h5>
                    <p className="text-gray-700 text-xs leading-tight">
                      {selectedDepartment === 'Overall'
                        ? "🟡 Moderate impact - average 58% time spent on AI-suitable tasks"
                        : currentData.avgTimeSpent > currentData.overallAvg + 10
                        ? "🔴 High opportunity - above average time spent"
                        : currentData.avgTimeSpent < currentData.overallAvg - 10
                        ? "🟢 Efficient - below average time spent"
                        : "🟡 Moderate opportunity - near average"}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">AI Adoption</h5>
                    <p className="text-gray-700 text-xs leading-tight">
                      {selectedDepartment === 'Overall'
                        ? "🟡 Good adoption - 68% using AI, room for improvement"
                        : currentAIUsage.find(u => u.name === 'Using AI')?.percentage === 100
                        ? "🟢 Excellent - 100% adoption rate"
                        : currentAIUsage.find(u => u.name === 'Using AI')?.percentage >= 90
                        ? "🟢 Very High - strong adoption"
                        : currentAIUsage.find(u => u.name === 'Using AI')?.percentage >= 70
                        ? "🟡 Good - room for improvement"
                        : "🔴 Low - needs adoption drive"}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Top Priority</h5>
                    <p className="text-gray-700 text-xs leading-tight">
                      {selectedDepartment === 'Overall'
                        ? <>Focus on <span className="font-bold">accuracy concerns</span> and <span className="font-bold">prompting skills</span></>
                        : <>Focus on <span className="font-bold">{currentData.topSkills[0]?.text}</span> training</>}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Top Tasks to Tackle</h5>
                    <p className="text-gray-700 text-xs leading-tight">
                      {selectedDepartment === 'Overall'
                        ? <>Prioritize <span className="font-bold">Data Analysis</span> (49%) and <span className="font-bold">Meeting Prep</span> (46%)</>
                        : <>Prioritize <span className="font-bold">{currentData.topTasks[0]?.text}</span> ({currentData.topTasks[0]?.percentage}%) and <span className="font-bold">{currentData.topTasks[1]?.text}</span> ({currentData.topTasks[1]?.percentage}%)</>}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Left - Skills Needed */}
              <div className="col-span-2">
                <CompactMetricCard 
                  title="Skills Needed" 
                  data={currentData.topSkills} 
                  icon="🎓" 
                  bgColor="bg-purple-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDashboard;