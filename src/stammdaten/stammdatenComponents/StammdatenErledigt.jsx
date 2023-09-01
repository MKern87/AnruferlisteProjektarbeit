import React from 'react'
import { useState, useEffect } from 'react'

const StammdatenErledigt = ({setVlue}) => {
  
  
  return (
    <div className="md:block md:w-1/2 hidden mtoggle w-full col-span-2 md:mt-0 mt-12 border border-black h-full text-sm relative">
      <p className="ml-4 absolute inset-x -mt-3 bg-gray-200 px-1">Erledigt</p>
      <div className="flex flex-col items-start ml-10 my-2 mt-8">
        <label className="my-1" htmlFor="default-radio-1">
        <input id='erledigt' value={1} type="radio" name='erledigt' onChange={() => setVlue(1)} className="text-blue-600 focus:ring-blue-500" />
        Ja</label>
        <label className="my-1" htmlFor="default-radio-2">
        <input id='erledigt' value={0} type="radio" name='erledigt' onChange={() => setVlue(0)} className="text-blue-600 focus:ring-blue-500" />
        Nein</label>
        <label className="my-1" htmlFor="default-radio-3">
        <input id='erledigt' value={2} type="radio" name='erledigt' onChange={() => setVlue(2)} className="text-blue-600 focus:ring-blue-500" />
        Alle</label>
      </div>
    </div>
  )
}

export default StammdatenErledigt