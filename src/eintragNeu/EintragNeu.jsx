import React, { useEffect, useState } from 'react';
import Baum from './eintragComponents/Baum'
import {GiCancel} from 'react-icons/gi'
import { BsCheckSquareFill } from 'react-icons/bs';
//import { RiEditBoxLine } from 'react-icons/ri';
import Kundeninfo from './eintragComponents/Kundeninfo';
import Stammdaten from './eintragComponents/Stammd';
import Status from './eintragComponents/Status';
import Rueckruf from './eintragComponents/Rueckruf';
import Beschreibung from './eintragComponents/Beschreibung';
import FetcherO from './eintragComponents/FetcherO';

const EintragNeu = ({HP, O, sK}) => {

  const [isUpdated, setisUpdated] = useState(false);

    async function names(props){
      console.log(props)
      let Katstring;   
      for (let i=0; i<props.length; i++){
        const b= await FetcherO(props[i]);
            Katstring +=(b==undefined)?'':b+' / '; 
      };
      
      return Katstring;
    }
    
    const createData = async(props) => {
      console.log(props)
        const T=await names(props.Kategorie);
        console.log(T.replace('undefined',''));
        const request = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'ID': props.ID,
            //'Kunde_ID': props.Kunde_ID,
            'Kategorie_ID': props.Kategorie[props.Kategorie.length-1],
            'Mitarbeiter_ID': parseInt(props.Mitarbeiter_ID),
            'Art_ID': parseInt(props.Art_ID),
            'Datum': props.Datum,
            'Dauer': props.Dauer,
            'Rueckruf': (props.Rueckruf == true) ? 1 : 0,
            'text': props.text,
            'Erledigt': (props.Erledigt == 'true') ? 1 : 0,
            'Kategorie': await T.replace('undefined',''),
            'DatumRueckruf': props.DatumRueckruf,
            'RueckrufWer': (props.RueckrufWer==""||null)?"":parseInt(props.RueckrufWer),
            'geloescht': props.geloescht,
            'parentID': props.parentID
          })
        };
        console.log(request)
        const v = await fetch ('http://localhost/Kundenliste/backend/eintragneu.php', request);
        let w = await v.json();
        console.log(w)
        
        if(true){
          setisUpdated(true);
          setTimeout(() => {
            setisUpdated(false);
            O(false);
            location.reload();
          },2000);
        }
    }
    
    useEffect(() => {
      
    },[])
  
 
    return (
      <>
      <div className='fixed md:overflow-hidden overflow-scroll top-0 left-0 text-sm w-screen bg-gray-100 grid grid-cols-6 h-screen border border-black px-2 py-2'>
        <div className='w-screen  col-span-6 flex mb-[-100px]'>
          <BsCheckSquareFill onClick={() => {let N=Array(); 
          (document.getElementById('ebene1'))?N.push(document.getElementById('ebene1').value):'';
          (document.getElementById('ebene2')&&document.getElementById('ebene2').value)?N.push(document.getElementById('ebene2').value):'';
          (document.getElementById('ebene3')&&document.getElementById('ebene3').value)?N.push(document.getElementById('ebene3').value):'';
          console.log(N);
           createData({
            'ID':HP.ID,
            'Kategorie_ID':N[N.length-1],
            'Mitarbeiter_ID':document.getElementById('MitarbeiterN').value,
            'Art_ID':document.getElementById('artnameN').value,
            'Datum':document.getElementById('dateN').value+' '+document.getElementById('tttN').value,
            'Dauer':document.getElementById('secondsN').value,
            'Rueckruf':document.getElementById('rueckrufN').checked,
            'text':document.getElementById('textAreaN').value,
            'Erledigt':document.getElementById('iserlidgtN').value,
            'Kategorie':N,
            'DatumRueckruf':document.getElementById('daterrN').value+' '+document.getElementById('timerrN').value,
            'RueckrufWer':document.getElementById('rrufN').value,
            'geloescht':'',
            'parentID':''
          });
          sK('');
          }} className='text-3xl hover cursor-pointer mr-1' />
          {//<RiEditBoxLine className='hover cursor-pointer mr-1' />
          }
          <GiCancel onClick={() => O (false)} className='hover text-3xl cursor-pointer' />
        </div>

        <Kundeninfo H={HP} />
   
        <Baum />
   
        <Stammdaten />
   
        <Status ST={undefined}/>
        
        <Rueckruf R={null}/>
        
        <Beschreibung />
         
        {//<div className='grid col-start-5 col-span-2 row-span-4 mt-6 border border-black ml-2'>
         // <input type="text" id='tAreaN' />
         // </div>
        }
      </div>
      </>
      )
  
    
}

export default EintragNeu
