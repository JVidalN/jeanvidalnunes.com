import React from 'react'

const Footer = ({ currentYear }) => {
  return (
    <div>
      <p className='text-center mt-6 py-3 border-t-2 border-th-bg-button text-th-description'>Copyright {currentYear}© Jean Vidal</p>
    </div>
  )
}
export default Footer
