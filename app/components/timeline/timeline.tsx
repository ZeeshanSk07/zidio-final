import React from 'react';
import './timeline.css';

type Props = {}

const Timeline = (props: Props) => {
  return (
    <div className="timeline py-10">
      <div className="container mx-auto px-4">
        {/* Timeline Items */}
        <div className="timeline-item flex justify-between items-center mb-8">
          <div className="timeline-icon bg-blue-600 text-white p-3 rounded-full">
            <i className="fas fa-globe"></i>
          </div>
          <div className="timeline-content bg-white shadow-lg rounded-lg p-5 ml-6">
            <h3 className="text-lg font-bold">Company Founded</h3>
            <p className="text-gray-600">Zidio Development was founded in 2015 by a group of software engineers with a passion for technology and innovation.</p>
          </div>
        </div>

        <div className="timeline-item flex justify-between items-center mb-8 flex-row-reverse">
          <div className="timeline-icon bg-green-600 text-white p-3 rounded-full">
            <i className="fas fa-code"></i>
          </div>
          <div className="timeline-content bg-white shadow-lg rounded-lg p-5 mr-6">
            <h3 className="text-lg font-bold">First Product Launch</h3>
            <p className="text-gray-600">In 2016, Zidio Development launched its first product, a mobile app that revolutionized the way people interact with technology.</p>
          </div>
        </div>

        <div className="timeline-item flex justify-between items-center mb-8">
          <div className="timeline-icon bg-yellow-600 text-white p-3 rounded-full">
            <i className="fas fa-users"></i>
          </div>
          <div className="timeline-content bg-white shadow-lg rounded-lg p-5 ml-6">
            <h3 className="text-lg font-bold">Strategic Partnership</h3>
            <p className="text-gray-600">In 2017, Zidio Development formed a strategic partnership with a leading tech company to expand its reach and capabilities.</p>
          </div>
        </div>

        <div className="timeline-item flex justify-between items-center mb-8 flex-row-reverse">
          <div className="timeline-icon bg-purple-600 text-white p-3 rounded-full">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="timeline-content bg-white shadow-lg rounded-lg p-5 mr-6">
            <h3 className="text-lg font-bold">Record Growth</h3>
            <p className="text-gray-600">In 2018, Zidio Development experienced record growth, doubling its revenue and expanding its team.</p>
          </div>
        </div>

        <div className="timeline-item flex justify-between items-center mb-8">
          <div className="timeline-icon bg-red-600 text-white p-3 rounded-full">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="timeline-content bg-white shadow-lg rounded-lg p-5 ml-6">
            <h3 className="text-lg font-bold">New Product Launch</h3>
            <p className="text-gray-600">In 2019, Zidio Development launched a new product that revolutionized the industry and solidified its position as a leader in technology.</p>
          </div>
        </div>

        <div className="timeline-item flex justify-between items-center mb-8 flex-row-reverse">
          <div className="timeline-icon bg-indigo-600 text-white p-3 rounded-full">
            <i className="fas fa-globe"></i>
          </div>
          <div className="timeline-content bg-white shadow-lg rounded-lg p-5 mr-6">
            <h3 className="text-lg font-bold">Global Expansion</h3>
            <p className="text-gray-600">In 2020, Zidio Development expanded its operations to new markets around the world, establishing itself as a global player in the tech industry.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;
