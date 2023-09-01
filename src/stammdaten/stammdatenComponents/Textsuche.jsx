import React from 'react'
import { useState, useEffect } from 'react'

const Textsuche = ({setSearchd}) => {


  return (
    <div className="w-full mb-2 md:col-span-4 col-span-4 relative border h-full border-black px-2">
      <p className="ml-2 text-sm absolute inset-x -mt-3 bg-gray-200 px-1 ">Textsuche</p>
      <input type='text' className="w-full border border-black bg-slate-100 rounded-sm md:mt-4 mt-6 p-1" placeholder='Textsuche' onChange={(e) => setSearchd(e.target.value)} />
    </div>
  )
}

export default Textsuche