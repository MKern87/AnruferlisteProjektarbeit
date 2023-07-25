import React, { useState, useEffect} from 'react'

const Baum = () => {

  const [bData, setbData] = useState([])

  
  const datenabrufBaum = async() => {
    const request = {
      method:'POST',
      headers: { 'Content-Type': 'aplication/json' },
      body:JSON.stringify({

      })
    };

    const d = await fetch ('http://localhost/Kundenliste/backend/baum.php', request);
    let e = await d.json();
    //console.log(e);

    if (e.bData.length>0){
      setbData(e.bData)
    }
    console.log(bData)
  }

  useEffect(() => {
    datenabrufBaum();
  }, [])


  return (
    <div>
      
    </div>
  )
}

export default Baum