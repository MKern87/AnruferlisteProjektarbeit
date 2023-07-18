import React from 'react'
import { useEffect, useState } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { TiArrowSortedDown } from 'react-icons/ti'
import Dropdown from '../dropdown/Dropdown'
import RowColor from '../RowColor'

const Stammdaten = () => {

  const [data, setData] = useState([]);
  const [artData, setArtData] = useState([]);
  const [tdata, setTdata] = useState([]);
  const [filter, setFilter] = useState({
    Text: null,
    Kfilter: null,
    Katfilter: null,
    Mitarbeiter: null,
    Art: null,
    DBerichte: null,
    Rueckruf: null,
    RrufAll: null,
    Erledigt: null
  });

  //console.log(filter);

  const menuItems = [
    {
      title: 'Stammdaten',
      key: '/'
    },
    {
      title: 'Eintrag',
      key: '/Eintrag'
    }
  ]

  const allFilter = ({I, arr}) => {
      let narr = []
    for (let index = 0; index < arr.length; index++) {
      if (I.Erledigt == null && I.Text == null && I.Kfilter == null && I.Katfilter == null && I.SMitarbeiter == null && I.SArt == null && I.DBerichte == null && I.Rruf == null && I.RrufAll == null){
        narr.push(arr[index])
      }else if(I.Erledigt == 1 || I.Erledigt == 0){
        narr.push(arr[index])
      }
      console.log(Object.keys(arr[index]))
    }
    console.log(narr);

    return narr
    
  }
  

  //function aktualisieren() {
  //  window.location.reload(false);
  //}


  const datenabruf = async() => {
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           
        })
    };
    
    const d = await fetch('http://localhost/Kundenliste/backend/05b80e087db7c7713db71729e78a6ed3.php', request);
    let e = await d.json();
    console.log(e);

    if (e.data.length>0) {
      setData(e.data)
    }

  }

    const datenabrufe = async() => {
      const request = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
  
          })
      };
      
      const f = await fetch('http://localhost/Kundenliste/backend/art.php', request);
      let g = await f.json();
      console.log(g);

    if (g.ArtData.length>0) {
      setArtData(g.ArtData)
    }
    
  }

  const databruf = async() => {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

      })
    };

    const h = await fetch ('http://localhost/Kundenliste/backend/tagesbericht.php', request);
    let i = await h.json();
    console.log(i);

    if (i.tdata.length>0) {
      setTdata(i.tdata)
    }
  }

  const Names = ({Name}) => {
    //console.log(Name);
    return (
    <>
      {
        <>
        {Name.map((item, index) => (
          <option key={item + index} value={item.Mitarbeiter}>{item.Mitarbeiter}</option>
        ))}
        </>
      }
    </>
    )
  }

  const Type = ({Art}) => {
    return (
      <>
      {
        <>
        {Art.map((item, index) => (
          <option key={item + index} value={item.Art}>{item.Art}</option>
        ))}
        </>
      }
      </>
    )
  }

    useEffect(()=>{
      datenabruf();
      datenabrufe();
      databruf();
  }, [])
  

  return(
    <>
    <div>
      {menuItems.map((item, index) => (
        <a key={item+index} href={item.key}>{item.title}</a>
      ))}
    </div>
    <div className="w-full grid grid-cols-4 bg-gray-100 absolute m-2">
      <div className="grid grid-cols-span-1">
        <h1 className="flex font-bold float-left mb-3">Kunden</h1>
        <div className="flex h-auto">
          <button className="inline mx-1 mt-1"><FaArrowAltCircleRight /></button>
          <input className=" w-full inline border border-black rounded-sm" />
        </div>
        <p className="mt-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="w-full col-start-2 col-span-3 pl-1">
          <div className="flex w-full col-span-1">
            <h1 className="font-bold float-left mb-3">Tagesberichte</h1>
          </div>

          <div className="flex col-span-1">
            <button className="border shadow shadow-black text-sm border-b-slate-300 border-r-slate-300 bg-slate-100 p-[2px] ml-2 px-4">Optionen</button>
          </div>

          <div className="grid grid-cols-12 w-full bg-gray-200 py-4">
            <div className="col-span-1 flex flex-col items-center ml-1 h-full">
            <button className="border shadow shadow-black border-b-black border-r-black bg-gray-300 text-sm p-[2px] px-2">
              <p className='mb-1'>aktualisieren</p>
            </button>
              <span className="flex flex-row my-2 text-sm">
                <input defaultChecked={false} type="checkbox" />
                <p className="pl-1">Auto Aktual.</p>
              </span>
            <button className="border shadow shadow-black bg-gray-300 text-sm border-b-black border-r-black p-[2px] px-2 mb-1">
              <p className='mb-1'>zurücksetzen</p>
            </button>
            <span className="flex flex-row mt-2 text-sm">
                  <select className='text-left border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='Export'>
                    {(data.length>0)?
                    <>
                    <Names Name={data}/>
                    </>
                    :
                    <>
                    </>
                    }
                  </select>
            </span>
            </div>

          <div className="col-span-3 h-full bg-gray-200 text-sm mx-2">
            <div className="mb-2 relative border h-1/2 border-black px-2">
            <p className="ml-2 text-sm absolute inset-x -mt-3 bg-gray-200 px-1 ">Textsuche</p>
            <input type='text' className="w-full border border-black bg-slate-100 rounded-sm mt-6 p-1" />
            </div>
            <div className="flex flex-row">
            <div className="w-1/2 border mr-2 border-black relative mt-2">
              <p className="mb-2 ml-2 absolute inset-x -mt-3 bg-gray-200 px-1">Kunden filtern</p>
              <div className="flex flex-row items-start justify-center mt-4">
                <label className="mr-4 ml-4 mb-2" for="default-radio-1">
                <input type="radio" name='kunde' className=" text-blue-600 focus:ring-blue-500" />
                Ja</label>
                <label for="default-radio-2">
                <input checked type="radio" name='kunde' className=" text-blue-600 focus:ring-blue-500" />
                Nein </label>
              </div>
            </div>
            <div className="w-1/2 border border-black relative mt-2">
              <p className="mb-2 ml-2 absolute inset-x -mt-3 bg-gray-200 px-1">Kategorie filtern</p>
              <div className="flex flex-row items-start justify-center mt-4">
                <label className="mr-4 ml-4 mb-1" for="default-radio-1">
                <input type="radio" name='kategorie' className="text-blue-600 focus:ring-blue-500" />
                Ja</label>
                <label for="default-radio-2">
                <input checked type="radio" name='kategorie' className="text-blue-600 focus:ring-blue-500" />
                Nein</label>
              </div>
            </div>
            </div>
          </div>

            <div className="col-span-2 mr-2 h-full border border-black relative">
              <p className="ml-4 text-sm absolute inset-x -mt-3 bg-gray-200 px-1">Stammdaten</p>
              <span className="text-sm items-center ml-1 flex flex-row my-2 mt-8">
                <p className='pr-1'>Mitarbeiter:</p>
                <select className='text-left border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='Mitarbeiter'>
                    {(data.length>0)?
                    <>
                    <Names Name={data}/>
                    </>
                    :
                    <>
                    </>
                    }
                  </select>
                <input defaultChecked={false} className="items-center justify-items-center ml-1" type="checkbox" />
                <p className="pl-1">Alle</p>
              </span>
              <span className="text-sm items-center ml-1 flex flex-row my-2 mt-6">
                <p className='mr-12 pr-1'>Art:</p>
                <select className='text-left border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='Art'>
                    {(artData.length>0)?
                    <>
                    <Type Art={artData}/>
                    </>
                    :
                    <>
                    </>
                    }
                  </select>
                <input defaultChecked={false} className="items-center justify-items-center ml-1" type="checkbox" />
                <p className="pl-1">Alle</p>
              </span>
            </div>

            <div className="col-span-2 mr-2 border border-black h-full relative">
              <p className="ml-4 text-sm absolute inset-x -mt-3 bg-gray-200 px-1">Datum</p>
              <span className="text-sm items-center ml-1 flex flex-row my-2 mt-4">Von: 
                <input type='date' className="items-center justify-items-center ml-2 border border-black rounded-sm bg-slate-100 p-1" />
              </span>
              <span className="text-sm items-center ml-1 flex flex-row my-2">Bis: 
                <input type='date' className="items-center justify-items-center ml-4 border border-black rounded-sm bg-slate-100 p-1"/>
              </span>
              <span className="flex flex-row my-2 text-sm justify-center">
                <input defaultChecked={false} type="checkbox" />
                <p className="pl-1">aktuelle Berichte</p>
              </span>
            </div>

            <div className="col-span-2 mr-2 border border-black h-full text-sm relative">
              <p className="ml-4 mb-4 absolute inset-x -mt-3 bg-gray-200 px-1">Rückruf</p>
              <div className="flex flex-row items-stretch justify-center mt-6">
                <label className="mr-6 ml-6" for="default-radio-1">
                <input type="radio" name='rückruf' className="text-blue-600 focus:ring-blue-500" />
                Ja </label>
                <label className="mr-6" for="default-radio-2">
                <input type="radio" name='rückruf' className="text-blue-600 focus:ring-blue-500" />
                Nein </label>
                <label for="default-radio-3">
                <input type="radio" name='rückruf' className="text-blue-600 focus:ring-blue-500" />
                Alle </label>
              </div>
                <span className="items-center ml-1 flex flex-row mt-4 mb-1">
                  <p className='pr-1'>Mitarbeiter:</p>
                  <select className='text-left border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='Mitarbeiter'>
                    {(data.length>0)?
                    <>
                    <Names Name={data}/>
                    </>
                    :
                    <>
                    </>
                    }
                  </select>
                </span>
                  <input defaultChecked={false} className="items-center justify-items-center ml-20 mt-3" type="checkbox" /> Alle
            </div>

            <div className="col-span-1 border border-black h-full text-sm relative">
              <p className="ml-4 absolute inset-x -mt-3 bg-gray-200 px-1">Erledigt</p>
              <div className="flex flex-col items-start ml-10 my-2 mt-5">
                <label className="my-1" for="default-radio-1">
                <input id='erledigt' value={1} type="radio" name='erledigt' onChange={() => setFilter(true)} className="text-blue-600 focus:ring-blue-500" />
                Ja</label>
                <label className="my-1" for="default-radio-2">
                <input id='erledigt' value={0} type="radio" name='erledigt' onChange={() => setFilter(true)} className="text-blue-600 focus:ring-blue-500" />
                Nein</label>
                <label className="my-1" for="default-radio-3">
                <input id='erledigt' value={2} type="radio" name='erledigt' onChange={() => setFilter(false)} className="text-blue-600 focus:ring-blue-500" />
                Alle</label>
              </div>
              </div>
            </div>
            <div className='h-full col-start-2 col-span-3 px-1 mr-2' >
              <table className='text-sm border border-solid border-black'>
                <thead>
                <tr className='bg-sky-200 items-center justify-items-center'>
                  <th className='border border-solid border-black px-2'></th>
                  <th className='border border-solid border-black px-2'>Kunde</th>
                  <th className='border border-solid border-black px-2 w-1/3'>Text</th>
                  <th className='border border-solid border-black px-2'>Art</th>
                  <th className='border border-solid border-black px-2'>Mitarbeiter</th>
                  <th className='border border-solid border-black px-2'>Kategorie</th>
                  <th className='border border-solid border-black px-2'>Datum</th>
                  <th className='border border-solid border-black px-2'>Rückruf</th>
                  <th className='border border-solid border-black px-2'>Rückrufer</th>
                  <th className='border border-solid border-black px-2'>DatumRückruf</th>
                  <th className='border border-solid border-black px-2'>Erledigt</th>
                </tr>
                </thead>
                {tdata.length>0 ?
                <>
                {
                  allFilter({I:filter, arr:tdata}).map((item, index) => (<RowColor key={item+index} ITEM={item} />) )                 
                }
                </>
                :
                <>
                Keine Daten!
                </>
                }
              </table>
        </div>
        </div>
        
    </div>
    </>
  )

}
export default Stammdaten