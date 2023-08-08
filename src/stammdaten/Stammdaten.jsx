import React from 'react'
import { useEffect, useState } from 'react'
import StammdatenMitarbeiter from '../components/StammdatenMitarbeiter'
import StammdatenMitarbeiterRR from '../components/StammdatenMitarbeiterRR'
import StammdatenArt from '../components/StammdatenArt'
import DatenTagesbericht from '../components/DatenTagesbericht'
import DatenHandelspartner from '../components/DatenHandelspartner'
import Eintrag from '../eintragNeu/Eintrag'

const Stammdaten = () => {

  const [data, setData] = useState([]);
  const [artData, setArtData] = useState([]);
  const [tdata, setTdata] = useState([]);
  const [HpData, setHpdata] = useState([]);
  const [search, setSearch] = useState('');
  const [searchd, setSearchd] = useState('');
  const [vlue, setVlue] = useState(2);
  const [rrvlue, setrrVlue] = useState(2);
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [aktuelleBerichte, setaktuelleBerichte] = useState(false);
  const [mArbeiter, setmArbeiter] = useState('');
  const [mAaktuell, setmAaktuell] = useState(false);
  const [rrmArbeiter, setrrmArbeiter] = useState('');
  const [rrmArbeiterAktuell, setrrmArbeiterAktuell] = useState(false)
  const [art, setArt] = useState('');
  const [artAktuell, setartAktuell] = useState(false);
  const [open, setOpen] = useState(false);
  const [dTagesbericht, setdTagesbericht] = useState({});
  

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

//////// Alle Mitarbeiter Stammdaten (Checkbox Alle) ////////

  const mitarbeiterAktuell = ({maak}) => {
    if(maak == false){
      setmAaktuell (!maak)
      setmArbeiter('')
    }else{
      setmAaktuell (!maak)
    }
  }

//////// Alle Mitarbeiter Rürckruf (Checkbox Alle) ////////

  const mitarbeiterAktuellRR = ({maakrr}) => {
    if(maakrr == false){
      setrrmArbeiterAktuell (!maakrr)
      setrrmArbeiter('')
    }else{
      setrrmArbeiterAktuell (!maakrr)
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

//////// Seite aktualisieren ////////

  const aktualisieren = () => {
    window.location.reload(false);
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

//////// Datenabruf Tagesberichte ////////

  const datentagesbericht = async() => {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

      })
    };

    const h = await fetch ('http://localhost/Kundenliste/backend/tagesbericht.php', request);
    let i = await h.json();
    //console.log(i);

    if (i.tdata.length>0) {
      setTdata(i.tdata)
    }
    //console.log(i);
  }

//////// Datenabruf Handelspartner ////////

  const datenhandelsp = async() => {
    const request = {
      method:'POST',
      headers: { 'Content-Type': 'aplication/json' },
      body:JSON.stringify({

      })
    };

    const j = await fetch ('http://localhost/Kundenliste/backend/handelspartner.php', request);
    let k = await j.json();
    //console.log(k);

    if (k.HpData.length>0){
      setHpdata(k.HpData)
    }
  }

  const mtoogler = ({m}) => {
    if(m[0].style.display=="block"){
      m.forEach(e => {
        e.style.display="none";
      });
    }else{
      m.forEach(e => {
        e.style.display="block";
      });
    }
  }


    useEffect(()=>{
      datenabruf();
      datenart();
      datentagesbericht();
      datenhandelsp();
      //console.log(tdata)
  }, [])
  

  return(
    <>
    <div className="w-full grid md:grid-cols-4 grid-cols-1 bg-gray-100 p-2 md:overflow-scroll">
      <div className="md:overflow-scroll col-span-1 p-2">
        <h1 className="font-bold float-left">Kunden</h1>
          <input className="text-sm w-full h-8 px-2 my-4 border border-black rounded-sm" placeholder='Kunden suchen...' onChange={(e) => setSearch(e.target.value)}/>        
        <div className='md:w-[800px] md:overflow-scroll w-full divide-y divide-slate-300 md:max-h-[720px] max-h-[400px] overflow-x-hidden overflow-y-scroll md:text-sm text-xs border border-slate-400'>
          <div className='sticky top-0 md:overflow-scroll font-semibold bg-gray-400 w-full grid md:grid-cols-12 grid-cols-3 items-center justify-items-center '>
          <div onClick={() => setOpen(true)} className='py-1 bg-gray-400 w-full md:col-span-3 col-span-1 pl-2'>Suchbegriff</div>
          <div className='py-1 border-x border-gray-500 bg-gray-400 w-full md:col-span-2 col-span-1 pl-2'>Name1</div>
          <div className='py-1 bg-gray-400 w-full md:col-span-2 col-span-1 pl-2'>Name2</div>
          <div className='py-1 border-x border-gray-500 bg-gray-400 w-full col-span-3 pl-2 md:block hidden'>Adresse</div>
          <div className='py-1 md:border-0 border-t border-gray-500 bg-gray-400 w-full md:col-span-2 col-span-3 pl-2'>Telefon</div>
        </div>
          <DatenHandelspartner search={search} popUp={setOpen} />
      </div>
    </div>
      <div className="w-full md:col-span-3 col-span-1 p-2">
        <div className="w-full">
          <h1 className="font-bold float-left mb-3">Tagesberichte</h1>
        </div>
        <div className="w-full grid md:grid-cols-12 grid-cols-2 gap-2 items-start justify-items-start bg-gray-200 py-4 md:px-0 px-2">    
          <div className="w-full md:col-span-1 col-span-2 flex md:flex-col flex-row items-center justify-around h-full md:px-0 px-2 md:mb-0 mb-4">
            <button onClick={aktualisieren} className="border flex-1 shadow shadow-black border-b-black border-r-black bg-gray-300 text-sm p-[2px] px-2">
              <p className='mb-1'>aktualisieren</p>
            </button>
              <span className="flex flex-row my-2 text-sm md:ml-0 ml-4  flex-2">
                <input defaultChecked={false} type="checkbox" />
                <p className="pl-1">Auto Aktual.</p>
              </span>
            <button className="md:block hidden border  flex-3 shadow shadow-black bg-gray-300 text-sm border-b-black border-r-black p-[2px] px-2 mb-1">
              <p className='mb-1'>zurücksetzen</p>
            </button>
          </div>
          <div className="w-full md:col-span-3 col-span-2 grid md:grid-cols-4 grid-cols-1 h-full items-start justify-items-start text-sm md:my-0 my-4">
            <div className="w-full mb-2 md:col-span-4 col-span-4 relative border h-full border-black px-2">
            <p className="ml-2 text-sm absolute inset-x -mt-3 bg-gray-200 px-1 ">Textsuche</p>
            <input type='text' className="w-full border border-black bg-slate-100 rounded-sm md:mt-4 mt-6 p-1" placeholder='Textsuche' onChange={(e) => setSearchd(e.target.value)} />
            </div>
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
          </div>
            <div onClick={()=>mtoogler({m:document.querySelectorAll('.mtoggle')})} className="cursor-pointer w-full md:hidden col-span-2 text-center flex flex-col h-full border border-black -mt-4 pb-6 bg-[rgba(0,0,0,0.3)] py-2">Mehr Filter anzeigen</div>
              <div className={"md:block hidden mtoggle w-full md:col-span-2 col-span-2 h-full border border-black py-2 relative"}>
                <p className="ml-4 text-sm absolute inset-x -mt-5 bg-gray-200 px-1">Stammdaten</p>
                <span className="w-full grid md:grid-cols-1 grid-cols-4 mt-2 gap-1 text-sm items-start justify-items-center">
                  <div className='w-full md:col-span-1 col-span-3 flex md:flex-col flex-row px-2 overflow-hidden'><p className='pr-1'>Mitarbeiter:</p>
                  <select onChange={() => setmArbeiter(document.getElementById('mitarbeiter').value)} className='w-full text-left border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='mitarbeiter'>
                    <option value={'Name'}></option>
                    {(data.length>0)?
                    <>
                    <StammdatenMitarbeiter Name={data}/>
                    </>
                    :
                    <>
                    </>
                    }
                  </select>
                  </div>
                  <div className='w-full col-span-1 flex flex-row pl-2 overflow-hidden'>
                <input defaultChecked={false} id='mitarbeiter' onChange={() => mitarbeiterAktuell({maak: mAaktuell})} className="items-center justify-items-center ml-1" type="checkbox" />
                <p className="pl-[1px]">Alle</p>
                </div>
                <div className='w-full  md:col-span-1 col-span-3 flex md:flex-col flex-row px-2 overflow-hidden'>
                <p className='mr-5 pr-1'>Art:</p>
                <select onChange={() => setArt(document.getElementById('Art').value)} className='w-full text-left border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='Art'>
                  <option value={'Art'}></option>
                    {(artData.length>0)?
                    <>
                    <StammdatenArt Art={artData}/>
                    </>
                    :
                    <>
                    </>
                    }
                  </select>
                </div>
                <div className='w-full col-span-1 flex flex-row pl-2 overflow-hidden'>
                <input defaultChecked={false} onChange={() => aktuelleArt({aa: artAktuell})} className="items-center justify-items-center ml-1" type="checkbox" />
                <p className="pl-1">Alle</p>
                </div>
              </span>
            </div>

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
                <input defaultChecked={false} onChange={() => berichteAktuell({ab: aktuelleBerichte})} type="checkbox" />
                <p className="pl-1">aktuelle Berichte</p>
              </span>
              </div>
            </div>

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

            <div className="md:block md:w-1/2 hidden mtoggle w-full col-span-2 md:mt-0 mt-12 border border-black h-full text-sm relative">
              <p className="ml-4 absolute inset-x -mt-3 bg-gray-200 px-1">Erledigt</p>
              <div className="flex flex-col items-start ml-10 my-2 mt-8">
                <label className="my-1" for="default-radio-1">
                <input id='erledigt' value={1} type="radio" name='erledigt' onChange={() => setVlue(1)} className="text-blue-600 focus:ring-blue-500" />
                Ja</label>
                <label className="my-1" for="default-radio-2">
                <input id='erledigt' value={0} type="radio" name='erledigt' onChange={() => setVlue(0)} className="text-blue-600 focus:ring-blue-500" />
                Nein</label>
                <label className="my-1" for="default-radio-3">
                <input id='erledigt' value={2} type="radio" name='erledigt' onChange={() => setVlue(2)} className="text-blue-600 focus:ring-blue-500" />
                Alle</label>
              </div>
              </div>
              <div className='md:col-span-12 col-span-2 md:text-sm text-xs font-semibold bg-sky-200 md:mt-0 md:-mb-2 mt-12 -mb-2 w-full grid md:grid-cols-[180px_auto_50px_50px_100px_100px_120px_120px_70px_100px_120px_70px] grid-cols-3 items-center justify-items-center py-1'>
                <div className='py-1 w-full md:col-span-1 col-span-3 md:border-0 border-b border-gray-500 pl-2'>Kunde</div>
                <div className='md:border-x border-x-0 md:border-b-0 border-b border-gray-500 py-1 w-full md:col-span-3 col-span-3 pl-2'>Text</div>
                <div className='py-1 w-full col-span-1 pl-2 md:block hidden'>Art</div>
                <div className='md:border-x border-r border-gray-500 py-1 w-full col-span-1 pl-2'>Mitarbeiter</div>
                <div className='py-1 w-full md:col-span-1 col-span-2 pl-2'>Kategorie</div>
                <div className='md:border-l border-l-0 border-y md:border-y-0 border-gray-500  py-1 w-full md:col-span-1 col-span-3 pl-2'>Datum</div>
                <div className='md:border-x border-r border-gray-500 py-1 w-full col-span-1 pl-2'>Rückruf</div>
                <div className='py-1 w-full col-span-1 pl-2 md:block hidden'>Rückrufer</div>
                <div className='border-x border-gray-500  py-1 w-full col-span-1 pl-2 md:block hidden'>DatumRückruf</div>              
                <div className='border-0 border-gray-500 py-1 w-full col-span-1 pl-2'>Erledigt</div>
              </div>
              <div className="w-full md:col-span-12 h-[550px] bg-white inline-block col-span-2 divide-y divide-slate-300 md:max-h-[550px] max-h-[550px] overflow-scroll md:text-sm text-xs border border-slate-400">
              <DatenTagesbericht tagesbDaten={setdTagesbericht} popUp={setOpen} searchd={searchd} werte={vlue} werterr={rrvlue} sDate={startDate} eDate={endDate} mA={mArbeiter} stammdatenArt={art} rrmA={rrmArbeiter}/>
              </div>
            </div>
        </div>
    </div>
    <div className=''>
      {open ? <Eintrag tdata={dTagesbericht} /> : null}
    </div>
    </>
  )

}
export default Stammdaten