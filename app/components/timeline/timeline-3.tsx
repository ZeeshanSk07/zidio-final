'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './timeline-2.css';

const Timeline_3 = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className="flex md:pl-10 space-x-3 md:space-x-10 mb-12">
            <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="relative"
          >
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              fill="#2980b9"
              version="1.1"
              width="24"
              data-view-component="true"
              className="octicon octicon-briefcase text-white"
            >
              <path d="M10,18c0-1.3-0.8-2.4-2-2.8v-3.4c1.2-0.4,2-1.5,2-2.8c0-1.7-1.3-3-3-3S4,7.3,4,9c0,1.3,0.8,2.4,2,2.8v3.4    c-1.2,0.4-2,1.5-2,2.8s0.8,2.4,2,2.8v3.4c-1.2,0.4-2,1.5-2,2.8c0,1.7,1.3,3,3,3s3-1.3,3-3c0-1.3-0.8-2.4-2-2.8v-3.4    C9.2,20.4,10,19.3,10,18z"/>
	          <path d="M31,10H15c-0.6,0-1-0.4-1-1s0.4-1,1-1h16c0.6,0,1,0.4,1,1S31.6,10,31,10z"/>
	          <path d="M31,19H15c-0.6,0-1-0.4-1-1s0.4-1,1-1h16c0.6,0,1,0.4,1,1S31.6,19,31,19z"/>
	          <path d="M31,28H15c-0.6,0-1-0.4-1-1s0.4-1,1-1h16c0.6,0,1,0.4,1,1S31.6,28,31,28z"/>
              <rect width="24" height="24" fillOpacity="0"/>
            </svg>
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#2980b9] to-[#56d364]"
          >
            
          </motion.div>
        </div>
        <div className="md:w-10/12 mb-24">
          <motion.div
            initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.4, duration:0.3}} viewport={{once:false}} className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" 
            style={{ transitionDelay: '200ms' }}
          >Zidio Development's Journey</motion.div>
          {/* high quality software */}
          {/* <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[28px] md:text-[40px] mb-7 font-medium text-white"
            style={{ transitionDelay: '300ms' }}
          >
            <span className="text-[#2980b9]">Accelerate high-quality software development.</span>
            Our AI-powered platform drives innovation with tools that boost developer velocity.
          </motion.h3> */}
          <br />
          <br />
          
          <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}<div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.4, duration:0.3}} viewport={{once:false}}   className="absolute w-1 timeline-color h-full left-1/2 transform -translate-x-1/2"></motion.div>

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
       </div>
        {/* end */}
      </div>
        </div>

    );



}

export default Timeline_3;