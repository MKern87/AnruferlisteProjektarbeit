import React from 'react'
import { useState, useEffect } from 'react'
import StammdatenMitarbeiterRR from '../../components/StammdatenMitarbeiterRR';

const StammdatenRueckruf = ({setrrmArbeiter, setrrVlue}) => {
  
  const [data, setData] = useState([]);
  const [rrmArbeiterAktuell, setrrmArbeiterAktuell] = useState(false)

  //////// Alle Mitarbeiter Rürckruf (Checkbox Alle) ////////

  const mitarbeiterAktuellRR = ({maakrr}) => {
    if(maakrr == false){
      setrrmArbeiterAktuell (!maakrr)
      setrrmArbeiter('')
    }else{
      setrrmArbeiterAktuell (!maakrr)
    }
  }

  //////// Datenabruf Mitarbeiter ////////

  const datenabruf = async() => {
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           
        })
    };
    
    const d = await fetch('http://localhost/Kundenliste/backend/mitarbeiter.php', request);
    let e = await d.json();
    //console.log(e);

    if (e.data.length>0) {
      setData(e.data)
    }
  }

  useEffect (() => {
    datenabruf();
  }, [])
  
  return (
    <div className="md:block hidden mtoggle w-full col-span-2 md:mt-0 mt-8 border border-black h-full text-sm relative">
      <p className="ml-4 mb-4 absolute inset-x -mt-3 bg-gray-200 px-1">Rückruf</p>
      <div className="flex flex-row items-stretch justify-center mt-6">
        <label className="mr-6 ml-6" for="default-radio-1">
        <input type="radio" id='rückruf' name='rückruf' value={1} onChange={() => setrrVlue(1)} className="text-blue-600 focus:ring-blue-500" />
        Ja </label>
        <label className="mr-6" for="default-radio-2">
        <input type="radio" id='rückruf' name='rückruf' value={0} onChange={() => setrrVlue(0)} className="text-blue-600 focus:ring-blue-500" />
        Nein </label>
        <label for="default-radio-3">
        <input type="radio" id='rückruf' name='rückruf' value={2} onChange={() => setrrVlue(2)} className="text-blue-600 focus:ring-blue-500" />
        Alle </label>
      </div>
      <span className="w-full flex md:flex-col flex-row items-center justify-center mt-4 ">
        <p className='pr-1'>Mitarbeiter:</p>
        <select id='itarbeiter' onChange={() => setrrmArbeiter(document.getElementById('itarbeiter').value)} className='w-2/3 text-left border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' >
          {<option value={'Name'}></option>}
          {(data.length>0)?
          <>
          <StammdatenMitarbeiterRR Name={data}/>
          </>
          :
          <>
          </>
          }
        </select>
      </span>
      <div className="flex flex-row items-center justify-center mt-4"><input defaultChecked={false} onChange={() => mitarbeiterAktuellRR({maakrr: rrmArbeiterAktuell})} className="inline mr-2" type="checkbox" /> <a className='inline'>Alle</a></div>
    </div>
  )
}

export default StammdatenRueckruf