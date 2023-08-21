import React from 'react'
import { useState, useEffect } from 'react'

const StammdatenArt = () => {

  const [artData, setArtData] = useState([]);
  
  //////// Datenabruf Art (kommunikation) ////////

  const datenart = async() => {
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

        })
    };
    
    const f = await fetch('http://localhost/Kundenliste/backend/art.php', request);
    let g = await f.json();
    //console.log(g);

  if (g.ArtData.length>0) {
    setArtData(g.ArtData)
  }
  
  }

  useEffect(() => {
    datenart();
  }, [])
  
  return (
    <>
    {
      <>
      {artData.map((item, index) => (
        <option key={item + index} value={item.Art}>{item.Art}</option>
      ))}
      </>
    }
    </>
  )
}

export default StammdatenArt