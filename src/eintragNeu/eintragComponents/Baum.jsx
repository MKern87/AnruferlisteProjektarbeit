import React, { useState, useEffect} from 'react'


const Baum = () => {

  const [bData, setbData] = useState([])
  const [secsel,setsecsel] = useState(true);
  const [ebene1,setebene1] = useState(0);
  const [thirdsel,setthirdsel] = useState(true);
  const [ebene2,setebene2] = useState(0);

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
    }
  }


  useEffect(() => {
    datenabrufBaum();
    
  }, [])


  return (
    <div className='ml-1 border border-black w-2/3'>
      <select id='ebene1' onChange={()=>{setebene1(document.getElementById('ebene1').value);setsecsel(false);}}>
      {bData.map((item) => (
        item.Parent_ID == 0 ?
        <option value={item.ID}>{item.Kategorie}</option>
        :
        ''
      ))
      }
      </select>
      {
        secsel?
        ''
        :
          <select id='ebene2' onChange={() => {setebene2(document.getElementById('ebene2').value);setthirdsel(false);}}>
          {bData.map((item) => (
            item.Parent_ID == ebene1 ?
            <option value={item.ID}>{item.Kategorie}</option>
            :
            ''
          ))
          }
          </select>
      }
      {
        thirdsel?
        ''
        :
          <select id='ebene3' onChange={() => {setebene2(document.getElementById('ebene3').value);setthirdsel(false);}}>
          {bData.map((item) => (
            item.Parent_ID == ebene2 ?
            <option value={item.ID}>{item.Kategorie}</option>
            :
            ''
          ))
          }
          </select>
      }
    </div>
  )


}

export default Baum