import React, { useEffect, useState} from 'react'
import HP from './Handelsp';

const DatenHandelspartner = ({search}) => {
  
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
            return search.toLowerCase() === ''
            ? item
            : (
              item.Suchbegriff.toLowerCase().includes(search.toLowerCase()) 
              || item.Name1.toLowerCase().includes(search.toLowerCase()) 
              //|| item.Name2.toLowerCase().includes(search.toLowerCase())
              || item.Straße.toLowerCase().includes(search.toLowerCase())
              || item.Plz.toLowerCase().includes(search.toLowerCase())
              || item.Ort.toLowerCase().includes(search.toLowerCase())
              //|| item.Telefon.toLowerCase().includes(search.toLowerCase())
              ) 
          }).map((item, index) =>(
            <HP key={item+index} ITEMHP={item} />
          ))
        } 
      </>
      :
      <>
      Keine Daten!
      </>
    }
    </>
  )
}

export default DatenHandelspartner