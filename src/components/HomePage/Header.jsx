import React, { useState } from 'react'
import lightLogo from '../../assets/img/logo/logo-light.png'
import darkLogo from '../../assets/img/logo/logo-dark.png'
export const Header = () => {
  const [isActive, setIsActive] = useState()
  return (
    <header className='header -light is-sticky -sticky-light js-header'>
      <div className='header__bar'>
        <div className='header__logo js-header-logo'>
          <img className='header__logo__dark' src={darkLogo} alt='logo' />
        </div>

        <div className='header__menu js-header-menu'>
          <button onClick={() => setIsActive(true)} type='button' className='nav-button-open js-nav-open'>
            Open Menu
          </button>
        </div>
      </div>
      {isActive && (
        <nav className='nav js-nav'>
          <div className='nav__inner js-nav-inner is-active'>
            <div className='nav__bg js-nav-bg'></div>

            <div className='nav__container'>
              <div className='nav__header'>
                <button type='button' className='nav-button-back js-nav-back'>
                  <i className='icon' data-feather='arrow-left-circle'></i>
                </button>

                <button onClick={() => setIsActive(false)} type='button' className='nav-btn-close js-nav-close'>
                  Close
                </button>
              </div>

              <div className='nav__content'>
                <div className='nav__content__left'>
                  <div className='navList__wrap'>
                    <ul className='navList js-navList'>
                      <li>
                        <a href='home-1-classic.html'>Classic Menu</a>
                      </li>

                      <li className='menu-item-has-children'>
                        <a>Main Pages</a>

                        <ul className='subnav-list'>
                          <li>
                            <a href='home-1.html'>Main Slider</a>
                          </li>
                          <li>
                            <a href='home-2.html'>Main Dark</a>
                          </li>
                          <li>
                            <a href='home-3.html'>Simple Slider</a>
                          </li>
                          <li>
                            <a href='home-4.html'>Bold Light</a>
                          </li>
                          <li>
                            <a href='home-5.html'>Static Header Dark</a>
                          </li>
                          <li>
                            <a href='home-6.html'>Personal</a>
                          </li>
                          <li>
                            <a href='projectSlider-1.html'>Project Slider</a>
                          </li>
                        </ul>
                      </li>

                      <li className='menu-item-has-children'>
                        <a>Inner Pages</a>

                        <ul className='subnav-list'>
                          <li className='menu-item-has-children'>
                            <a>About</a>

                            <ul className='subnav-list'>
                              <li>
                                <a href='about-1.html'>About 1</a>
                              </li>
                              <li>
                                <a href='about-2.html'>About 2</a>
                              </li>
                            </ul>
                          </li>

                          <li className='menu-item-has-children'>
                            <a>Services</a>

                            <ul className='subnav-list'>
                              <li>
                                <a href='services-1.html'>Services 1</a>
                              </li>
                              <li>
                                <a href='services-2.html'>Services 2</a>
                              </li>
                            </ul>
                          </li>

                          <li className='menu-item-has-children'>
                            <a>404</a>

                            <ul className='subnav-list'>
                              <li>
                                <a href='404-light.html'>404 Light</a>
                              </li>
                              <li>
                                <a href='404-dark.html'>404 Dark</a>
                              </li>
                            </ul>
                          </li>

                          <li className='menu-item-has-children'>
                            <a>Contact</a>

                            <ul className='subnav-list'>
                              <li>
                                <a href='contact-1.html'>Contact 1</a>
                              </li>
                              <li>
                                <a href='contact-2.html'>Contact 2</a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href='team.html'>Team</a>
                          </li>
                          <li>
                            <a href='pricing.html'>Pricing Plans</a>
                          </li>
                          <li>
                            <a href='clients.html'>Clients</a>
                          </li>
                        </ul>
                      </li>

                      <li className='menu-item-has-children'>
                        <a>Portfolio</a>

                        <ul className='subnav-list'>
                          <li>
                            <a href='vertical-projects.html'>Vertical Projects</a>
                          </li>
                          <li>
                            <a href='grid-simple-2-col.html'>Simple 2 Columns</a>
                          </li>
                          <li>
                            <a href='grid-masonry-2-col.html'>Masonry 2 Columns</a>
                          </li>
                          <li>
                            <a href='grid-masonry-3-col.html'>Masonry 3 Columns</a>
                          </li>
                          <li>
                            <a href='grid-masonry-4-col.html'>Masonry 4 Columns</a>
                          </li>
                          <li>
                            <a href='grid-fancy-2-col.html'>Fancy 2 Columns</a>
                          </li>
                          <li>
                            <a href='grid-fancy-3-col.html'>Fancy 3 Columns</a>
                          </li>
                        </ul>
                      </li>

                      <li className='menu-item-has-children'>
                        <a>Works</a>

                        <ul className='subnav-list'>
                          <li>
                            <a href='portfolio-single-1.html'>Project 1</a>
                          </li>
                          <li>
                            <a href='portfolio-single-2.html'>Project 2</a>
                          </li>
                          <li>
                            <a href='portfolio-single-3.html'>Project 3</a>
                          </li>
                          <li>
                            <a href='portfolio-single-4.html'>Project 4</a>
                          </li>
                          <li>
                            <a href='portfolio-single-5.html'>Project 5</a>
                          </li>
                          <li>
                            <a href='portfolio-single-6.html'>Project 6</a>
                          </li>
                        </ul>
                      </li>

                      <li className='menu-item-has-children'>
                        <a>Blog</a>

                        <ul className='subnav-list'>
                          <li>
                            <a href='blog-1.html'>Blog List</a>
                          </li>
                          <li>
                            <a href='blog-2.html'>Blog 2 cols</a>
                          </li>
                          <li>
                            <a href='blog-fancy-3-col.html'>Blog Fancy 3 cols</a>
                          </li>
                          <li>
                            <a href='blog-article.html'>Blog List Single</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='nav__content__right'>
                  <div className='nav__info'>
                    <div className='nav__info__item js-navInfo-item'>
                      <h5 className='text-sm tracking-none fw-500'>Address</h5>

                      <div className='nav__info__content text-lg text-white mt-16'>
                        <p>Studio Stukram 1910 Gateway Road, Portland, Oregon 97230</p>
                      </div>
                    </div>

                    <div className='nav__info__item js-navInfo-item'>
                      <h5 className='text-sm tracking-none fw-500'>Socials</h5>

                      <div className='nav__info__content text-lg text-white mt-16'>
                        <a href='#'>Behance</a>
                        <a href='#'>Dribbble</a>
                        <a href='#'>Facebook</a>
                        <a href='#'>Twitter</a>
                      </div>
                    </div>

                    <div className='nav__info__item js-navInfo-item'>
                      <h5 className='text-sm tracking-none fw-500'>Contact Us</h5>

                      <div className='nav__info__content text-lg text-white mt-16'>
                        <a href='#'>hello@stukram.com</a>
                        <a href='#'>+1 202 555 0171</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
