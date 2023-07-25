import React, { useEffect, useState } from 'react'
import Baum from '../kategorieBaum/Baum';

const Eintrag = () => {

  const [data, setData] = useState([]);
  const [artData, setArtData] = useState([]);
  const [rrChecked, setrrChecked] = useState(false);
  const [aInput, setaInput] = useState(false);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


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

  const today = new Date()
  const showTime = today.getHours()
    + ':' + today.getMinutes()
    + ':' + today.getSeconds()

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

  const hours = Math.floor(time / 360000)
  const minutes = Math.floor((time % 360000) / 6000)
  const seconds = Math.floor((time % 6000) / 100)

  const startAndStop = () => {
    setIsRunning(!isRunning)
  }

  const reset = () => {
    setTime(0)
  }


  useEffect (() => {
    datenabruf();
    datenart();
    let intervalId;
      if (isRunning) {
        intervalId = setInterval(() => setTime(time +1), 10);
      }
        return () => clearInterval(intervalId);
  }, [isRunning, time])

  
  return (
    <>
    <div>
      {menuItems.map((item, index) => (
        <a key={item+index} href={item.key}>{item.title}</a>
      ))}
    </div>
    <div className='text-sm w-screen bg-gray-100 absolute grid grid-cols-6 grid-rows-4 h-full border border-black px-2 py-2'>
      <div className='grid col-span-3 border border-black relative mt-6'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Kundeninfo</p>
      </div>
      <div className='grid col-span-1 row-span-2 border border-black ml-2 mt-6'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Kategorie</p>
        <span>
          <Baum/>
        </span>
      </div>
      <div className='grid col-start-1 col-span-1 border border-black mt-6 relative'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Stammdaten</p>
        <span className='ml-4 mt-2'>Kategorie:</span>
        <span className='ml-4 mt-8'>Mitarbeiter:
          <select className='text-left ml-2 border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='Mitarbeiter'>
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
        <span className='ml-4'>Art:
          <select className='text-left ml-14 border border-solid relative border-black rounded-sm bg-white cursor-pointer' id='Art'>
            {(artData.length>0)?
            <>
            <Type Art={artData}/>
            </>
            :
            <>
            </>
            }
          </select>
        </span>
      </div>
      <div className='grid col-start-2 col-span-1 border border-black mt-6 relative ml-2'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Status</p>
          <span className='ml-4 mt-2'>
            <input type="checkbox" defaultChecked={false}/> Erledigt
          </span>
        <span>Start:
          <input type='date' className="h-6 ml-10 border border-black rounded-sm bg-white"/>
          <p className='float-right border border-black bg-white mr-10 px-4'>{ showTime }</p>
        </span>
        <span className=''>Dauer:
          <p className='border border-black pl-1 bg-white w-1/4 float-right mr-36'>
            {hours}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
        </span>
        <div className='ml-20 items-center justify-items-center'>
        <button onClick={startAndStop} className='border shadow px-1 shadow-black text-sm border-b-slate-300 border-r-slate-300 bg-slate-100'>{isRunning ? 'Stop' : 'Zeit verändern'}</button>
        <button className='border shadow ml-2 px-2 shadow-black text-sm border-b-slate-300 border-r-slate-300 bg-slate-100 w-auto'>OK</button>
        </div>
      </div>
      <div className='grid col-start-3 col-span-1 border border-black mt-6 relative ml-2'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Rückruf</p>
        <span className='ml-4 mt-2'>
        <input type="checkbox" defaultChecked={false} checked={rrChecked} onChange={() => {
          if(rrChecked){
            setaInput == true
          }
          setrrChecked(!rrChecked)
        }}/> Rückruf
        </span>
        <span>Wann:
        <input type='date' className="h-6 ml-10 border border-black rounded-sm bg-white"/>
        <input type='time' className="h-6 ml-2 border border-black rounded-sm bg-white"/>
        <input type="checkbox" className='ml-2' defaultChecked={false}/> egal
        </span>
        <span className=''>Wer:
          <select onChange={(e) => setaInput(e.target.value)} disabled={!rrChecked} value={aInput} className='text-left ml-12 border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='rruf'>
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
      <div className='grid col-span-4 row-span-4 mt-6 border border-black relative'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Beschreibung</p>
        <input type="text" />
      </div>
      <div className='grid col-start-5 col-span-2 row-span-4 mt-6 border border-black ml-2'>
        <input type="text" />
      </div>
    </div>
    </>
  )
}

export default Eintrag
