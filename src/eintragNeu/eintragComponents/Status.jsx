import React, { useEffect, useState } from "react";

const dateinput = (d) =>{
  return new Intl.DateTimeFormat('fr-Ca', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(d.toString()));
 }

const getTwoDigits = (value) => value < 10 ? `0${value}` : value;
const HtmlCount = ( hours, minutes ) => {
  return getTwoDigits(hours)+':'+getTwoDigits(minutes);
}

const Status = ({ST}) =>{
    const [Now, setNow] = useState(new Date().getTime());
    const [timerid, settimerid] = useState(true)
    //const [seccounter, setseccounter] = useState(0)
    const [CounterHour, setCounterHour] = useState('0');
    const [CounterMin, setCounterMin] = useState('0');
    const [CounterSec, setCounterSec] = useState('0');
    const [Erledigt, setErledigt] = useState(ST==undefined?'':(ST.Erledigt == 1) ? true : false)
    const [ErledigtN, setErledigtN] = useState(false)
    const [isRunning, setIsRunning] = useState(false)

    function CountdownTimer() {
        let now = Now;
        let whenstart = new Date(new Date().getTime());
        let timeleft = whenstart - now;
        setCounterHour(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setCounterMin(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
        setCounterSec(Math.floor((timeleft % (1000 * 60)) / 1000));
        //setseccounter(seccounter => seccounter + 1);
    }
    useEffect(()=>{
      let interval;
      
    if (timerid) {
      interval = setInterval(() => {
        CountdownTimer();
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
    },[])

    const handleStop = () => {
        settimerid(!timerid);
      };

    if(ST!=undefined){
    return (<div className='grid md:col-start-2 md:col-span-1 col-span-6 border border-black md:mt-6 mt-4 md:mx-0 mx-4 md:pb-0 pb-4 relative md:ml-2'>
    <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Status</p>
      <span className='ml-4 mt-2'>
      <input type="checkbox" defaultChecked={(ST.Erledigt == 1) ? true : false} onChange={()=>setErledigt(!Erledigt)}  className='mr-1' id='erledigt' />
       Erledigt
      </span>
      <input type="hidden" id="iserlidgt" value={Erledigt} />
    <div className='md:ml-4 ml-4 md:mt-0 mt-2'>Start:
      <input type='date' id='date'
      defaultValue={dateinput(ST.Datum.date)}
      className="h-6 ml-4 border border-black rounded-sm bg-white"
      />
      <input type='time' defaultValue={HtmlCount(new Date(ST.DatumZeit.date.toString()).getHours(), new Date(ST.DatumZeit.date.toString()).getMinutes())}
        id="ttt" className="h-6 ml-4 border border-black rounded-sm bg-white"
      />
    </div>
    <div className='flex md:h-6 md:ml-4 ml-4 md:my-0 my-4'>Dauer:
      <p className='border border-black px-1 ml-2 bg-white w-1/4 float-right mr-36'>
        <span className='' type="time" id='timer' />
        {ST.Dauer}
      </p>
    </div>
    <input type="hidden" id="seconds" value={ST.Dauer} />
    <div className='ml-20 items-center justify-items-center'>
    <button onClick={() => handleStop()} className='border shadow px-1 shadow-black text-sm border-b-slate-300 border-r-slate-300 bg-slate-100'>{!isRunning ? 'Start' : 'Stop'}</button>
    </div>
  </div>)
  }else{
    return (
    <div className='grid md:col-start-2 md:col-span-1 col-span-6 border border-black md:mt-6 mt-4 md:mx-0 mx-4 md:pb-0 pb-4 relative md:ml-2'>
    <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Status</p>
      <span className='ml-4 mt-2'>
      <input type="checkbox" defaultChecked={false} onChange={()=>setErledigtN(!ErledigtN)}  className='mr-1' id='erledigtN' />
       Erledigt
      </span>
      <input type="hidden" id="iserlidgtN" defaultValue={ErledigtN} />
    <div className='ml-4'>Start:
      <input type='date' id='dateN'
      defaultValue={new Date().toLocaleDateString('fr-CA', 
      {day: '2-digit', month: '2-digit', year: 'numeric',}
      )}
      className="h-6 ml-4 border border-black rounded-sm bg-white"
      />
      <input type='time' defaultValue={getTwoDigits(new Date().getHours()) + ':' + getTwoDigits(new Date().getMinutes()) + ':' + getTwoDigits(new Date().getSeconds())}
          className="h-6 ml-4 border border-black rounded-sm bg-white" id="tttN"
      />
    </div>
    <div className='flex h-6 ml-4'>Dauer:
      <div className='border border-black px-1 ml-2 bg-white w-1/4 float-right mr-36'>
        <span className='' type="time" id='timerN' />
        {getTwoDigits(CounterHour)+':'+ getTwoDigits(CounterMin)+':'+ getTwoDigits(CounterSec)}
      </div>
    </div>
    <input type="hidden" id="secondsN" defaultValue={getTwoDigits(CounterHour)+':'+ getTwoDigits(CounterMin)+':'+ getTwoDigits(CounterSec)} />
    <div className='ml-20 items-center justify-items-center'>
    <button onClick={() => handleStop()} className='border shadow px-1 shadow-black text-sm border-b-slate-300 border-r-slate-300 bg-slate-100'>{isRunning ? 'Start' : 'Stop'}</button>
    </div>
  </div>)
  }
}
export default Status;