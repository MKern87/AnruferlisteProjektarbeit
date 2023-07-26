import React, { useEffect, useState } from 'react'

const RowColor = ({ITEM}) => {

  const [bgColor, setbgColor] = useState (' bg-white ')
  console.log(ITEM)
  const colorTest = ({D}) => {
    //console.log(D)
    switch (D.trim().toString()) {
      case "Medicare":
        setbgColor(' bg-[#3F3F40] ')
        break;
      case "Software Medicare Pflege":
        setbgColor(' bg-[#007FC0] ')
        break;
      case "Software Medicare Verwaltung":
        setbgColor(' bg-[#FF7F01] ')
        break;
      case "Software Medicare Dienstplan":
        setbgColor(' bg-[#7F0080] ')
        break;
      case "Software Medicare Ambulant":
        setbgColor(' bg-[#00FF01] ')
        break;
      case "Software System 2000":
        setbgColor(' bg-[#FF0001] ')
        break;
      case "Software Sonstige":
        setbgColor(' bg-[#7F0001]')
        break;
      case "Hardware":
        setbgColor(' bg-[#7F7F01]')
        break;
      case "Software TNVP":
        setbgColor(' bg-[#BB1109]')
        break;
      case "Dienstleistung":
        setbgColor(' bg-[#000080] ')
        break;
      case "Software Trend XL":
        setbgColor(' bg-[#7FFF01] ')
        break;
      case "Sonstiges":
        setbgColor(' bg-[#7F8000] ')
        break;
      case "Fehler Medicare Pflege":
        setbgColor(' bg-[#010000] ')
        break;
      case "Fehler Medicare Verwaltung":
        setbgColor(' bg-[#010000] ')
        break;
      case "Fehler Medicare Dienstplan":
        setbgColor(' bg-[#010000] ')
        break;
      case "Fehler Medicare Ambulant":
        setbgColor(' bg-[#010000] ')
        break;
      case "Fehler TNVP":
        setbgColor(' bg-[#010000] ')
        break;
      case "Fehler Trend XL":
        setbgColor(' bg-[#010000] ')
        break;
      case "Fehler System 2000":
        setbgColor(' bg-[#010000] ')
        break;
      case "Webdesign":
        setbgColor(' bg-[#007F01] ')
        break;
      case "Fortbildung":
        setbgColor(' bg-[#7F7F01] ')
        break;
      case "Cleanin":
        setbgColor(' bg-[#FF7F40] ')
        break;
      case "Medicare App":
        setbgColor(' bg-[#318BA2] ')
        break;
      case "Patsy":
        setbgColor(' bg-[#FF7F40] ')
        break;
      case "Telefonie":
        setbgColor(' bg-[#206C1F] ')
        break;
      case "Panda":
        setbgColor(' bg-[#0F0F10] ')
        break;
      case "D A U":
        setbgColor(' bg-[#7F7F01] ')
        break;
      case "TI":
        setbgColor(' bg-[#030442] ')
        break;
      case "Backup":
        setbgColor(' bg-[#7F0100] ')
        break;
      case "Medicare CummoLino":
        setbgColor(' bg-[#7FFF01] ')
        break;
      case "Zeiterfassung":
        setbgColor(' bg-[#FF0080] ')
        break;
      case "Medicare Zeiterfassung":
        setbgColor(' bg-[#7F0100] ')
        break;
    
      default:
        break;
    }
  }

  useEffect(()=>{
    colorTest({D:ITEM.Kategorie_ID});
}, [])

  return (
    
    <tbody className=''>
      <tr className={bgColor}>
        <td className='border border-solid border-black'></td>
        <td className='border border-solid border-black'>{ITEM.Kunden_ID}</td>
        <td className='border border-solid border-black'>{ITEM.text}</td>
        <td className='border border-solid border-black'>{ITEM.Art_ID}</td>
        <td className='border border-solid border-black'>{ITEM.Mitarbeiter}</td>
        <td className='border border-solid border-black'>{ITEM.Kategorie_ID}</td>
        <td className='border border-solid border-black'>{ITEM.Datum.date}</td>
        <td className='border border-solid border-black text-center'>
        <input defaultChecked={ITEM.Rueckruf==1 ? true : false} className="" type="checkbox" /></td>
        <td className='border border-solid border-black'>{ITEM.RueckrufWer}</td>
        <td className='border border-solid border-black'>{ITEM.DatumRueckruf.date}</td>
        <td className='border border-solid border-black text-center'>{ITEM.Erledigt == 0 ? <input className="" type="checkbox" /> : <input className="" type="checkbox" checked/>}</td>
      </tr>
    </tbody>
    
  )
}

export default RowColor