import React from "react";
import BeschreibungWord from "./BeschreibungWord";

const Beschreibung = ({T}) =>{

  if(T){
  return(
    <div className='grid col-span-4 row-span-4 mt-6 border border-black relative'>
      <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Beschreibung</p>
      <BeschreibungWord />
      <textarea className='resize-none px-2 py-5' type="text" id='textArea'>{T.text}</textarea>
    </div>
    )
  }else{
  return(
    <div className='grid col-span-4 row-span-4 mt-6 border border-black relative'>
      <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Beschreibung</p>
      <BeschreibungWord />
      <textarea className='resize-none px-2 py-5' type="text" id='textAreaN'></textarea>
    </div>
    )
  }
}

export default Beschreibung;