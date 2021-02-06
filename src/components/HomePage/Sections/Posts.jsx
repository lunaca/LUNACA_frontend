import React from 'react'

export const Posts = () => {
  return (
    <section className='layout-pt-lg layout-pb-lg'>
      <div className='container'>
        <div className='row justify-content-between align-items-end'>
          <div className='col-md-6'>
            <div className='sectionHeading -md'>
              <p className='sectionHeading__subtitle'>our journal</p>
              <h2 className='sectionHeading__title'>Latest news</h2>
            </div>
          </div>

          <div className='col-md-auto col-sm-12 sm:mt-24'>
            <a href='#' className='button -md -outline-black text-black'>
              view all
            </a>
          </div>
        </div>
        <div className='row x-gap-48 y-gap-40 layout-pt-sm'>
          <div className='col-lg-4 col-md-6'>
            <div data-anim-wrap className='blogCard -type-1 -hover'>
              <a className='blogCard__img' href='blog-article.html'>
                <div data-anim-child='img-right cover-dark-1 delay-1'>
                  <div className='ratio ratio-4:3 bg-image js-lazy' data-bg='img/blog/thumbnail/1.jpg'></div>
                </div>
              </a>

              <div className='blogCard__content mt-24'>
                <div data-anim-child='slide-up delay-6' className='blogCard__info text-dark leading-md text-sm'>
                  <a className='fw-400 mr-4' href='#'>
                    Typography
                  </a>{' '}
                  -<p className='d-inline-block ml-4'>May 28, 2020</p>
                </div>

                <div data-anim-child='slide-up delay-7'>
                  <h4 className='blogCard__title text-2xl leading-lg fw-500 mt-12'>
                    <a href='blog-article.html'>Mobile UI Design: 7 Basic Typography Rules</a>
                  </h4>
                </div>

                <div data-anim-child='slide-up delay-8' className='mt-12'>
                  <a href='blog-article.html' className='button -icon text-black'>
                    Read More
                    <i className='icon size-xs str-width-md' data-feather='arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div data-anim-wrap className='blogCard -type-1 -hover'>
              <a className='blogCard__img' href='blog-article.html'>
                <div data-anim-child='img-right cover-dark-1 delay-1'>
                  <div className='ratio ratio-4:3 bg-image js-lazy' data-bg='img/blog/thumbnail/2.jpg'></div>
                </div>
              </a>

              <div className='blogCard__content mt-24'>
                <div data-anim-child='slide-up delay-6' className='blogCard__info text-dark leading-md text-sm'>
                  <a className='fw-400 mr-4' href='#'>
                    Graphic Design
                  </a>{' '}
                  -<p className='d-inline-block ml-4'>May 22, 2020</p>
                </div>

                <div data-anim-child='slide-up delay-7'>
                  <h4 className='blogCard__title text-2xl leading-lg fw-500 mt-12'>
                    <a href='blog-article.html'>Graphic Design: Useful Tips and Best Practices</a>
                  </h4>
                </div>

                <div data-anim-child='slide-up delay-8' className='mt-12'>
                  <a href='blog-article.html' className='button -icon text-black'>
                    Read More
                    <i className='icon size-xs str-width-md' data-feather='arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div data-anim-wrap className='blogCard -type-1 -hover'>
              <a className='blogCard__img' href='blog-article.html'>
                <div data-anim-child='img-right cover-dark-1 delay-1'>
                  <div className='ratio ratio-4:3 bg-image js-lazy' data-bg='img/blog/thumbnail/3.jpg'></div>
                </div>
              </a>

              <div className='blogCard__content mt-24'>
                <div data-anim-child='slide-up delay-6' className='blogCard__info text-dark leading-md text-sm'>
                  <a className='fw-400 mr-4' href='#'>
                    Web Design
                  </a>{' '}
                  -<p className='d-inline-block ml-4'>April 19, 2020</p>
                </div>

                <div data-anim-child='slide-up delay-7'>
                  <h4 className='blogCard__title text-2xl leading-lg fw-500 mt-12'>
                    <a href='blog-article.html'>Review of Popular Web Design Trends in 2020</a>
                  </h4>
                </div>

                <div data-anim-child='slide-up delay-8' className='mt-12'>
                  <a href='blog-article.html' className='button -icon text-black'>
                    Read More
                    <i className='icon size-xs str-width-md' data-feather='arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
