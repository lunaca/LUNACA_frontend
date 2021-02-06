import React from 'react'

export const Services = () => {
  return (
    <section className='layout-pt-md layout-pb-md'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-5 col-lg-8 col-md-10'>
            <div className='sectionHeading -lg'>
              <p className='sectionHeading__subtitle'>Services</p>
              <h2 className='sectionHeading__title'>A Wide Range of Services</h2>
            </div>
          </div>
        </div>

        <div data-anim-wrap className='row x-gap-60 y-gap-48 layout-pt-md'>
          <div className='col-lg-4 col-md-6'>
            <div className='serviceCard'>
              <div className='serviceCard__content'>
                <div className='d-flex align-items-center ml-minus-4'>
                  <div
                    data-anim-child='img-right cover-dark-2'
                    className='px-20 py-20 bg-white shadow-light rounded-full'
                  >
                    <i className='size-md str-width-md text-accent' data-feather='edit'></i>
                  </div>
                </div>

                <h3 className='serviceCard__title text-2xl fw-500 tacking-none mt-32'>Web Design</h3>

                <p className='serviceCard__text mt-16'>
                  Called fruitful male female make greater forth man a seas for winged which life yielding his above to
                  myriads of huge lichens days.
                </p>

                <div className='text-black mt-24'>
                  <p className=''>Logo & Identity</p>
                  <p className='mt-8'>Full Stack Development</p>
                  <p className='mt-8'>Copywriting & SEO</p>
                  <p className='mt-8'>Mobile & App Development</p>
                  <p className='mt-8'>Art Direction</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='serviceCard'>
              <div className='serviceCard__content'>
                <div className='d-flex align-items-center ml-minus-4'>
                  <div
                    data-anim-child='img-right cover-dark-2'
                    className='px-20 py-20 bg-white shadow-light rounded-full'
                  >
                    <i className='size-md str-width-md text-accent' data-feather='sliders'></i>
                  </div>
                </div>

                <h3 className='serviceCard__title text-2xl fw-500 tacking-none mt-32'>Branding</h3>

                <p className='serviceCard__text mt-16'>
                  Called fruitful male female make greater forth man a seas for winged which life yielding his above to
                  myriads of huge lichens days.
                </p>

                <div className='text-black mt-24'>
                  <p className=''>Logo & Identity</p>
                  <p className='mt-8'>Full Stack Development</p>
                  <p className='mt-8'>Copywriting & SEO</p>
                  <p className='mt-8'>Mobile & App Development</p>
                  <p className='mt-8'>Art Direction</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='serviceCard'>
              <div className='serviceCard__content'>
                <div className='d-flex align-items-center ml-minus-4'>
                  <div
                    data-anim-child='img-right cover-dark-2'
                    className='px-20 py-20 bg-white shadow-light rounded-full'
                  >
                    <i className='size-md str-width-md text-accent' data-feather='feather'></i>
                  </div>
                </div>

                <h3 className='serviceCard__title text-2xl fw-500 tacking-none mt-32'>Mobile Apps</h3>

                <p className='serviceCard__text mt-16'>
                  Called fruitful male female make greater forth man a seas for winged which life yielding his above to
                  myriads of huge lichens days.
                </p>

                <div className='text-black mt-24'>
                  <p className=''>Logo & Identity</p>
                  <p className='mt-8'>Full Stack Development</p>
                  <p className='mt-8'>Copywriting & SEO</p>
                  <p className='mt-8'>Mobile & App Development</p>
                  <p className='mt-8'>Art Direction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
