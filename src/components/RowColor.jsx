import React, { useEffect, useState } from 'react'

const RowColor = ({ITEM}) => {

  const [bgColor, setbgColor] = useState (' bg-white ')
  
  
  //console.log(ITEM)
  const colorTest = ({D}) => {
    //console.log(D)
    switch (D.trim().toString()) {
      case "Medicare":
        setbgColor(' bg-[#3F3F40] hover:brightness-75 hover:scale-105')
        break;
      case "Software Medicare Pflege":
        setbgColor(' bg-[#007FC0] hover:brightness-75 hover:scale-105')
        break;
      case "Software Medicare Verwaltung":
        setbgColor(' bg-[#FF7F01] hover:brightness-75 hover:scale-105')
        break;
      case "Software Medicare Dienstplan":
        setbgColor(' bg-[#7F0080] hover:brightness-75 hover:scale-105')
        break;
      case "Software Medicare Ambulant":
        setbgColor(' bg-[#00FF01] hover:brightness-75 hover:scale-105')
        break;
      case "Software System 2000":
        setbgColor(' bg-[#FF0001] hover:brightness-75 hover:scale-105')
        break;
      case "Software Sonstige":
        setbgColor(' bg-[#7F0001] hover:brightness-75 hover:scale-105')
        break;
      case "Hardware":
        setbgColor(' bg-[#7F7F01] hover:brightness-75 hover:scale-105')
        break;
      case "Software TNVP":
        setbgColor(' bg-[#BB1059] hover:brightness-75 hover:scale-105')
        break;
      case "Dienstleistung":
        setbgColor(' bg-[#000080] hover:brightness-75 hover:scale-105')
        break;
      case "Software Trend XL":
        setbgColor(' bg-[#7FFF01] hover:brightness-75 hover:scale-105')
        break;
      case "Sonstiges":
        setbgColor(' bg-[#7F8000] hover:brightness-75 hover:scale-105')
        break;
      case "Fehler Medicare Pflege":
        setbgColor(' bg-[#010000] hover:brightness-75 hover:scale-105')
        break;
      case "Fehler Medicare Verwaltung":
        setbgColor(' bg-[#010000] hover:brightness-75 hover:scale-105')
        break;
      case "Fehler Medicare Dienstplan":
        setbgColor(' bg-[#010000] hover:brightness-75 hover:scale-105')
        break;
      case "Fehler Medicare Ambulant":
        setbgColor(' bg-[#010000] hover:brightness-75 hover:scale-105')
        break;
      case "Fehler TNVP":
        setbgColor(' bg-[#010000] hover:brightness-75 hover:scale-105')
        break;
      case "Fehler Trend XL":
        setbgColor(' bg-[#010000] hover:brightness-75 hover:scale-105')
        break;
      case "Fehler System 2000":
        setbgColor(' bg-[#010000] hover:brightness-75 hover:scale-105')
        break;
      case "Webdesign":
        setbgColor(' bg-[#007F01] hover:brightness-75 hover:scale-105')
        break;
      case "Fortbildung":
        setbgColor(' bg-[#7F7F01] hover:brightness-75 hover:scale-105')
        break;
      case "Cleanin":
        setbgColor(' bg-[#FF7F40] hover:brightness-75 hover:scale-105')
        break;
      case "Medicare App":
        setbgColor(' bg-[#318BA2] hover:brightness-75 hover:scale-105')
        break;
      case "Patsy":
        setbgColor(' bg-[#FF7F40] hover:brightness-75 hover:scale-105')
        break;
      case "Telefonie":
        setbgColor(' bg-[#206C1F] hover:brightness-75 hover:scale-105')
        break;
      case "Panda":
        setbgColor(' bg-[#0F0F10] hover:brightness-75 hover:scale-105')
        break;
      case "D A U":
        setbgColor(' bg-[#7F7F01] hover:brightness-75 hover:scale-105')
        break;
      case "TI":
        setbgColor(' bg-[#030442] hover:brightness-75 hover:scale-105')
        break;
      case "Backup":
        setbgColor(' bg-[#7F0100] hover:brightness-75 hover:scale-105')
        break;
      case "Medicare CummoLino":
        setbgColor(' bg-[#7FFF01] hover:brightness-75 hover:scale-105')
        break;
      case "Zeiterfassung":
        setbgColor(' bg-[#FF0080] hover:brightness-75 hover:scale-105')
        break;
      case "Medicare Zeiterfassung":
        setbgColor(' bg-[#7F0100] hover:brightness-75 hover:scale-105')
        break;
    
      default:
        break;
    }
  }

  useEffect(()=>{
    colorTest({D:ITEM.Kategorie_ID});
}, [])

  return (
    
    <tbody>
      <tr className={bgColor}>
        <td className='border border-solid border-black'></td>
        <td className='border border-solid border-black'>{ITEM.Kunden_ID}</td>
        <td className='border border-solid border-black'>{ITEM.text}</td>
        <td className='border border-solid border-black'>{ITEM.Art_ID}</td>
        <td className='border border-solid border-black'>{ITEM.Mitarbeiter}</td>
        <td className='border border-solid border-black'>{ITEM.Kategorie_ID}</td>
        <td className='border border-solid border-black'>{ITEM.Datum.date}</td>
        <td className='border border-solid border-black text-center'>
          <input disabled defaultChecked={ITEM.Rueckruf === 1 ? true : false} className="" type="checkbox" />{ITEM.Rueckruf}</td>
        <td className='border border-solid border-black'>{ITEM.Mitarbeitername}</td>
        <td className='border border-solid border-black'>{ITEM.DatumRueckruf.date}</td>
        <td className='border border-solid border-black text-center'>
          <input disabled defaultChecked={ITEM.Erledigt === 1 ? true : false} className="" type="checkbox"/>{ITEM.Erledigt}
        </td>
      </tr>
    </tbody>
    
  )
}

export default RowColor