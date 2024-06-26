import React from 'react';
import { useEffect } from 'react'

const Kundeninfo = ({H}) =>{

  useEffect(() => {
     
  },[H])
  
  return(
        <div className='grid md:col-span-3 md:-mt-10 mt-8 col-span-6 md:mx-0 mx-4 border border-black'>
          <p className='inset-x -mt-3 ml-4 bg-gray-100 px-1 w-20'>Kundeninfo</p>
            <div className='w-full grid md:grid-cols-2 grid-cols-1 items-center justify-items-center'>
              <div className='w-full h-full ml-2'>
                <div className='w-5/6 mb-1 float-left'>ID: <div className='w-3/4 float-right'>{H.ID}</div></div>
                <div className='w-5/6 my-1 float-left'>Kunde: <div className='w-3/4 float-right'>{(H.hasOwnProperty('Name1')) ? H.Name1 : H.Kunden_ID}</div></div>
                <div className='w-5/6 my-1 float-left'>Adresse: <div className='w-3/4 float-right'>{H.Strasse}
                  <br />{H.Plz} {H.Ort}</div>
                </div>
                <div className='w-5/6 float-left'>Tel: <div className='w-3/4 float-right'>{H.Telefon}</div></div>
              </div>
              <div className='w-full h-full'>
                <div className='w-5/6'> {H.Memo}</div>
              </div>
            </div>
        </div>
        )
}

export default Kundeninfo;