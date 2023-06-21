import React from 'react'
import { useEffect, useState } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { TiArrowSortedDown } from 'react-icons/ti'
import Dropdown from 'react-dropdown'

const Stammdaten = () => {

  const mitarbeiter = [

    'Bernd',
    'Dom', 
    'Marco', 
    'Ben'
  ];
  const [defaultMitarbeiter, setDefaultMitarbeiter] = useState([]);

  return(
    <div className="w-full h-auto grid grid-cols-4 bg-slate-100 absolute m-2">
      <div className="grid grid-cols-span-1">
        <h1 className="flex font-bold float-left mb-3">Kunden</h1>
        <div className="flex">
          <button className="inline mx-1 mt-1"><FaArrowAltCircleRight /></button>
          <input className="inline border rounded" />
        </div>
        <p className="mt-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="w-full h-full col-start-2 col-span-3 pl-1">
          <div className="flex w-full col-span-1">
            <h1 className="font-bold float-left mb-3">Tagesberichte</h1>
          </div>

          <div className="flex col-span-1">
            <button className="border shadow shadow-black text-sm border-b-slate-300 border-r-slate-300 bg-slate-100 px-2">Optionen</button>
          </div>

          <div className="grid grid-cols-12 w-full h-auto bg-slate-200 py-4">
            <div className="col-span-1 flex flex-col items-center ml-1">
            <button className="border shadow shadow-black border-b-black border-r-black h-6 bg-slate-300 text-sm px-2">aktualisieren</button>
              <span className="flex flex-row my-2 text-sm">
                <input type="checkbox" />
                <p className="pl-1">Auto Aktual.</p>
              </span>
            <button className="h border shadow shadow-black bg-slate-300 text-sm border-b-black border-r-black px-2">zurücksetzen</button>
            </div>

          <div className="col-span-3 border bg-slate-200 text-sm mx-2">
            <div className="mb-2 h-12 border border-black px-2">
            <span className="mx-4 text-sm">Textsuche</span>
            <input className="w-full border border-black rounded" />
            </div>
            <div className="flex flex-row">
            <div className="w-1/2 border mr-2 border-black">
              <p className="mb-2 ml-1">Kunden filtern</p>
              <div className="flex flex-row items-start justify-start">
                <label className="mr-4 ml-4 mb-1" for="default-radio-1">
                <input type="radio" name='kunde' className=" text-blue-600 focus:ring-blue-500" />
                Ja</label>
                <label for="default-radio-2">
                <input checked type="radio" name='kunde' className=" text-blue-600 focus:ring-blue-500" />
                Nein </label>
              </div>
            </div>
            <div className="w-1/2 border border-black">
              <p className="mb-2 ml-1">Kategorie filtern</p>
              <div className="flex flex-row items-start justify-start">
                <label className="mr-4 ml-4 mb-1" for="default-radio-1">
                <input type="radio" name='kategorie' className="text-blue-600 focus:ring-blue-500" />
                Ja</label>
                <label for="default-radio-2">
                <input checked type="radio" name='kategorie' className="text-blue-600 focus:ring-blue-500" />
                Nein</label>
              </div>
            </div>
            </div>
          </div>

            <div className="col-span-3 w-10/12 border border-black">
              <p className="mx-4 text-sm">Stammdaten</p>
              <span className="text-sm items-center ml-1 flex flex-row my-2 mt-4">Mitarbeiter:
                <Dropdown className="items-center justify-items-center ml-2 bg-white px-4 border border-black rounded" options={mitarbeiter} value={defaultMitarbeiter} onChange={setDefaultMitarbeiter} />  
                <input className="items-center justify-items-center ml-1" type="checkbox" />
                <p className="pl-1">Alle</p>
              </span>
              <span className="text-sm items-center ml-1 flex flex-row my-2 mt-6">Art:
                <input className="items-center justify-items-center ml-14 border border-black rounded" />
                <input className="items-center justify-items-center ml-1" type="checkbox" />
                <p className="pl-1">Alle</p>
              </span>
            </div>

            <div className="col-span-2 border border-black w-full -ml-12">
              <p className="mx-4 text-sm">Datum</p>
              <span className="text-sm items-center ml-1 flex flex-row my-2 mt-4">Von: 
                <input className="items-center justify-items-center ml-2 border border-black rounded" />
              </span>
              <span className="text-sm items-center ml-1 flex flex-row my-2">Bis: 
                <input className="items-center justify-items-center ml-4 border border-black rounded"/>
              </span>
              <span className="flex flex-row my-2 text-sm justify-center">
                <input type="checkbox" />
                <p className="pl-1">aktuelle Berichte</p>
              </span>
            </div>

            <div className="col-span-2 border border-black w-full -ml-10 text-sm">
              <p className="mx-4 mb-4">Rückruf</p>
              <div className="flex flex-row items-stretch justify-items-stretch">
                <label className="mr-6 ml-6" for="default-radio-1">
                <input type="radio" name='rückruf' className="text-blue-600 focus:ring-blue-500" />
                Ja </label>
                <label className="mr-6" for="default-radio-2">
                <input type="radio" name='rückruf' className="text-blue-600 focus:ring-blue-500" />
                Nein </label>
                <label for="default-radio-3">
                <input type="radio" name='rückruf' className="text-blue-600 focus:ring-blue-500" />
                Alle </label>
              </div>
                <span className="items-center ml-1 flex flex-row mt-4 mb-1">Mitarbeiter
                  <input className="items-center justify-items-center ml-2 border border-black rounded" />
                  </span>
                  <input className="items-center justify-items-center ml-20" type="checkbox" /> Alle
            </div>

            <div className="col-span-1 border border-black w-full -ml-8 text-sm">
              <p className="mx-4">Erledigt</p>
              <div className="flex flex-col items-start ml-10 my-2">
                <label className="my-1" for="default-radio-1">
                <input type="radio" name='erledigt' className="text-blue-600 focus:ring-blue-500" />
                Ja</label>
                <label className="my-1" for="default-radio-2">
                <input type="radio" name='erledigt' className="text-blue-600 focus:ring-blue-500" />
                Nein</label>
                <label className="my-1" for="default-radio-3">
                <input type="radio" name='erledigt' className="text-blue-600 focus:ring-blue-500" />
                Alle</label>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Stammdaten
