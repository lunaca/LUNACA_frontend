/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import './layout.css'
import '../assets/css/main.css'
import '../assets/css/vendors.css'
import { BackButton } from './HomePage/BackButton'
import { Loader } from './HomePage/Loader'
import { Swiper } from './HomePage/Swiper'
import { AboutExcerpt } from './HomePage/Sections/AboutExcerpt'
import { PortfolioCards } from './HomePage/Sections/PortfolioCards'
import { Services } from './HomePage/Sections/Services'
import { Clients } from './HomePage/Sections/Clients'
import { Testimonials } from './HomePage/Sections/Testimonials'
import { Promo } from './HomePage/Sections/Promo'
import { Footer } from './HomePage/Footer'
import { Header } from './HomePage/Header'

const Layout = ({ children }) => {
  return (
    <div className='barba-container'>
      <Loader />
      <BackButton />
      <main className=''>
        <Header />
        <Swiper />
        <AboutExcerpt />
        <PortfolioCards />
        <Services />
        <Promo />
        <Clients />
        <Testimonials />
        <Footer />
      </main>
    </div>
  )
}

export default Layout
