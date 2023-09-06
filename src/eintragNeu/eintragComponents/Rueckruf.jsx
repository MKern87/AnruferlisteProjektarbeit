import React, { useState, useEffect } from 'react';
import StammdatenMitarbeiterRR from '../../components/StammdatenMitarbeiterRR';


const dateinput = (d) => {
return new Intl.DateTimeFormat('fr-Ca', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(d.toString()));
}
const HtmlCount = ( hours, minutes ) => {
  return getTwoDigits(hours)+':'+getTwoDigits(minutes);
}
const getTwoDigits = (value) => value==0? `0${0}`: value < 10 ? `0${value}` : value;
const Rueckruf = (R) =>{

  const [IsRueckruef, setIsRueckruef] = useState(false);
  const [IsR, setIsR] = useState(R.R==null?'':R.R.Rueckruf);
   

  if(R.R!=null){
  return( 
  <div className='grid col-start-3 col-span-1 border border-black mt-6 relative ml-2'>
   <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Rückruf</p>
    <span className='ml-4 mt-2'>
    {
    IsR == 1?
      <input  type="checkbox" checked onChange={()=>{setIsRueckruef(!IsRueckruef);setIsR(0)}} id='rueckruf' className='mr-1'  />
      :
      <input  type="checkbox" onChange={()=>{setIsRueckruef(!IsRueckruef);setIsR(1)}} id='rueckruf' className='mr-1'  />
    }
    Rückruf
    </span>
    <span className='ml-2'>Wann:
    <input type='date' id='daterr' 
      className="h-6 ml-5 border border-black rounded-sm bg-white" defaultValue={dateinput(R.R.DatumRueckruf.date)}
    />
    <input type='time' id='timerr' defaultValue={HtmlCount(new Date(R.R.DatumRueckruf.date.toString()).getHours(), new Date(R.R.DatumRueckruf.date.toString()).getMinutes())} className="h-6 ml-2 border border-black rounded-sm bg-white"/>
    <input type="checkbox" id='cboxrr' className='ml-2' defaultChecked=''/> egal
    </span>
    <span className='ml-2'>Wer:
    {
      IsR == 1?
        <select className='text-left ml-8 border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='rruf'>
      <option value={R.R.RückrufWer}>{R.R.Mitarbeitername}</option>
     <StammdatenMitarbeiterRR T={'I'} />
      </select>
      :
      <select disabled={true}  className='text-left ml-8 w-[112px] border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='rruf'>
        <option value={R.R.RückrufWer}>{R.R.Mitarbeitername}</option>
      </select>
    }
    </span>
  </div>
  )}else{
    return( 
      <div className='grid col-start-3 col-span-1 border border-black mt-6 relative ml-2'>
       <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Rückruf</p>
        <span className='ml-4 mt-2'>
        {
        IsR == 1?
          <input  type="checkbox" checked onChange={()=>{setIsRueckruef(!IsRueckruef);setIsR(0)}} id='rueckrufN' className='mr-1'  />
          :
          <input  type="checkbox" onChange={()=>{setIsRueckruef(!IsRueckruef);setIsR(1)}} id='rueckrufN' className='mr-1'  />
        }
        Rückruf
        </span>
        <span className='ml-2'>Wann:
        <input type='date' id='daterrN' 
          className="h-6 ml-5 border border-black rounded-sm bg-white" defaultValue={''}
        />
        <input type='time' id='timerrN' defaultValue={''/*HtmlCount(new Date().getHours(), new Date().getMinutes())*/} className="h-6 ml-2 border border-black rounded-sm bg-white"/>
        <input type="checkbox" id='cboxrrN' className='ml-2' defaultChecked={false} /> egal
        </span>
        <span className='ml-2'>Wer:
        {
          IsR == 1?
            <select className='text-left ml-8 border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='rrufN'>
          <option value={''}></option>
         <StammdatenMitarbeiterRR T={'I'} />
          </select>
          :
          <select disabled={true}  className='text-left ml-8 w-[112px] border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='rrufN'>
            <option value={''}></option>
            <StammdatenMitarbeiterRR />
          </select>
        }
        </span>
      </div>
      )
  };

}

export default Rueckruf;