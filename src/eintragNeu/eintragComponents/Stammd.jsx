import React from "react";
import StammdatenMitarbeiter from "../../components/StammdatenMitarbeiter";
import StammdatenArt from "../../components/StammdatenArt";


const Stammd = () =>{
    
  
    return(
        <div className='grid col-start-1 col-span-1 border border-black mt-6 relative'>
          <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Stammdaten</p>
          <span className='ml-4 mt-2'>Kategorie:</span>
          <div className='ml-4'>N/A</div>
          <span className='ml-4 mt-8'>Mitarbeiter:
            <select className='text-left ml-2 border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='Mitarbeiter'>
            <option value='A'></option>
              <StammdatenMitarbeiter />
            </select>
          </span>
          <span className='ml-4'>Art:
            <select className='text-left ml-14 border border-solid relative border-black rounded-sm bg-white cursor-pointer' id='artname'>
            <option value='A'></option>
              <StammdatenArt />
            </select>
          </span>
        </div>
    )
    ;
}

export default Stammd;