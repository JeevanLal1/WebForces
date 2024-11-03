import React from 'react';
import { FileText, Layout, Search, ChevronRight } from 'lucide-react';

const assignments = [
  {
    id: 1,
    title: 'Test (13 exercises)',
    dueIn: '2 days',
    icon: FileText,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 2,
    title: 'Prototyping',
    dueIn: '5 days',
    icon: Layout,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 3,
    title: 'Do the research',
    dueIn: '9 days',
    icon: Search,
    color: 'bg-blue-100 text-blue-600',
  },
];

export default function Assignments() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assignments.map((assignment) => (
        <div
          key={assignment.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
        >
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg ${assignment.color}`}>
              <assignment.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium dark:text-white">{assignment.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Due in {assignment.dueIn}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300" />
          </div>
        </div>
      ))}
    </div>
  );
}