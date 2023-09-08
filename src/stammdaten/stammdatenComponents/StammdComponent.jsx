import React from 'react'
import { useState, useEffect } from 'react'
import StammdatenMitarbeiter from '../../components/StammdatenMitarbeiter';
import StammdatenArt from '../../components/StammdatenArt';

const StammdComponent = ({setmArbeiter, setArt}) => {

  const [data, setData] = useState([]);
  const [artData, setArtData] = useState([]);
  const [artAktuell, setartAktuell] = useState(false);
  const [mAaktuell, setmAaktuell] = useState(false);
  
  //////// Alle Mitarbeiter Stammdaten (Checkbox Alle) ////////

  const mitarbeiterAktuell = ({maak}) => {
    if(maak == false){
      setmAaktuell (!maak)
      setmArbeiter('')
    }else{
      setmAaktuell (!maak)
    }
  }

  //////// Alle Art (Checkbox Alle) ////////

  const aktuelleArt = ({aa}) => {
    if(aa == false){
      setartAktuell (!aa)
      setArt('')
    }else{
      setartAktuell (!aa)
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

  //////// Datenabruf Art (kommunikation) ////////

  const datenart = async() => {
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

        })
    };
    
    const f = await fetch('http://localhost/Kundenliste/backend/art.php', request);
    let g = await f.json();
    //console.log(g);

  if (g.ArtData.length>0) {
    setArtData(g.ArtData)
  }
  
  }

  useEffect(() => {
    datenabruf();
    datenart();
  }, [])
  
  
  return (
    <div className={"md:block hidden mtoggle w-full md:col-span-2 col-span-2 h-full border border-black py-2 relative"}>
      <p className="ml-4 text-sm absolute inset-x -mt-5 bg-gray-200 px-1">Stammdaten</p>
      <span className="w-full grid md:grid-cols-1 grid-cols-4 mt-2 gap-1 text-sm items-start justify-items-center">
        <div className='w-full md:col-span-1 col-span-3 flex md:flex-col flex-row px-2 overflow-hidden'><p className='pr-1'>Mitarbeiter:</p>
        <select onChange={() => (document.getElementById('mitarbeiter').value)?setmArbeiter(document.getElementById('mitarbeiter').value):mitarbeiterAktuell({maak: false})} className='w-full text-left border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='mitarbeiter'>
          <option></option>
          {(data.length>0)?
          <>
          <StammdatenMitarbeiter T={'N'} Name={data}/>
          </>
          :
          <>
          </>
          }
        </select>
        </div>
        <div className='w-full col-span-1 flex flex-row pl-2 overflow-hidden'>
      <input defaultChecked={false} id='mitarbeiter' onChange={() => mitarbeiterAktuell({maak: false})} className="items-center justify-items-center ml-1" type="checkbox" />
      <p className="pl-[1px]">Alle</p>
      </div>
      <div className='w-full  md:col-span-1 col-span-3 flex md:flex-col flex-row px-2 overflow-hidden'>
      <p className='mr-5 pr-1'>Art:</p>
        <select onChange={() => (document.getElementById('Art').value)?setArt(document.getElementById('Art').value):aktuelleArt({aa: false})} className='w-full text-left border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='Art'>
          <option></option>
            {(artData.length>0)?
            <>
            <StammdatenArt T={'N'} Art={artData}/>
            </>
            :
            <>
            </>
            }
        </select>
      </div>
      <div className='w-full col-span-1 flex flex-row pl-2 overflow-hidden'>
      <input defaultChecked={false} onChange={() => aktuelleArt({aa: false})} className="items-center justify-items-center ml-1" type="checkbox" />
      <p className="pl-1">Alle</p>
      </div>
       </span>
    </div>
  )
}

export default StammdComponent