import React, { useEffect, useState } from 'react'

const Handelsp = ({ITEMHP, popUp, dHandelspartner}) => {


  useEffect(()=>{
  }, [])

  return (
    <div onClick={() => popUp(true)} className='w-full grid md:grid-cols-12 grid-cols-3 items-center justify-items-center py-1'>
      <div className='bg-gray-100 w-full md:col-span-3 col-span-1 pl-2'>{ITEMHP.Suchbegriff}</div>
      <div className='border-x border-slate-300 bg-gray-100 w-full md:col-span-2 col-span-1 pl-2'>{ITEMHP.Name1}</div>
      <div className='w-full md:col-span-2 col-span-1 pl-2'>{ITEMHP.Name2}</div>
      <div className='border-x border-slate-300 bg-gray-100 w-full col-span-3 pl-2 md:block hidden'>{ITEMHP.Strasse},<br/>{ITEMHP.Plz} {ITEMHP.Ort}</div>
      <div className='md:border-0 border-t border-slate-300 bg-gray-100 w-full md:col-span-2 col-span-3 pl-2'>{ITEMHP.Telefon}</div>
    </div>
  )
}

export default Handelsp