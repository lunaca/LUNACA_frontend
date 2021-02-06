import React from 'react'

export const Swiper = () => {
  return (
    <section
      data-speed='1200'
      data-autoplay-delay='2900'
      className='sliderMain -type-3 js-sliderMain-type-3 sm:layout-mt-headerBar'
    >
      <div className='container-fluid h-full px-0 sm:px-20'>
        <div className='row sm:justify-content-center h-full'>
          <div className='col-xl-3 offset-xl-2 col-lg-4 offset-lg-1 col-md-5 offset-md-1 col-sm-9'>
            <div className='slider__content__wrapper sm:text-center h-full z-3'>
              <div className='slider__content  is-active  js-slider-content'>
                <div data-split='lines'>
                  <p className='slider__subtitle text-sm uppercase tracking-md leading-md mb-32 js-subtitle'>
                    Design Inspiration
                  </p>
                </div>
                <div data-split='lines' className='mr-minus-col-2 sm:mr-0'>
                  <h1 className='slider__title fw-700 leading-xs js-title'>
                    Design + techonology = transformative experiences
                  </h1>
                </div>
                <div className='slider__button overflow-hidden mt-32'>
                  <div className='js-button py-4'>
                    <a href='#' className='button -md -black text-white'>
                      get in touch
                    </a>
                  </div>
                </div>
              </div>

              <div className='slider__content  js-slider-content'>
                <div data-split='lines'>
                  <p className='slider__subtitle text-sm uppercase tracking-md leading-md mb-32 js-subtitle'>
                    Creating what matters
                  </p>
                </div>
                <div data-split='lines' className='mr-minus-col-2 sm:mr-0'>
                  <h1 className='slider__title fw-700 leading-xs js-title'>
                    Transporting ideas in your head to reality.
                  </h1>
                </div>
                <div className='slider__button overflow-hidden mt-32'>
                  <div className='js-button py-4'>
                    <a href='#' className='button -md -black text-white'>
                      get in touch
                    </a>
                  </div>
                </div>
              </div>

              <div className='slider__content  js-slider-content'>
                <div data-split='lines'>
                  <p className='slider__subtitle text-sm uppercase tracking-md leading-md mb-32 js-subtitle'>
                    Design Inspiration
                  </p>
                </div>
                <div data-split='lines' className='mr-minus-col-2 sm:mr-0'>
                  <h1 className='slider__title fw-700 leading-xs js-title'>
                    Make your hard problems simple with amazing software.
                  </h1>
                </div>
                <div className='slider__button overflow-hidden mt-32'>
                  <div className='js-button py-4'>
                    <a href='#' className='button -md -black text-white'>
                      View Our Work
                    </a>
                  </div>
                </div>
              </div>

              <div className='slider__content  js-slider-content'>
                <div data-split='lines'>
                  <p className='slider__subtitle text-sm uppercase tracking-md leading-md mb-32 js-subtitle'>
                    Creating what matters
                  </p>
                </div>
                <div data-split='lines' className='mr-minus-col-2 sm:mr-0'>
                  <h1 className='slider__title fw-700 leading-xs js-title'>Explosive, reliable, & affordable.</h1>
                </div>
                <div className='slider__button overflow-hidden mt-32'>
                  <div className='js-button py-4'>
                    <a href='#' className='button -md -black text-white'>
                      get in touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col layout-pr-headerBar lg:pr-0 col-lg-7 col-md-6 swiper-col'>
            <div className='swiper-container h-100vh'>
              <div className='swiper-wrapper z-2'>
                <div className='swiper-slide overflow-hidden'>
                  <div
                    className='slider__img'
                    data-swiper-parallax='150'
                    data-parallax='0.7'
                    data-swiper-parallax-opacity='0'
                  >
                    <div
                      data-parallax-target
                      className='bg-image swiper-lazy js-image'
                      data-background='img/headers/home-1-slider/test.jpg'
                    ></div>
                  </div>

                  <div className='slider__img__cover js-image-cover'></div>

                  <div className='slider__img__bg bg-dark-1'></div>
                </div>

                <div className='swiper-slide overflow-hidden'>
                  <div
                    className='slider__img'
                    data-swiper-parallax='150'
                    data-parallax='0.7'
                    data-swiper-parallax-opacity='0'
                  >
                    <div
                      data-parallax-target
                      className='bg-image swiper-lazy js-image'
                      data-background='img/headers/home-1-slider/test2.png'
                    ></div>
                  </div>

                  <div className='slider__img__bg bg-dark-1'></div>
                </div>

                <div className='swiper-slide overflow-hidden'>
                  <div
                    className='slider__img'
                    data-swiper-parallax='150'
                    data-parallax='0.7'
                    data-swiper-parallax-opacity='0'
                  >
                    <div
                      data-parallax-target
                      className='bg-image swiper-lazy js-image'
                      data-background='img/headers/home-1-slider/test4.png'
                    ></div>
                  </div>

                  <div className='slider__img__bg bg-dark-1'></div>
                </div>

                <div className='swiper-slide overflow-hidden'>
                  <div
                    className='slider__img'
                    data-swiper-parallax='150'
                    data-parallax='0.7'
                    data-swiper-parallax-opacity='0'
                  >
                    <div
                      data-parallax-target
                      className='bg-image swiper-lazy js-image'
                      data-background='img/headers/home-1-slider/test5.jpg'
                    ></div>
                  </div>

                  <div className='slider__img__bg bg-dark-1'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='slider__navs js-slider-nav js-ui'>
          <div className='navButton'>
            <button type='button' className='navButton__item button -outline-black text-black js-prev'>
              <i className='icon' data-feather='arrow-left'></i>
            </button>
            <button type='button' className='navButton__item button -outline-black text-black mt-12 js-next'>
              <i className='icon' data-feather='arrow-right'></i>
            </button>
          </div>
        </div>
      </div>

      <div className='ui-element -bottom-left sm:d-none js-ui'>
        <button type='button' className='ui-element__scroll text-black js-ui-scroll-button'>
          scroll down
          <i className='icon' data-feather='arrow-down'></i>
        </button>
      </div>
    </section>
  )
}
