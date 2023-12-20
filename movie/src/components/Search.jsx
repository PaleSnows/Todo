import React from 'react'
import {CiSearch} from 'react-icons/ci'

const Search = () => {
  return (
    <div className='flex items-start'>
        <input className='p-1 m-2 bg-black border text-white w-[250px]' placeholder='Search' type='text'/>
        <button className='text-gray-100 pt-1 pr-1 mt-3'><CiSearch/></button>
    </div>
  )
}

export default Search