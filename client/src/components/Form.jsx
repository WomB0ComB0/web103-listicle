import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './Form.scss'
const Form = () => {
  return (
    <form className={`wrapper`}>
      <div className='search wrapper'>
        <input 
          type="search" 
          id="search-bar" 
          placeholder="Search for a movie"
          value={``} 
        />
      </div>
    </form>
  )
}
export default Form
