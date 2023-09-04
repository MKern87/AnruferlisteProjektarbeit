import React from "react";
import StammdatenMitarbeiter from "../../components/StammdatenMitarbeiter";
import StammdatenArt from "../../components/StammdatenArt";
import Baum from "./Baum";


const Stammd = ({S}) =>{
    
  if(S){
    return(
        <div className='grid col-start-1 col-span-1 border border-black mt-6 relative'>
          <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Stammdaten</p>
          <span className='ml-4 mt-2'>Kategorie:</span>
          <div className='ml-4'>{S.Kategorie}</div>
          <span className='ml-4 mt-8'>Mitarbeiter:
            <select className='text-left ml-2 border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='Mitarbeiter'>
            <option value={S.Mitarbeiter_ID}>{S.Mitarbeiter}</option>
              <StammdatenMitarbeiter T={'I'} />
            </select>
          </span>
          <span className='ml-4'>Art:
            <select className='text-left ml-14 border border-solid relative border-black rounded-sm bg-white cursor-pointer' id='artname'>
            <option value={S.Art_aid}>{S.Art_ID}</option>
              <StammdatenArt T={'N'}/>
            </select>
          </span>
        </div>
    )
    }else{
      return(
        <div className='grid col-start-1 col-span-1 border border-black mt-6 relative'>
          <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Stammdaten</p>
          <span className='ml-4 mt-2'>Kategorie:</span>
          <div className='ml-4'>{<Baum />}</div>
          <span className='ml-4 mt-8'>Mitarbeiter:
            <select className='text-left ml-2 border border-solid relative shadow-inner border-black rounded-sm bg-white cursor-pointer' id='MitarbeiterN'>
            <option value='A'></option>
              <StammdatenMitarbeiter />
            </select>
          </span>
          <span className='ml-4'>Art:
            <select className='text-left ml-14 border border-solid relative border-black rounded-sm bg-white cursor-pointer' id='artnameN'>
            <option value='A'></option>
              <StammdatenArt T={'I'}/>
            </select>
          </span>
        </div>
      )
      ;
    }
}

export default Stammd;