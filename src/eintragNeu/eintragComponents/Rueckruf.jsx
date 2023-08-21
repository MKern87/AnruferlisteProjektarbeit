import React, { useState } from 'react';
import StammdatenMitarbeiterRR from '../../components/StammdatenMitarbeiterRR';

const Rueckruf = () =>{
    
  const [IsRueckruef, setIsRueckruef] = useState(false);
  const [IsRZeit, setIsRZeit] = useState(false);

    return( <div className='grid col-start-3 col-span-1 border border-black mt-6 relative ml-2'>
    <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Rückruf</p>
    <span className='ml-4 mt-2'>
      <input  type="checkbox" onChange={()=>setIsRueckruef(!IsRueckruef)} id='rueckruf' className='mr-1'  />
      Rückruf
    </span>
    <span className='ml-2'>Wann:
    <input type='date' id='daterr'
      className="h-6 ml-5 border border-black rounded-sm bg-white"
    />
    <input type='time' id='timerr' className="h-6 ml-2 border border-black rounded-sm bg-white"/>
    <input onChange={()=>setIsRZeit(!IsRZeit)} type="checkbox" id='cboxrr' className='ml-2' defaultChecked=''/> egal
    </span>
    <span className='ml-2'>Wer:
    {
      IsRueckruef?
        <select  className='text-left ml-8 border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='rruf'>
      <option value='A'> </option>
     <StammdatenMitarbeiterRR />
      </select>
      :
      <select disabled="true"  className='text-left ml-8 w-[112px] border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='rruf'>
        <option value='Name'></option>
      </select>
    }
    </span>
  </div>)
}

export default Rueckruf;