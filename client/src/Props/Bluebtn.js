import React from 'react'
import "./blueBtn.scss"

const Bluebtn = (Props) => {
  return (
    <>
        <div className="button_section">
            <button onClick={Props.PostData} className='btn blue'>{Props.btn}</button>
        </div>
    </>
  )
}

export default Bluebtn
