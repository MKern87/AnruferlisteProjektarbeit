import React from 'react'
import { useEffect, useState } from 'react'
import DatenTagesbericht from '../components/DatenTagesbericht'
import DatenHandelspartner from '../components/DatenHandelspartner'
import Eintrag from '../eintragNeu/Eintrag'
import AutoAktualZurueck from './stammdatenComponents/AutoAktualZurueck'
import Textsuche from './stammdatenComponents/Textsuche'
import KundenKatFilter from './stammdatenComponents/KundenKatFilter'
import StammdComponent from './stammdatenComponents/StammdComponent'
import StammdatenDatum from './stammdatenComponents/StammdatenDatum'
import StammdatenRueckruf from './stammdatenComponents/StammdatenRueckruf'
import StammdatenErledigt from './stammdatenComponents/StammdatenErledigt'

const Stammdaten = () => {
  
  const [tdata, setTdata] = useState([]);
  const [HpData, setHpdata] = useState([]);
  const [search, setSearch] = useState('');
  const [searchd, setSearchd] = useState('');
  const [vlue, setVlue] = useState(2);
  const [rrvlue, setrrVlue] = useState(2);
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [mArbeiter, setmArbeiter] = useState('');
  const [rrmArbeiter, setrrmArbeiter] = useState('');
  const [art, setArt] = useState('');
  const [open, setOpen] = useState(false);
  const [dTagesbericht, setdTagesbericht] = useState();
  const [dHandelspartner, setdHandelspartner] = useState();
  const [aktuelleBerichte, setaktuelleBerichte] = useState(false);
  
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
      
  }, [dTagesbericht, dHandelspartner, tdata])
  

  return(
    <>
    <div className="w-full grid md:grid-cols-4 grid-cols-1 bg-gray-100 p-2">
      <div className="md:overflow-scroll col-span-1 p-2">
        <h1 className="font-bold float-left">Kunden</h1>
          <input className="text-sm w-full h-8 px-2 my-4 border border-black rounded-sm" placeholder='Kunden suchen...' onChange={(e) => setSearch(e.target.value)}/>        
        <div className='md:w-[800px] w-full divide-y divide-slate-300 md:max-h-[720px] max-h-[400px] overflow-x-hidden overflow-y-scroll md:text-sm text-xs border border-slate-400'>
          <div className='sticky top-0 font-semibold bg-gray-400 w-full grid md:grid-cols-12 grid-cols-3 items-center justify-items-center '>
          <div className='py-1 bg-gray-400 w-full md:col-span-3 col-span-1 pl-2'>Suchbegriff</div>
          <div className='py-1 border-x border-gray-500 bg-gray-400 w-full md:col-span-2 col-span-1 pl-2'>Name1</div>
          <div className='py-1 bg-gray-400 w-full md:col-span-2 col-span-1 pl-2'>Name2</div>
          <div className='py-1 border-x border-gray-500 bg-gray-400 w-full col-span-3 pl-2 md:block hidden'>Adresse</div>
          <div className='py-1 md:border-0 border-t border-gray-500 bg-gray-400 w-full md:col-span-2 col-span-3 pl-2'>Telefon</div>
        </div>
          <DatenHandelspartner daten={setHpdata} HandelspartnerDaten={setdHandelspartner} search={search} popUp={setOpen} />
      </div>
    </div>
      <div className="w-full md:col-span-3 col-span-1 p-2">
        <div className="w-full">
          <h1 className="font-bold float-left mb-3">Tagesberichte</h1>
        </div>
        <div className="w-full grid md:grid-cols-12 grid-cols-2 gap-2 items-start justify-items-start bg-gray-200 py-4 md:px-0 px-2">    
          
          <AutoAktualZurueck />

          <div className="w-full md:col-span-3 col-span-2 grid md:grid-cols-4 grid-cols-1 h-full items-start justify-items-start text-sm md:my-0 my-4">
            
          <Textsuche setSearchd={setSearchd}/>

          <KundenKatFilter />

          </div>
            
            <div 
              onClick={()=>mtoogler({m:document.querySelectorAll('.mtoggle')})} className="cursor-pointer w-full md:hidden col-span-2 text-center flex flex-col h-full border border-black -mt-4 pb-6 bg-[rgba(0,0,0,0.3)] py-2">Mehr Filter anzeigen
            </div>
              
          <StammdComponent setmArbeiter={setmArbeiter} setArt={setArt}/>

          <StammdatenDatum setstartDate={setstartDate} setendDate={setendDate} setaktuelleBerichte={setaktuelleBerichte}/>

          <StammdatenRueckruf setrrmArbeiter={setrrmArbeiter} setrrVlue={setrrVlue}/>

          <StammdatenErledigt setVlue={setVlue}/>

            <div className='md:col-span-12 col-span-2 md:text-sm text-xs font-semibold bg-sky-200 md:mt-0 md:-mb-2 mt-12 -mb-2 w-full grid md:grid-cols-[181px_auto_50px_50px_100px_100px_120px_120px_70px_100px_120px_88px] grid-cols-3 items-center justify-items-center py-1'>
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
            
            <div className="w-full md:col-span-12 h-[550px] bg-white inline-block col-span-2 divide-y divide-slate-300 md:max-h-[550px] max-h-[550px] overflow-y-scroll overflow-x-hidden md:text-sm text-xs border border-slate-400">
            <DatenTagesbericht daten={setTdata} tagesbDaten={setdTagesbericht} popUp={setOpen} searchd={searchd} werte={vlue} werterr={rrvlue} sDate={startDate} eDate={endDate} mA={mArbeiter} stammdatenArt={art} rrmA={rrmArbeiter}/>
            </div>
          
          </div>
        </div>
    </div>
    
    <div>
      {open ? <Eintrag Typ={localStorage.getItem('T')} tdata={dTagesbericht} HpData={dHandelspartner} Opener={setOpen} /> : null}
    </div>
    </>
  )

}
export default Stammdaten