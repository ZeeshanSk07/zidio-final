import React from 'react';
import './timeline-2.css';


const Timeline_2 = () => {
  return (
    <div className="py-12">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Zidio Development's Journey
      </h2>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute w-1 timeline-color h-full left-1/2 transform -translate-x-1/2">
        </div>

        {/* Timeline Item 1 */}
        <div className="mb-10 flex items-center w-full">
          <div className="w-5/12"></div>
          <div className="relative w-2/12 text-center">
            <div className="timeline-dot bg-blue-600"></div>
          </div>
          <div className="w-5/12 px-4 py-4 text-right">
            <h4 className="mb-3 font-bold text-lg text-white">Company Founded</h4>
            <p className="text-gray-600">In 2015, Zidio Development was founded by passionate engineers.</p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="mb-10 flex items-center w-full">
          <div className="w-5/12 px-4 py-4 text-left">
            <h4 className="mb-3 font-bold text-lg text-white">First Product Launch</h4>
            <p className="text-gray-600">In 2016, we launched a revolutionary product that changed mobile interaction.</p>
          </div>
          <div className="relative w-2/12 text-center">
            <div className="timeline-dot bg-blue-600"></div>
          </div>
          <div className="w-5/12"></div>
        </div>

        {/* Timeline Item 3 */}
        <div className="mb-10 flex items-center w-full">
          <div className="w-5/12"></div>
          <div className="relative w-2/12 text-center">
            <div className="timeline-dot bg-blue-600"></div>
          </div>
          <div className="w-5/12 px-4 py-4 text-right">
            <h4 className="mb-3 font-bold text-lg text-white">Strategic Partnership</h4>
            <p className="text-gray-600">In 2017, we formed a key partnership with a tech giant to enhance capabilities.</p>
          </div>
        </div>

        {/* Timeline Item 4 */}
        <div className="mb-10 flex items-center w-full">
          <div className="w-5/12 px-4 py-4 text-left">
            <h4 className="mb-3 font-bold text-lg text-white">Record Growth</h4>
            <p className="text-gray-600">2018 was a year of record growth, expanding both revenue and team size.</p>
          </div>
          <div className="relative w-2/12 text-center">
            <div className="timeline-dot bg-blue-600"></div>
          </div>
          <div className="w-5/12"></div>
        </div>

        {/* Timeline Item 5 */}
        <div className="mb-10 flex items-center w-full">
          <div className="w-5/12"></div>
          <div className="relative w-2/12 text-center">
            <div className="timeline-dot bg-blue-600"></div>
          </div>
          <div className="w-5/12 px-4 py-4 text-right">
            <h4 className="mb-3 font-bold text-lg text-white">Global Expansion</h4>
            <p className="text-gray-600">In 2020, Zidio expanded its operations globally.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline_2;
