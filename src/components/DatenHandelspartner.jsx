import React, { useEffect, useState} from 'react'
import HP from './Handelsp';

const DatenHandelspartner = ({search, popUp}) => {
  
  const [HpData, setHpdata] = useState([]);

//////// Datenbankabfrage Handelspartner //////// 

  const datenhandelsp = async() => {
    const request = {
      method:'POST',
      headers: { 'Content-Type': 'aplication/json' },
      body:JSON.stringify({

      })
    };

    const j = await fetch ('http://localhost/Kundenliste/backend/handelspartner.php', request);
    let k = await j.json();
    //console.log(k);

//////// Daten vorhanden ? ////////

    if (k.HpData.length>0){
      setHpdata(k.HpData)
    }
}

  useEffect(() => {
    datenhandelsp();
  }, [])
  

//////// Filter Kundensuche //////// 
  return (
    <>
    {HpData.length>0 ?
      <>
        {
          HpData.filter((item) => {
            //console.log(HpData)
            return search.toLowerCase() === ''
            ? item
            : (
              item.Suchbegriff.toLowerCase().includes(search.toLowerCase()) 
              || item.Name1.toLowerCase().includes(search.toLowerCase()) 
              //|| (item.Name2 == "") ? "" : item.Name2.toLowerCase().includes(search.toLowerCase())
              //|| (item.Strasse == "") ? "" : item.Strasse.toLowerCase().includes(search.toLowerCase())
              //|| (item.Plz == "") ? "" : item.Plz.toLowerCase().includes(search.toLowerCase())
              //|| (item.Ort == "") ? "" : item.Ort.toLowerCase().includes(search.toLowerCase())
              //|| (item.Telefon == "") ? "" : item.Telefon.toLowerCase().includes(search.toLowerCase())
              ) 
          }).map((item, index) =>(
            <HP key={item+index} ITEMHP={item} popUp={popUp} />
          ))
        } 
      </>
      :
      <>
      <div className='w-full grid grid-cols-3 items-center justify-items-center py-10'>
        <div className='text-center py-2 w-full col-span-3 pl-2'>Keine Daten vorhanden</div>
      </div>
      </>
    }
    </>
  )
}

export default DatenHandelspartner