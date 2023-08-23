import React from 'react'
import { useState, useEffect } from 'react'

const StammdatenMitarbeiter = () =>  {

  const [data, setData] = useState([]);
  
   const datenabruf = async() => {
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           
        })
    };
    
    const d = await fetch('http://localhost/Kundenliste/backend/mitarbeiter.php', request);
    let e = await d.json();
    //console.log(e);

    if (e.data.length>0) {
      setData(e.data)
    }
  }
  
  useEffect(() => {
    datenabruf();
  }, [])
  
  return (
          data.map((item, index) => (
            <option key={item + index} value={item.Mitarbeiter.trim()}>{item.Mitarbeiter}</option>
          ))
  )
}

export default StammdatenMitarbeiter