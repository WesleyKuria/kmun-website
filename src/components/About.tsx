
import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About KMUN</h2>
          <div className="h-1 w-20 bg-[#009EDB] mx-auto rounded"></div>
        </div>
        <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
          <p className="leading-relaxed">
            Kenya Model United Nations is the PREMIER youth leadership platform that has produced excellent young diplomats for over 20 YEARS who have ubiquitously served in Kenya and around the world. We are affiliated to and work closely with the United Nations Information Service, at the United Nations Offices Nairobi.
          </p>
          <p className="leading-relaxed">
            We have a vast outreach to over 5000 young, smart and energetic university students and students in institutions of higher learning who are drivers of change with a mindset of structured development and critical solution-making capabilities through deliberative and value-based Diplomacy.
          </p>
          <p className="leading-relaxed">
            With an outreach of 30+ chapters, KMUN is proudly the oldest and largest student-run society in Kenya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
