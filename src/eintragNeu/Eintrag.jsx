import React, { useEffect, useState } from 'react';
import EintragUpdate from './EintragUpdate';
import EintragNeu from './EintragNeu';

const Eintrag = ({tdata, HpData, Typ, Opener}) => {

  const [tag, setTag] = useState('');
  const [kunde, setKunde] = useState('');
  const [type, settype] = useState(Typ)
  
  useEffect (() => {
    setTag(tdata)
    setKunde(HpData)
    console.log(type)
  }, [Typ, tag, kunde,tdata])

  if(Typ == 'T'){
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
