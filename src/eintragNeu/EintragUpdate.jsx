import React, { useEffect, useState } from 'react';
import Baum from './eintragComponents/Baum'
import {GiCancel} from 'react-icons/gi'
import { BsCheckSquareFill } from 'react-icons/bs';
import { RiEditBoxLine } from 'react-icons/ri';
import Kundeninfo from './eintragComponents/Kundeninfo';
import Stammdaten from './eintragComponents/Stammd';
import Status from './eintragComponents/Status';
import Rueckruf from './eintragComponents/Rueckruf';
import Beschreibung from './eintragComponents/Beschreibung';

const EintragUpdate = ({tD, O, stD}) => {
    
    const updateData = async(props) => {
        console.log(props)
    }
  useEffect (() => {
    
    console.log(tD)
  }, [tD])

 
    return (
      <>
      <div className='fixed top-0 left-0 text-sm w-screen bg-gray-100 grid grid-cols-6 h-screen border border-black px-2 py-2'>
        <div className='w-screen  col-span-6 flex mb-[-100px]'>
          <BsCheckSquareFill onClick={()=>{updateData({
            'KundenID':tD.ID,
            'Kunde':tD.Kunden_ID,
            'Strasse':tD.Strasse,
            'Plz':tD.Plz,
            'Ort':tD.Ort,
            'Tel':tD.Telefon,
            'Memo':tD.Memo,
            'KategorieText':tD.Kategorie_ID,
            'MitarbeiterID':document.getElementById('Mitarbeiter').value,
            'ArtID':document.getElementById('artname').value,
            'statusErledigt':document.getElementById('erledigt').checked,
            'statusStart':document.getElementById('date').value,
            'statusDauer':document.getElementById('seconds').value,
            'isRueckruf':document.getElementById('rueckruf').checked,
            'isDatumR':document.getElementById('daterr').value,
            'RueckrufWer':document.getElementById('rruf').value,
            'text':tD.text
          });
          stD('')
          }} className='hover cursor-pointer mr-1' />
          <RiEditBoxLine className='hover cursor-pointer mr-1' />
          <GiCancel onClick={() => O (false)} className='hover text-3xl cursor-pointer' />
        </div>

        <Kundeninfo H={tD} />
   
        <Baum />
   
        <Stammdaten />
   
        <Status />
   
        <Rueckruf />
   
        <Beschreibung />
         
        <div className='grid col-start-5 col-span-2 row-span-4 mt-6 border border-black ml-2'>
          <input type="text" id='tArea' />
        </div>
      </div>
      </>
      )
  
    
}

export default EintragUpdate
