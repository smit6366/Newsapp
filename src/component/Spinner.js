import React from 'react'
import loading from './Loader.gif'

const Spinner =()=> {
 
    return (
      <div className='text-center'>
        <img src={loading} alt=''>
        </img>
      </div>
    )
  }

export default Spinner