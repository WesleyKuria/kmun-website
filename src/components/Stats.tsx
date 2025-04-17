
import React from 'react';

const Stats = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "20+", label: "Years of Excellence", color: "text-[#009EDB]" },
            { value: "5000+", label: "Young Diplomats", color: "text-[#0082B3]" },
            { value: "30+", label: "University Chapters", color: "text-[#00B4D8]" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
