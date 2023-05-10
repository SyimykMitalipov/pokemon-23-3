import React, { useEffect, useRef } from 'react'

const Pagination = ({ page, count, handleNext, handlePrev }) => {
  // const button = document.querySelector('button');

  const buttonRef = useRef(null);

useEffect(() => {
  window.addEventListener('click', (event)  => {
    if(event.target === buttonRef.current) {
      window.scrollTo({
        top: buttonRef,
      })
    }
  })
}, [ buttonRef ])

console.log(buttonRef.current, 'buttonRef')
  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      {page} / {count}

      <button  onClick={handleNext}>Next</button>
    <button ref={buttonRef}>Scroll to Top</button>
    </div>
  )
}

export default Pagination