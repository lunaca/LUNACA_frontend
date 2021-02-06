import React from 'react'

export const Testimonials = () => {
  return (
    <section className='layout-pt-xl layout-pb-lg'>
      <div data-parallax='0.7' className='bg-fill-image overlay-black-md'>
        <div data-parallax-target className='bg-image js-lazy' data-bg='img/backgrounds/8.jpg' />
      </div>

      <div className='container'>
        <div
          data-cursor
          data-cursor-label='DRAG'
          className='overflow-hidden js-section-slider'
          data-slider-col='base-1 lg-1 md-1 sm-1'
          data-pagination
          data-loop
        >
          <div className='pagination -light js-pagination pt-4 mb-48'></div>

          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className='row justify-content-center'>
                <div className='col-lg-8 col-md-10'>
                  <div className='testimonials text-center'>
                    <p className='testimonials__comment text-3xl md:text-2xl sm:text-xl fw-600 leading-xl text-white'>
                      Nor themselves introduced themselves unsatiable devonshire get. They why quit gay cold rose deal
                      park. One same they four did ask busy. Reserved opinions fat him nay position.
                    </p>

                    <div className='testimonials__author mt-48'>
                      <div className='size-xl mx-auto mb-20'>
                        <div
                          className='bg-image rounded-full swiper-lazy'
                          data-background='img/testimonials/1.jpg'
                        ></div>
                      </div>

                      <h5 className='text-lg capitalize text-white fw-600'>Gareth Grey</h5>
                      <p className='capitalize text-light'>graphic designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='swiper-slide'>
              <div className='row justify-content-center'>
                <div className='col-lg-8 col-md-10'>
                  <div className='testimonials text-center'>
                    <p className='testimonials__comment text-3xl md:text-2xl sm:text-xl fw-600 leading-xl text-white'>
                      Green great Called is so rule evening. For appear winged brought divided. Life fruitful together
                      she&#39;d sixth them evening abundantly herb. Subdue yielding seas open called living life.
                    </p>

                    <div className='testimonials__author mt-48'>
                      <div className='size-xl mx-auto mb-20'>
                        <div
                          className='bg-image rounded-full swiper-lazy'
                          data-background='img/testimonials/2.jpg'
                        ></div>
                      </div>

                      <h5 className='text-lg capitalize text-white fw-600'>Alyce Hackett</h5>
                      <p className='capitalize text-light'>developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='swiper-slide'>
              <div className='row justify-content-center'>
                <div className='col-lg-8 col-md-10'>
                  <div className='testimonials text-center'>
                    <p className='testimonials__comment text-3xl md:text-2xl sm:text-xl fw-600 leading-xl text-white'>
                      Kind isn&#39;t had. Their whose seasons fowl light created they&#39;re void is female fowl he
                      second shall that from, firmament you over had brought herb void cattle image form creeping.
                    </p>

                    <div className='testimonials__author mt-48'>
                      <div className='size-xl mx-auto mb-20'>
                        <div
                          className='bg-image rounded-full swiper-lazy'
                          data-background='img/testimonials/3.jpg'
                        ></div>
                      </div>

                      <h5 className='text-lg capitalize text-white fw-600'>Maegan Leach</h5>
                      <p className='capitalize text-light'>UX designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
