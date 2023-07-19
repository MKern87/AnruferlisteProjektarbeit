import React, { useEffect, useState } from 'react'

const Handelsp = ({ITEMHP}) => {

  const [bgColor2, setbgColor2] = useState (' bg-gray ')

  useEffect(()=>{
  }, [])

  return (
    
    <tbody>
    <tr className={bgColor2}>
    <td className='border border-solid border-black'>{ITEMHP.Suchbegriff}</td>
    <td className='border border-solid border-black'>{ITEMHP.Name1}</td>
    <td className='border border-solid border-black'>{ITEMHP.Name2}</td>
    <td className='border border-solid border-black'>{ITEMHP.Straße}</td>
    <td className='border border-solid border-black'>{ITEMHP.Plz}</td>
    <td className='border border-solid border-black'>{ITEMHP.Ort}</td>
    <td className='border border-solid border-black'>{ITEMHP.Telefon}</td>
    </tr>
    </tbody>
    
  )
}

export default Handelsp