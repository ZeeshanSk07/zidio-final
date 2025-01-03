import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero-section/Hero';
import StickyNav from './components/Navbar/StickyNav';
import Productivity from './components/Productivity/Productivity';
import Collaboration from './components/Collaboration/Collaboration';
import Security from './components/Security/Security';
import Globe from './components/Footer/Globe';
import Footer from './components/Footer/Footer';
import Timeline_3 from './components/timeline/timeline-3';
import Support from './components/support/support';
import New from './new';
import TeamProfile from "./components/team-profile/team-profile";
import Testimonials, { Testimonial } from './components/testimonial/testimonial';



export default function Home() {
  
  return (
    <>
      <div className='relative z-50'>
        <div className='absolute'>
          <StickyNav/>
        </div>
      </div>
      <div>
        <div className='overflow-hidden'>
          <div className='relative'>
            <Image className='absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image' width='4377' height='4377' src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp" alt="img" />
          </div>
          <div className='hero-section px-3 '>
            <Hero/>
          </div>
          {/* <New /> */}
          
          <div className='home-campaign-productivity px-3 pt-8 overflow-hidden'>
          
          <Timeline_3/>
          </div>
          
          <div id='productivity' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <Productivity/>
          </div>
          <div id='collaboration' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
            <Collaboration/>
          </div>

          <div id='testimonials' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
          <Testimonials/>
          </div>
          
          <div id='support' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
            <Support/>
          </div>
          <div id="teamProfile" className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
            <TeamProfile/>
            </div>
          <div id='security' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
            <Security/>
          </div>
         <Globe/>
          <div className='max-w-[1280px] mx-auto relative z-[2]  px-5'>
            <ul className='lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1'>
              <li><sup id="footnote-1">1</sup> The Total Economic Impact™ Of Zidio Enterprise Cloud and Advanced Security, a commissioned study conducted by Forrester Consulting, 2022. Results are for a composite organization based on interviewed customers.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    
  );
}
