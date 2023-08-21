import React from 'react'

const KundenKatFilter = () => {
  return (
    <div className="w-full md:col-span-4 col-span-4 grid grid-cols-2 gap-1 md:mt-2 mt-4 h-full pb-4 items-start justify-items-start">
      <div className="w-full col-span-1 border border-black relative mt-2 ">
        <p className="mb-2 ml-4 absolute inset-x -mt-3 bg-gray-200 px-1">Kunden filtern</p>
        <div  className="flex flex-row items-center md:justify-center justify-center mt-6 mb-4">
          <label className="flex flex-row items-center justify-center" for="radio-1">
          <input id='radio-1' type="radio" name='kunde' className=" text-blue-600 focus:ring-blue-500" />
          &nbsp;&nbsp;Ja</label>&nbsp;&nbsp;&nbsp;
          <label className="flex flex-row items-center justify-center" for="radio-2">
          <input id='radio-2' type="radio" name='kunde' className=" text-blue-600 focus:ring-blue-500" />
          &nbsp;&nbsp;Nein </label>
        </div>
      </div>
      <div className="w-full col-span-1 border border-black relative mt-2">
        <p className="mb-2 ml-4 absolute inset-x -mt-3 bg-gray-200 px-1">Kategorie filtern</p>
        <div className="flex flex-row items-center md:justify-center justify-center mt-6 mb-4">
          <label className="flex flex-row items-center justify-center" for="default-radio-1">
          <input id='default-radio-1' type="radio" name='kategorie' className="text-blue-600 focus:ring-blue-500" />
          &nbsp;&nbsp;Ja</label>&nbsp;&nbsp;&nbsp;
          <label className="flex flex-row items-center justify-center" for="default-radio-2">
          <input id='default-radio-2' type="radio" name='kategorie' className="text-blue-600 focus:ring-blue-500" />
          &nbsp;&nbsp;Nein</label>
        </div>
      </div>
    </div>
  )
}

export default KundenKatFilter