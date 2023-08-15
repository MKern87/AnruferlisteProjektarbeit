import React, { useState, useEffect} from 'react'
import Zweig from './Zweig'

const Baum = () => {

  const [bData, setbData] = useState([])

  
  const datenabrufBaum = async() => {
    const request = {
      method:'POST',
      headers: { 'Content-Type': 'aplication/json' },
      body:JSON.stringify({

      })
    };

    const x = await fetch ('http://localhost/Kundenliste/backend/baum.php', request);
    let y = await x.json();
    console.log(y);

    if (y.bData.length>0){
      setbData(y.bData)
      //console.log(bData)
    }
  }

  useEffect(() => {
    datenabrufBaum();
  }, [])


  return (
    <div className='ml-1'>
      {bData.map((item) => <Zweig key={item.Parent_ID} item={item} level={item.Parent_ID} />)}
    </div>
  )


}

export default Baum