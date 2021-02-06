import React from 'react'

export const Loader = () => {
  return (
    <>
      <div className='preloader js-preloader'>
        <div className='preloader__bg' />

        <div className='preloader__progress'>
          <div className='preloader__progress__inner' />
        </div>
      </div>

      <div className='cursor js-cursor'>
        <div className='cursor__wrapper'>
          <div className='cursor__follower js-follower' />
          <div className='cursor__label js-label' />
          <div className='cursor__icon js-icon' />
        </div>
      </div>
    </>
  )
}
