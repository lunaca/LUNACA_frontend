import React from 'react'

export const Footer = () => {
  return (
    <footer className='footer -type-1 bg-dark-1'>
      <div className='container'>
        <div className='footer__top'>
          <div className='row y-gap-48 justify-content-between'>
            <div className='col-lg-auto col-sm-12'>
              <a href='home-1.html' className='footer__logo text-white'>
                Stukram.
              </a>
            </div>

            <div className='col-lg-3 col-sm-6'>
              <h4 className='text-xl fw-500 text-white'>Studio</h4>

              <div className='footer__content text-base text-light mt-16 sm:mt-12'>
                <p>Studio Stukram 1910 Gateway Road, Portland, Oregon 97230</p>
                <p className='mt-8'>hello@stukram.com</p>
                <p className='mt-8'>+1 202 555 0171</p>
              </div>
            </div>

            <div className='col-lg-auto col-sm-4'>
              <h4 className='text-xl fw-500 text-white'>Links</h4>

              <div className='footer__content text-base text-light mt-16 sm:mt-12'>
                <div>
                  <a href='blog-1.html' className='button -underline'>
                    Blog
                  </a>
                </div>
                <div>
                  <a href='about-1.html' className='button -underline mt-4'>
                    Abous Us
                  </a>
                </div>
                <div>
                  <a href='#' className='button -underline mt-4'>
                    Shop
                  </a>
                </div>
                <div>
                  <a href='contact-1.html' className='button -underline mt-4'>
                    Contacts
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-auto col-auto'>
              <h4 className='text-xl fw-500 text-white'>Follow us</h4>

              <div className='social -bordered mt-16 sm:mt-12'>
                <a className='social__item text-white border-light' href='#'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a className='social__item text-white border-light' href='#'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a className='social__item text-white border-light' href='#'>
                  <i className='fab fa-youtube'></i>
                </a>
                <a className='social__item text-white border-light' href='#'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__bottom -light'>
          <div className='row'>
            <div className='col'>
              <div className='footer__copyright'>
                <p className='text-light'>@ 2020, Stukram. Made with passion by Krellion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
