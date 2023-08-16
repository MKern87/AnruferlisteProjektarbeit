import React, { useEffect, useState } from 'react';
import Baum from '../kategorieBaum/Baum';
import StammdatenArt from '../components/StammdatenArt';
import StammdatenMitarbeiter from '../components/StammdatenMitarbeiter';
import StammdatenMitarbeiterRR from '../components/StammdatenMitarbeiterRR';
import { BsCheckSquareFill } from 'react-icons/bs';
import { TbSquareLetterX } from 'react-icons/tb';
import { RiEditBoxLine } from 'react-icons/ri';

const Eintrag = ({tdata, HpData, Typ}) => {

  const [data, setData] = useState([]);
  const [artData, setArtData] = useState([]);
  const [rrChecked, setrrChecked] = useState(false);
  const [aInput, setaInput] = useState(false);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const getTwoDigits = (value) => value < 10 ? `0${value}` : value;


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

  const hours = Math.floor(time / 360000)
  const minutes = Math.floor((time % 360000) / 6000)
  const seconds = Math.floor((time % 6000) / 100)
  
  const startAndStop = () => {
    setIsRunning(!isRunning)
  }

  const save = ({hP, TypN, timer, Mitarbeiter, Art, erledigt, date, time, rueckruf, daterr, timerr, textArea, tD, TypU, MitarbeiterU, ArtU, erledigtU, rueckrufU }) => {
    if(Typ == 'T'){
      console.log()
    }else{
      console.log()
    }
  }

  useEffect (() => {
    datenabruf();
    datenart();
    //console.log(tdata);
    let intervalId;
      intervalId = setInterval(() => setTime(time +10), 100);
        return () => clearInterval(intervalId);
  }, [time])

  if(Typ == 'T'){
  return (
    <>
    <div className='fixed top-0 left-0 text-sm w-screen bg-gray-100 grid grid-cols-6 h-screen border border-black px-2 py-2'>
      <div className='w-screen h-4 col-span-6 flex'>
        <BsCheckSquareFill className='hover cursor-pointer mr-1' onClick={() => {save({
            tD:tdata, 
            TypU:'U', 
            //timer:document.getElementById('timer').value,
            MitarbeiterU:document.getElementById('MitarbeiterU').value,
            ArtU:document.getElementById('ArtU').value,
            erledigtU:document.getElementById('erledigtU').value,
            rueckrufU:document.getElementById('rueckrufU')
            //time:document.getElementById('time'),
            //rueckruf:document.getElementById('rueckruf'),
            //daterr:document.getElementById('daterr'),
            //timerr:document.getElementById('timerr'),
            //textArea:document.getElementById('textArea')
            })}}/>
        <RiEditBoxLine className='hover cursor-pointer mr-1' />
        <TbSquareLetterX className='hover cursor-pointer' />
      </div>
      <div className='grid col-span-3 border border-black'>
        <p className='inset-x -mt-3 ml-4 bg-gray-100 px-1 w-20'>Kundeninfo</p>
          <div className='w-full grid grid-cols-2 items-center justify-items-center'>
            <div className='w-full h-full ml-2'>
              <div className='w-5/6 mb-1 float-left'>ID: <div className='w-3/4 float-right'>{tdata.kid}</div></div>
              <div className='w-5/6 my-1 float-left'>Kunde: <div className='w-3/4 float-right'>{tdata.Kunden_ID}</div></div>
              <div className='w-5/6 my-1 float-left'>Adresse: <div className='w-3/4 float-right'>{tdata.Strasse}
                <br />{tdata.Plz} {tdata.Ort}</div>
              </div>
              <div className='w-5/6 float-left'>Tel: <div className='w-3/4 float-right'>{tdata.Telefon}</div></div>
            </div>
            <div className='w-full h-full'>
              <div className='w-5/6'> {tdata.Memo}</div>
            </div>
          </div>
      </div>
      <div className='grid col-span-1 row-span-2 border border-black ml-2'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Kategorie</p>
        <div>
          
        </div>
      </div>
      <div className='grid col-start-1 col-span-1 border border-black mt-6 relative'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Stammdaten</p>
        <span className='ml-4 mt-2'>Kategorie:</span>
        <div className='ml-4'>{tdata.Kategorie}</div>
        <span className='ml-4 mt-8'>Mitarbeiter:
          <select className='text-left ml-2 border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='MitarbeiterU'>
          <option value={'Name'}>{tdata.Mitarbeiter}</option>
          { 
            (data.length>0)?
            <>
            <StammdatenMitarbeiter Name={data}/>
            </>
            :
            <>
            </>
          }
          </select>
        </span>
        <span className='ml-4'>Art:
          <select className='text-left ml-14 border border-solid relative border-black rounded-sm bg-white cursor-pointer' id='ArtU'>
          <option value={'Art'}>{tdata.Art_ID}</option>
          { 
            (artData.length>0)?
            <>
            <StammdatenArt Art={artData}/>
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
          {
          tdata.Erledigt == 0 ? 
          <input type="checkbox" checked={false} onClick={true} id='erledigtU' />
          :
          <input type="checkbox" checked={true} id='erledigtU' />
          } Erledigt
          </span>
        <span className='ml-4'>Start:
          <input type='date' 
          defaultValue={new Date(tdata.Datum.date.toString()).toLocaleDateString('fr-CA', 
          {day: '2-digit', month: '2-digit', year: 'numeric',}
          )}
          className="h-6 ml-4 border border-black rounded-sm bg-white"
          />
          <input type='time' defaultValue={getTwoDigits(new Date(tdata.Datum.date.toString()).getHours()) + ':' + getTwoDigits(new Date(tdata.Datum.date.toString()).getMinutes()) + ':' + getTwoDigits(new Date(tdata.Datum.date.toString()).getSeconds())}
          className="h-6 ml-4 border border-black rounded-sm bg-white"
          />
        </span>
        <span className='ml-4'>Dauer:
          <p className='border border-black pl-1 bg-white w-1/4 float-right mr-36'>
            {tdata.Dauer}
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
        {
        tdata.Rückruf == 0 ? 
        <input type="checkbox" checked={rrChecked} id='rueckrufU' onChange={() => {
          if(rrChecked){
            setaInput
          }
          setrrChecked(rrChecked)
        }} />
        :
        <input type="checkbox" checked={!rrChecked} onChange={() => {
          if(!rrChecked){
            !setaInput
          }
          setrrChecked(!rrChecked)
        }} id='rueckrufU' />
        }
        {//
         // <input type="checkbox" defaultChecked={false} checked={rrChecked} onChange={() => {
         //   if(rrChecked){
         //     setaInput == true
         //   }
         //   setrrChecked(!rrChecked)
         // }}
        } Rückruf
        </span>
        <span className='ml-2'>Wann:
        <input type='date' 
          defaultValue={new Date(tdata.DatumRueckruf.date.toString()).toLocaleDateString('fr-CA', 
          {day: '2-digit', month: '2-digit', year: 'numeric',}
          )}
          className="h-6 ml-5 border border-black rounded-sm bg-white"
        />
        <input type='time' defaultValue={getTwoDigits(new Date(tdata.DatumRueckruf.date.toString()).getHours()) + ':' + getTwoDigits(new Date(tdata.DatumRueckruf.date.toString()).getMinutes())} className="h-6 ml-2 border border-black rounded-sm bg-white"/>
        <input type="checkbox" className='ml-2' defaultChecked={false}/> egal
        </span>
        <span className='ml-2'>Wer:
          <select onChange={(e) => setaInput(e.target.value)} disabled={rrChecked} value={aInput} className='text-left ml-8 border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='rruf'>
          <option value={'Name'}>{tdata.Mitarbeitername}</option>
            {
            (data.length>0)?
            <>
            <StammdatenMitarbeiterRR Name={data} />
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
        <textarea className='resize-none px-2 py-5' type="text">{tdata.text}</textarea>
      </div>
      <div className='grid col-start-5 col-span-2 row-span-4 mt-6 border border-black ml-2'>
        <input type="text" />
      </div>
    </div>
    </>
    )
  }else{
    return (
      <>
      <div className='fixed top-0 left-0 text-sm w-screen bg-gray-100 grid grid-cols-6 h-screen border border-black px-2 py-2'>
        <div className='w-screen h-4 col-span-6 flex'>
          <BsCheckSquareFill className='hover cursor-pointer mr-1' onClick={() => {save({
            hP:HpData, 
            TypN:'N', 
            timer:document.getElementById('timer').value,
            Mitarbeiter:document.getElementById('Mitarbeiter').value,
            Art:document.getElementById('Art').value,
            erledigt:document.getElementById('erledigt').value,
            date:document.getElementById('date'),
            time:document.getElementById('time'),
            rueckruf:document.getElementById('rueckruf'),
            daterr:document.getElementById('daterr'),
            timerr:document.getElementById('timerr'),
            textArea:document.getElementById('textArea')
            })}}/>
          <RiEditBoxLine className='hover cursor-pointer mr-1' />
          <TbSquareLetterX className='hover cursor-pointer' />
        </div>
        <div className='grid col-span-3 border border-black'>
          <p className='inset-x -mt-3 ml-4 bg-gray-100 px-1 w-20'>Kundeninfo</p>
            <div className='w-full grid grid-cols-2 items-center justify-items-center'>
              <div className='w-full h-full ml-2'>
                <div className='w-5/6 mb-1 float-left'>ID: <div className='w-3/4 float-right'>{HpData.ID}</div></div>
                <div className='w-5/6 my-1 float-left'>Kunde: <div className='w-3/4 float-right'>{HpData.Name1}</div></div>
                <div className='w-5/6 my-1 float-left'>Adresse: <div className='w-3/4 float-right'>{HpData.Strasse}
                  <br />{HpData.Plz} {HpData.Ort}</div>
                </div>
                <div className='w-5/6 float-left'>Tel: <div className='w-3/4 float-right'>{HpData.Telefon}</div></div>
              </div>
              <div className='w-full h-full'>
                <div className='w-5/6'> {HpData.Memo}</div>
              </div>
            </div>
        </div>
        <div className='grid col-span-1 row-span-2 border border-black ml-2'>
          <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Kategorie</p>
          <div>
          </div>
        </div>
        <div className='grid col-start-1 col-span-1 border border-black mt-6 relative'>
          <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Stammdaten</p>
          <span className='ml-4 mt-2'>Kategorie:</span>
          <div className='ml-4'>{tdata.Kategorie}</div>
          <span className='ml-4 mt-8'>Mitarbeiter:
            <select className='text-left ml-2 border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='Mitarbeiter'>
            <option value={'Name'}></option>
            { 
              (data.length>0)?
              <>
              <StammdatenMitarbeiter Name={data}/>
              </>
              :
              <>
              </>
            }
            </select>
          </span>
          <span className='ml-4'>Art:
            <select className='text-left ml-14 border border-solid relative border-black rounded-sm bg-white cursor-pointer' id='Art'>
            <option value={'Art'}></option>
            { 
              (artData.length>0)?
              <>
              <StammdatenArt Art={artData}/>
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
            <input type="checkbox" defaultChecked={false} className='mr-1' id='erledigt' />
             Erledigt
            </span>
          <div className='ml-4'>Start:
            <input type='date' id='date'
            defaultValue={new Date().toLocaleDateString('fr-CA', 
            {day: '2-digit', month: '2-digit', year: 'numeric',}
            )}
            className="h-6 ml-4 border border-black rounded-sm bg-white"
            />
            <span type='time' id='time' 
            className="h-6 ml-4 border border-black rounded-sm bg-white"
            />{showTime}
          </div>
          <div className='flex h-6 ml-4'>Dauer:
            <p className='border border-black px-1 ml-2 bg-white w-1/4 float-right mr-36'>
              <span className='' type="time" id='timer' />
              {hours}:
              {minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}
            </p>
          </div>
          <div className='ml-20 items-center justify-items-center'>
          <button onClick={startAndStop} className='border shadow px-1 shadow-black text-sm border-b-slate-300 border-r-slate-300 bg-slate-100'>{!isRunning ? 'Stop' : 'Zeit verändern'}</button>
          </div>
        </div>
        <div className='grid col-start-3 col-span-1 border border-black mt-6 relative ml-2'>
          <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Rückruf</p>
          <span className='ml-4 mt-2'>
            <input type="checkbox" id='rueckruf' className='mr-1' checked={rrChecked} onChange={() => {
              if(!rrChecked){
                setaInput == true
              }
              setrrChecked(!rrChecked)
            }}/>
            Rückruf
          </span>
          <span className='ml-2'>Wann:
          <input type='date' id='daterr'
            className="h-6 ml-5 border border-black rounded-sm bg-white"
          />
          <input type='time' id='timerr' className="h-6 ml-2 border border-black rounded-sm bg-white"/>
          <input type="checkbox" id='cboxrr' className='ml-2' defaultChecked={false}/> egal
          </span>
          <span className='ml-2'>Wer:
            <select onChange={(e) => setaInput(e.target.value)} disabled={!rrChecked} value={aInput} className='text-left ml-8 border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='rruf'>
            <option value={'Name'}></option>
              {
              (data.length>0)?
              <>
              <StammdatenMitarbeiterRR Name={data} />
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
          <textarea className='resize-none px-2 py-5' type="text" id='textArea'></textarea>
        </div>
        <div className='grid col-start-5 col-span-2 row-span-4 mt-6 border border-black ml-2'>
          <input type="text" id='tArea' />
        </div>
      </div>
      </>
      )
  }
    
}

export default Eintrag
