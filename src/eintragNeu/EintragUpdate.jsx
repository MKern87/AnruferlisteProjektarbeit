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
      console.log(props.RueckrufWer)
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
  
          'KundenID': props.KundenID,
          'Kunde': props.Kunde,
          'Strasse': props.Strasse,
          'Plz': props.Plz,
          'Ort': props.Ort,
          'Tel': props.Tel,
          'Memo': props.Memo,
          'Kategorie': props.Kategorie,
          'KategorieText': props.Kategorie,
          'Mitarbeiter': props.Mitarbeiter_ID,
          'Art_ID': props.Art_ID,
          'Erledigt': props.Erledigt,
          'Datum': props.Datum,
          'Dauer': props.Dauer,
          'Rueckruf': props.Rueckruf,
          'DatumRueckruf': props.DatumRueckruf,
          'RueckrufWer': props.RueckrufWer,
          'text': props.text,
          'geloescht': props.geloescht,
          'parentID': props.parentID
        })
      };
      console.log(request)
      const h = await fetch ('http://localhost/Kundenliste/backend/eintrag.php', request);
      let i = await h.json();
      console.log(i)
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
            'Kategorie':tD.Kategorie_kID,
            'KategorieText':tD.Kategorie,
            'Mitarbeiter_ID':tD.Mitarbeiter_ID,
            'Art_ID':document.getElementById('artname').value,
            'Erledigt':document.getElementById('iserlidgt').value,
            'Datum':document.getElementById('date').value+'T'+document.getElementById('ttt').value+':00',
            'Dauer':document.getElementById('seconds').value,
            'Rueckruf':document.getElementById('rueckruf').checked,
            'DatumRueckruf':document.getElementById('daterr').value+'T'+document.getElementById('timerr').value+':00',
            'RueckrufWer':document.getElementById('rruf').value,
            'text':document.getElementById('textArea').value,
            'geloescht':tD.geloescht,
            'parentID':tD.parentID
          });
          stD('')
          }} className='hover cursor-pointer mr-1' />
          <RiEditBoxLine className='hover cursor-pointer mr-1' />
          <GiCancel onClick={() => O (false)} className='hover text-3xl cursor-pointer' />
        </div>

        <Kundeninfo H={tD} />
   
        <Baum />
   
        <Stammdaten S={tD}/>
   
        <Status ST={tD}/>
   
        <Rueckruf R={tD}/>
   
        <Beschreibung T={tD}/>
         
        <div className='grid col-start-5 col-span-2 row-span-4 mt-6 border border-black ml-2'>
          <input type="text" id='tArea' />
        </div>
      </div>
      </>
      )
  
    
}

export default EintragUpdate
