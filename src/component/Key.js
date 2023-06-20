import React from 'react'
import key from "../asset/key-img.svg"

const Key = () => {
  return (
    <div className='key-con'>
        <div className='key-con-inner'>
        <div className='key-img-con'>
        <img src={key} alt='...' className='img-fluid d-block'></img>
        </div>
        <div className='img-text'>Sign-in options</div>
        </div>
    </div>
  )
}

export default Key