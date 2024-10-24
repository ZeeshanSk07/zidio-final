import './timeline-1.css';

import React from 'react';

type Props = {}

const Timeline_1 = (props: Props) => {
  return (
    <div className="timeline py-10 relative">
    <div className="container mx-auto px-4">
      {/* Vertical line */}
      <div className="absolute w-1 timeline-color h-full left-1/2 transform -translate-x-1/2"></div>

      {/* Timeline Items */}
      <div className="timeline-item mb-10 flex items-center justify-between w-full">
        <div className="w-5/12 text-right">
          <div className="timeline-content bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-lg font-bold">Company Founded</h3>
            <p className="text-gray-600">Zidio Development was founded in 2015 by a group of software engineers with a passion for technology and innovation.</p>
          </div>
        </div>
        <div className="timeline-dot bg-blue-600"></div>
        <div className="w-5/12"></div>
      </div>

      <div className="timeline-item mb-10 flex items-center justify-between w-full">
        <div className="w-5/12"></div>
        <div className="timeline-dot bg-green-600"></div>
        <div className="w-5/12 text-left">
          <div className="timeline-content bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-lg font-bold">First Product Launch</h3>
            <p className="text-gray-600">In 2016, Zidio Development launched its first product, a mobile app that revolutionized the way people interact with technology.</p>
          </div>
        </div>
      </div>

      <div className="timeline-item mb-10 flex items-center justify-between w-full">
        <div className="w-5/12 text-right">
          <div className="timeline-content bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-lg font-bold">Strategic Partnership</h3>
            <p className="text-gray-600">In 2017, Zidio Development formed a strategic partnership with a leading tech company to expand its reach and capabilities.</p>
          </div>
        </div>
        <div className="timeline-dot bg-yellow-600"></div>
        <div className="w-5/12"></div>
      </div>

      <div className="timeline-item mb-10 flex items-center justify-between w-full">
        <div className="w-5/12"></div>
        <div className="timeline-dot bg-purple-600"></div>
        <div className="w-5/12 text-left">
          <div className="timeline-content bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-lg font-bold">Record Growth</h3>
            <p className="text-gray-600">In 2018, Zidio Development experienced record growth, doubling its revenue and expanding its team.</p>
          </div>
        </div>
      </div>

      <div className="timeline-item mb-10 flex items-center justify-between w-full">
        <div className="w-5/12 text-right">
          <div className="timeline-content bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-lg font-bold">New Product Launch</h3>
            <p className="text-gray-600">In 2019, Zidio Development launched a new product that revolutionized the industry and solidified its position as a leader in technology.</p>
          </div>
        </div>
        <div className="timeline-dot bg-red-600"></div>
        <div className="w-5/12"></div>
      </div>

      <div className="timeline-item mb-10 flex items-center justify-between w-full">
        <div className="w-5/12"></div>
        <div className="timeline-dot bg-indigo-600"></div>
        <div className="w-5/12 text-left">
          <div className="timeline-content bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-lg font-bold">Global Expansion</h3>
            <p className="text-gray-600">In 2020, Zidio Development expanded its operations to new markets around the world, establishing itself as a global player in the tech industry.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Timeline_1;
