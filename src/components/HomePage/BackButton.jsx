import React from 'react'

export const BackButton = () => {
  return (
    <div className='backButton js-backButton'>
      <span className='backButton__bg' />
      <div className='backButton__icon__wrap'>
        <i className='backButton__button js-top-button' data-feather='arrow-up' />
      </div>
    </div>
  )
}
