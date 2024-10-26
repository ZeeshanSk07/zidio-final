import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer relative pt-14 break-words '>
      <div className='max-w-[1280px] mx-auto relative z-[2] overflow-hidden'>
        <div className='flex flex-col lg:flex-row py-10 mb-8 space-x-6 px-4'>
            <div className='mb-12 px-2'>
              
              <div className='text-white'>
                <h2 className='mt-6 font-semibold'>Subscribe to our newsletter</h2>
                <p className="text-[14px] text-[#7d8590] mb-6 ">Get product updates, company news, and more.</p>
                <a href="" className='mb-6 px-6 py-3 text-[17px] font-semibold border-[0.5px] border-gray-400 rounded-lg'>Subscribe</a>
              </div>
            </div>
            <div className='lg:flex w-full justify-between grid md:grid-cols-4 grid-cols-2 gap-6'>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Product</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">Features</a></li>
                    <li className='mb-4'><a href="">Security</a></li>
                    <li className='mb-4'><a href="">Team</a></li>
                    <li className='mb-4'><a href="">Enterprise</a></li>
                    <li className='mb-4'><a href="">Custom Stories</a></li>
                    <li className='mb-4'><a href="">The ReadME Project</a></li>
                    <li className='mb-4'><a href="">Pricing</a></li>
                    <li className='mb-4'><a href="">Resources</a></li>
                    <li className='mb-4'><a href="">Roadmap</a></li>
                    <li className='mb-4'><a href="">Compare Zidio</a></li>
                </ul>
              </div>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Platform</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">Developer API</a></li>
                    <li className='mb-4'><a href="">Partners</a></li>
                    <li className='mb-4'><a href="">Electron</a></li>
                    <li className='mb-4'><a href="">ZidioDesktop</a></li>
                </ul>
              </div>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Product</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">Docs</a></li>
                    <li className='mb-4'><a href="">Community Forum</a></li>
                    <li className='mb-4'><a href="">Professional Services</a></li>
                    <li className='mb-4'><a href="">Premium Support</a></li>
                    <li className='mb-4'><a href="">Skill</a></li>
                    <li className='mb-4'><a href="">Status</a></li>
                    <li className='mb-4'><a href="">Contact Zidio</a></li>
                </ul>
              </div>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Company</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">About</a></li>
                    <li className='mb-4'><a href="">Blog</a></li>
                    <li className='mb-4'><a href="">Careers</a></li>
                    <li className='mb-4'><a href="">Press</a></li>
                    <li className='mb-4'><a href="">Inclusion</a></li>
                    <li className='mb-4'><a href="">Social Impact</a></li>
                    <li className='mb-4'><a href="">Shop</a></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <div className='bg-[#161b22]'>
        <div className='max-w-[1280px] mx-auto text-[12px] md:flex flex-row-reverse py-6 justify-between items-center px-4'>
          <ul className='flex items-center max-md:mb-4  '>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/twitch.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/tiktok.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
          </ul>
          <ul className='flex items-center mb-4 sm:mb-0 text-[#7d8590] flex-wrap' >
            <li className="mr-3 ">© 2023 Zidio, Inc.</li>
            <li className='mr-3 '><a href="">Terms</a></li>
            <li className='mr-3 '><a href="">Privacy (Updated 08/2022)</a></li>
            <li className='mr-3 '><a href="">Sitemap</a></li>
            <li className='mr-3 '><a href="">What is zidio?</a></li>
          </ul>
        </div>
      </div>
      </div>

  )
}

export default Footer