import React from 'react'
import { useState, useEffect } from 'react'

const StammdatenDatum = ({setstartDate, setendDate, setaktuelleBerichte}) => {


  const [aktuelleB, setaktuelleB] = useState(false);

  //////// Alle Berichte (aktuelle Berichte) ////////
  
  const berichteAktuell = ({ab}) => {
    if (ab == true) {
      setaktuelleBerichte(!ab)
      setstartDate('')
      setendDate('')
    }else{
      setaktuelleBerichte(!ab) 
      setstartDate(new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now())); setendDate(new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now()));
    }
    }


  return (
    <div className="md:block hidden mtoggle w-full md:mt-0 mt-4 col-span-2 border border-black h-full relative">
      <p className="ml-4 text-sm absolute inset-x -mt-3 bg-gray-200 px-1">Datum</p>
      <div className='w-full flex flex-col items-center justify-center'>
      <span className="w-full text-sm  flex flex-row justify-center my-2 md:mt-6 mt-4">Von: 
        <input id='minDate' type='date' onChange={() => setstartDate(document.getElementById('minDate').value)} className="items-center justify-items-center ml-2 border border-black rounded-sm bg-slate-100 p-1"/>
      </span>
      <span className="w-full text-sm flex flex-row justify-center my-2">Bis: 
        <input id='maxDate' type='date' onChange={() => setendDate(document.getElementById('maxDate').value)} className="items-center justify-items-center ml-4 border border-black rounded-sm bg-slate-100 p-1"/>
      </span>
      <span className="w-full flex flex-row my-2 text-sm justify-center">
        <input defaultChecked={false} onChange={() => berichteAktuell({ab: aktuelleB})} type="checkbox" />
        <p className="pl-1">aktuelle Berichte</p>
      </span>
      </div>
    </div>
  )
}

export default StammdatenDatum