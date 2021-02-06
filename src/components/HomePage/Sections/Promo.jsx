import React from 'react'

export const Promo = () => {
  return (
    <section className='layout-pt-md layout-pb-md'>
      <div className='container-fluid px-0'>
        <div data-anim-wrap className='row no-gutters align-items-center'>
          <div className='col-lg-6 z-1'>
            <div data-anim-child='img-right cover-white delay-1'>
              <div className='ratio ratio-1:1' data-parallax='0.7'>
                <div data-parallax-target className='bg-image js-lazy' data-bg='img/backgrounds/7.jpg'></div>
              </div>
            </div>
          </div>

          <div className='col-xl-3 col-lg-4 z-2 ml-80 md:ml-0 md:mt-48'>
            <div className='sectionHeading -xl md:container pt-16'>
              <div data-anim-child='slide-up delay-8'>
                <p className='sectionHeading__subtitle'>Culture</p>
              </div>
              <div
                data-anim-child='slide-up delay-9'
                className='ml-minus-col-1 lg:ml-minus-lg mr-minus-col-2 md:ml-0 md:mr-0'
              >
                <h2 className='sectionHeading__title mt-48 md:mt-24'>
                  Approach
                  <br />
                  The Unknown
                </h2>
              </div>
              <div data-anim-child='slide-up delay-10'>
                <p className='mt-56 lg:mt-40 md:mt-20'>
                  Beginning them their of first over said greater gathered hath fill stars spirit. You're. Morning.
                  Great. First dry hath, years. Called days firmament green form they're. And. Unto divided winged.
                </p>
              </div>
              <div data-anim-child='slide-up delay-11'>
                <a href='about-1.html' className='button -md -outline-black text-black mt-56 lg:mt-48 md:mt-32'>
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
