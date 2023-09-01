import React, { useEffect, useState } from 'react';
import EintragUpdate from './EintragUpdate';
import EintragNeu from './EintragNeu';

const Eintrag = ({tdata, HpData, Opener}) => {

  const [tag, setTag] = useState('');
  const [kunde, setKunde] = useState('');
  
  useEffect (() => {
    setTag(tdata)
    setKunde(HpData)

  }, [tag, kunde, tdata])

  if(localStorage.getItem('T') == 'T'){
  return (
    <>
    <EintragUpdate tD={tdata} stD={setTag} O={Opener}/>
    </>
    )
  }else{
  return (
    <>
    <EintragNeu HP={kunde} sK={setKunde} O={Opener} />
    </>
    )
  }
    
}

export default Eintrag
