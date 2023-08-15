import React, { useEffect, useState } from 'react'

const RowColor = ({ITEM, popUp, dTagesbericht, T}) => {

  const [bgColor, setbgColor] = useState (' bg-white ')
  
  
  //console.log(ITEM)
  const colorTest = ({D}) => {
    //console.log(D)
    switch (D.trim().toString()) {
      case "Medicare":
        setbgColor(' bg-[#3F3F40] hover:brightness-75 ')
        break;
      case "Software Medicare Pflege":
        setbgColor(' bg-[#007FC0] hover:brightness-75 ')
        break;
      case "Software Medicare Verwaltung":
        setbgColor(' bg-[#FF7F01] hover:brightness-75 ')
        break;
      case "Software Medicare Dienstplan":
        setbgColor(' bg-[#7F0080] hover:brightness-75 ')
        break;
      case "Software Medicare Ambulant":
        setbgColor(' bg-[#00FF01] hover:brightness-75 ')
        break;
      case "Software System 2000":
        setbgColor(' bg-[#FF0001] hover:brightness-75 ')
        break;
      case "Software Sonstige":
        setbgColor(' bg-[#7F0001] hover:brightness-75 ')
        break;
      case "Hardware":
        setbgColor(' bg-[#7F7F01] hover:brightness-75 ')
        break;
      case "Software TNVP":
        setbgColor(' bg-[#BB1059] hover:brightness-75 ')
        break;
      case "Dienstleistung":
        setbgColor(' bg-[#000080] hover:brightness-75 ')
        break;
      case "Software Trend XL":
        setbgColor(' bg-[#7FFF01] hover:brightness-75 ')
        break;
      case "Sonstiges":
        setbgColor(' bg-[#7F8000] hover:brightness-75 ')
        break;
      case "Fehler Medicare Pflege":
        setbgColor(' bg-[#010000] hover:brightness-75 ')
        break;
      case "Fehler Medicare Verwaltung":
        setbgColor(' bg-[#010000] hover:brightness-75 ')
        break;
      case "Fehler Medicare Dienstplan":
        setbgColor(' bg-[#010000] hover:brightness-75 ')
        break;
      case "Fehler Medicare Ambulant":
        setbgColor(' bg-[#010000] hover:brightness-75 ')
        break;
      case "Fehler TNVP":
        setbgColor(' bg-[#010000] hover:brightness-75 ')
        break;
      case "Fehler Trend XL":
        setbgColor(' bg-[#010000] hover:brightness-75 ')
        break;
      case "Fehler System 2000":
        setbgColor(' bg-[#010000] hover:brightness-75 ')
        break;
      case "Webdesign":
        setbgColor(' bg-[#007F01] hover:brightness-75 ')
        break;
      case "Fortbildung":
        setbgColor(' bg-[#7F7F01] hover:brightness-75 ')
        break;
      case "Cleanin":
        setbgColor(' bg-[#FF7F40] hover:brightness-75 ')
        break;
      case "Medicare App":
        setbgColor(' bg-[#318BA2] hover:brightness-75 ')
        break;
      case "Patsy":
        setbgColor(' bg-[#FF7F40] hover:brightness-75 ')
        break;
      case "Telefonie":
        setbgColor(' bg-[#206C1F] hover:brightness-75 ')
        break;
      case "Panda":
        setbgColor(' bg-[#0F0F10] hover:brightness-75 ')
        break;
      case "D A U":
        setbgColor(' bg-[#7F7F01] hover:brightness-75 ')
        break;
      case "TI":
        setbgColor(' bg-[#030442] hover:brightness-75 ')
        break;
      case "Backup":
        setbgColor(' bg-[#7F0100] hover:brightness-75 ')
        break;
      case "Medicare CummoLino":
        setbgColor(' bg-[#7FFF01] hover:brightness-75 ')
        break;
      case "Zeiterfassung":
        setbgColor(' bg-[#FF0080] hover:brightness-75 ')
        break;
      case "Medicare Zeiterfassung":
        setbgColor(' bg-[#7F0100] hover:brightness-75 ')
        break;
    
      default:
        break;
    }
  }

  useEffect(()=>{
    colorTest({D:ITEM.Kategorie_ID});
}, [colorTest])

  return (
    <div onClick={() => {popUp(true); T('T'); dTagesbericht(ITEM)}} className={bgColor+ 'md:h-auto h-auto w-full cursor-pointer grid md:grid-cols-[180px_auto_50px_50px_100px_100px_120px_120px_70px_100px_120px_70px] grid-cols-3 items-center justify-items-center'}>
      <div className='py-1 w-full md:col-span-1 col-span-3 md:border-0 border-b border-gray-400 pl-2'>{ITEM.Kunden_ID}</div>
      <div className='md:border-x border-x-0 md:border-b-0 border-b border-gray-400 py-1 w-full md:col-span-3 col-span-3 pl-2'>{ITEM.text.length>200? ITEM.text.substr(0, 156)+' ...':ITEM.text}</div>
      <div className='py-1 w-full col-span-1 pl-2 md:block hidden '>{ITEM.Art_ID}</div>
      <div className='md:border-x border-r border-gray-400 py-1 w-full col-span-1 pl-2 '>{ITEM.Mitarbeiter}</div>
      <div className='py-1 w-full md:col-span-1 col-span-2 pl-2 '>{ITEM.Kategorie_ID}</div>
      <div className='md:border-l border-l-0 md:border-y-0 border-y border-gray-400 py-1 w-full md:col-span-1 col-span-3 pl-2 '>{ITEM.Datum.date}</div>
      <div className=
      {
        (ITEM.Rückruf == 1 && ITEM.Erledigt == 0) ? 
          ' bg-red-600 flex flex-col h-full items-center justify-center md:border-x border-r border-gray-400 py-2 w-full col-span-1 ' 
          : 
          ' text-center flex flex-col items-center justify-center md:border-x border-r border-gray-400 py-2 w-full col-span-1 '
      }>
      {
        ITEM.Rückruf == 0 ? 
        <input disabled checked={false} className="" type="checkbox"/>
        :
        <input disabled checked className="" type="checkbox"/>
      }
      </div>
      <div className='py-1 w-full col-span-1 pl-2 md:block hidden '>{ITEM.Mitarbeitername}</div>
      <div className='border-x border-gray-400 py-1 w-full col-span-1 pl-2 md:block hidden '>{ITEM.DatumRueckruf.date}</div>              
      <div className='flex flex-col items-center justify-center border-0 border-gray-400 py-1 w-full col-span-1'>
      {
        ITEM.Erledigt == 0 ? 
        <input disabled checked={false} className="" type="checkbox"/>
        :
        <input disabled checked className="" type="checkbox"/>
      }
      </div>
    </div>
    
    
  )
}

export default RowColor