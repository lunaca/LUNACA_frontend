import React from 'react'

export const PortfolioCards = () => {
  return (
    <section className='layout-pt-xs layout-pb-md'>
      <div className='fancy-grid -col-3 -container'>
        <div className='fancy-grid__item'>
          <a
            data-cursor-icon='arrow-right'
            data-anim-wrap
            className='portfolioCard -type-1 -hover'
            href='portfolio-single-1.html'
          >
            <div className='portfolioCard__img'>
              <div data-anim-child='img-right -cover-dark-1' className='portfolioCard__img__inner'>
                <div className='ratio ratio-3:4 bg-image js-lazy' data-bg='img/projects/vertical/1.jpg'></div>
              </div>
            </div>

            <div className='portfolioCard__content pt-24'>
              <div data-split='lines' data-anim-child='split-lines delay-6'>
                <p className='portfolioCard__category leading-md text-dark'>Web Design</p>
              </div>

              <div data-split='lines' data-anim-child='split-lines delay-8'>
                <h3 className='portfolioCard__title leading-md fw-500 text-2xl mt-8'>Slumber</h3>
              </div>
            </div>
          </a>
        </div>

        <div className='fancy-grid__item'>
          <a
            data-cursor-icon='arrow-right'
            data-anim-wrap
            className='portfolioCard -type-1 -hover'
            href='portfolio-single-2.html'
          >
            <div className='portfolioCard__img'>
              <div data-anim-child='img-right -cover-dark-1' className='portfolioCard__img__inner'>
                <div className='ratio ratio-3:4 bg-image js-lazy' data-bg='img/projects/vertical/2.jpg'></div>
              </div>
            </div>

            <div className='portfolioCard__content pt-24'>
              <div data-split='lines' data-anim-child='split-lines delay-6'>
                <p className='portfolioCard__category leading-md text-dark'>Branding</p>
              </div>

              <div data-split='lines' data-anim-child='split-lines delay-8'>
                <h3 className='portfolioCard__title leading-md fw-500 text-2xl mt-8'>Apple Tonik</h3>
              </div>
            </div>
          </a>
        </div>

        <div className='fancy-grid__item'>
          <a
            data-cursor-icon='arrow-right'
            data-anim-wrap
            className='portfolioCard -type-1 -hover'
            href='portfolio-single-3.html'
          >
            <div className='portfolioCard__img'>
              <div data-anim-child='img-right -cover-dark-1' className='portfolioCard__img__inner'>
                <div className='ratio ratio-3:4 bg-image js-lazy' data-bg='img/projects/vertical/3.jpg'></div>
              </div>
            </div>

            <div className='portfolioCard__content pt-24'>
              <div data-split='lines' data-anim-child='split-lines delay-6'>
                <p className='portfolioCard__category leading-md text-dark'>Development</p>
              </div>

              <div data-split='lines' data-anim-child='split-lines delay-8'>
                <h3 className='portfolioCard__title leading-md fw-500 text-2xl mt-8'>Black Sneakers</h3>
              </div>
            </div>
          </a>
        </div>

        <div className='fancy-grid__item'>
          <a
            data-cursor-icon='arrow-right'
            data-anim-wrap
            className='portfolioCard -type-1 -hover'
            href='portfolio-single-4.html'
          >
            <div className='portfolioCard__img'>
              <div data-anim-child='img-right -cover-dark-1' className='portfolioCard__img__inner'>
                <div className='ratio ratio-3:4 bg-image js-lazy' data-bg='img/projects/vertical/4.jpg'></div>
              </div>
            </div>

            <div className='portfolioCard__content pt-24'>
              <div data-split='lines' data-anim-child='split-lines delay-6'>
                <p className='portfolioCard__category leading-md text-dark'>Branding</p>
              </div>

              <div data-split='lines' data-anim-child='split-lines delay-8'>
                <h3 className='portfolioCard__title leading-md fw-500 text-2xl mt-8'>Steel Bottle</h3>
              </div>
            </div>
          </a>
        </div>

        <div className='fancy-grid__item'>
          <a
            data-cursor-icon='arrow-right'
            data-anim-wrap
            className='portfolioCard -type-1 -hover'
            href='portfolio-single-5.html'
          >
            <div className='portfolioCard__img'>
              <div data-anim-child='img-right -cover-dark-1' className='portfolioCard__img__inner'>
                <div className='ratio ratio-3:4 bg-image js-lazy' data-bg='img/projects/vertical/5.jpg'></div>
              </div>
            </div>

            <div className='portfolioCard__content pt-24'>
              <div data-split='lines' data-anim-child='split-lines delay-6'>
                <p className='portfolioCard__category leading-md text-dark'>Web Design</p>
              </div>

              <div data-split='lines' data-anim-child='split-lines delay-8'>
                <h3 className='portfolioCard__title leading-md fw-500 text-2xl mt-8'>Whisper Pink</h3>
              </div>
            </div>
          </a>
        </div>

        <div className='fancy-grid__item'>
          <a
            data-cursor-icon='arrow-right'
            data-anim-wrap
            className='portfolioCard -type-1 -hover'
            href='portfolio-single-6.html'
          >
            <div className='portfolioCard__img'>
              <div data-anim-child='img-right -cover-dark-1' className='portfolioCard__img__inner'>
                <div className='ratio ratio-3:4 bg-image js-lazy' data-bg='img/projects/vertical/6.jpg'></div>
              </div>
            </div>

            <div className='portfolioCard__content pt-24'>
              <div data-split='lines' data-anim-child='split-lines delay-6'>
                <p className='portfolioCard__category leading-md text-dark'>Development</p>
              </div>

              <div data-split='lines' data-anim-child='split-lines delay-8'>
                <h3 className='portfolioCard__title leading-md fw-500 text-2xl mt-8'>Summer Time</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
