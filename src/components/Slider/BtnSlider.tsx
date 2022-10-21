import React from 'react'

import GetIcon from '../GetIcon'

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <div>
      <button
        onClick={moveSlide}
        className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      >
        {direction === 'next' ? (
          <GetIcon icon="ChevronRightIcon" size={'2.5rem'} />
        ) : (
          <GetIcon icon="ChevronLeftIcon" size={'2.5rem'} />
        )}
      </button>
    </div>
  )
}

export default BtnSlider
