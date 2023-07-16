import React, { useEffect, useState } from 'react'

const RowColor = ({ITEM}) => {

  const [bgColor, setbgColor] = useState (' bg-white ')
  
  const colorTest = ({D}) => {
    console.log(D)
    switch (D.trim().toString()) {
      case "Dienstleistung":
        setbgColor(' bg-yellow-300 ')
        break;
      case "Software Medicare Verwaltung":
        setbgColor(' bg-blue-500 ')
        break;
      case "Software Trend XL":
        setbgColor(' bg-violet-300 ')
        break;
      case "Sonstiges":
        setbgColor(' bg-green-800 ')
        break;
      case "Software Medicare Pflege":
        setbgColor(' bg-orange-100 ')
        break;
      case "Software System 2000":
        setbgColor(' bg-sky-300 ')
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
    <input defaultChecked={ITEM.Rueckruf==1 ? true : false} className="" type="checkbox" /></td>
    <td className='border border-solid border-black'>{ITEM.RueckrufWer}</td>
    <td className='border border-solid border-black'>{ITEM.DatumRueckruf.date}</td>
    <td className='border border-solid border-black text-center'><input defaultChecked={ITEM.Erledigt==1 ? true : false} className="" type="checkbox" /></td>
    </tr>
    </tbody>
    
  )
}

export default RowColor