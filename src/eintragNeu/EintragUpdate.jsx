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

    const [isUpdated, setisUpdated] = useState(false);
    
    const updateData = async(props) => {
 console.log(props.ID)
 console.log(props.Kunde_ID)
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'ID': props.ID,
          'Kunde_ID': props.Kunde_ID,
          'Kategorie_ID': props.Kategorie_ID,
          'Mitarbeiter_ID': parseInt(props.Mitarbeiter_ID),
          'Art_ID': parseInt(props.Art_ID),
          'Datum': props.Datum,
          'Dauer': props.Dauer,
          'Rueckruf': (props.Rueckruf == true) ? 1 : 0,
          'text': props.text,
          'Erledigt': (props.Erledigt == 'true') ? 1 : 0,
          'Kategorie': props.Kategorie.trim(),
          'DatumRueckruf': props.DatumRueckruf,
          'RueckrufWer': (props.RueckrufWer==""||null)?"":parseInt(props.RueckrufWer),
          'geloescht': props.geloescht,
          'parentID': props.parentID
        })
      };
      console.log(JSON.parse(request.body.toString()))
      const h = await fetch ('http://localhost/Kundenliste/backend/eintragupdate.php', request);
      let i = await h.json();
      console.log(i);
      
      if(true){
        setisUpdated(true);
        setTimeout(() => {
          setisUpdated(false);
          O(false);
          location.reload();
        },2000);
      }
}
  useEffect (() => {
    console.log(tD)
     
  }, [tD])

 
    return (
      <>
      <div className='fixed top-0 left-0 text-sm w-screen bg-gray-100 grid grid-cols-6 h-screen border border-black px-2 py-2'>
        <div className='w-screen  col-span-6 flex mb-[-100px]'>
          <BsCheckSquareFill onClick={()=>{updateData({
            'ID':tD.ID,
            'Kunde_ID':tD.kid,
            'Kategorie_ID':tD.Kategorie_kID,
            'Mitarbeiter_ID':document.getElementById('Mitarbeiter').value,
            'Art_ID':document.getElementById('artname').value,
            'Datum':document.getElementById('date').value+' '+document.getElementById('ttt').value,
            'Dauer':document.getElementById('seconds').value,
            'Rueckruf':document.getElementById('rueckruf').checked,
            'text':document.getElementById('textArea').value,
            'Erledigt':document.getElementById('iserlidgt').value,
            'Kategorie':tD.Kategorie_ID,
            'DatumRueckruf':document.getElementById('daterr').value+' '+document.getElementById('timerr').value,
            'RueckrufWer':document.getElementById('rruf').value,
            'geloescht':tD.geloescht,
            'parentID':tD.parentID
          });
          stD('')
          }} className='hover cursor-pointer mr-1' />
          <RiEditBoxLine className='hover cursor-pointer mr-1' />
          <GiCancel onClick={() => O (false)} className='hover text-3xl cursor-pointer' />
        </div>

        <Kundeninfo H={tD} />
   
        {//<Baum />
        }
   
        <Stammdaten S={tD}/>
   
        <Status ST={tD}/>
   
        <Rueckruf R={tD}/>
   
        <Beschreibung T={tD}/>
         
        {//<div className='grid col-start-5 col-span-2 row-span-4 mt-6 border border-black ml-2'>
         // <input type="text" id='tArea' />
         // </div>
        }
      </div>
      </>
      )
  
    
}

export default EintragUpdate
