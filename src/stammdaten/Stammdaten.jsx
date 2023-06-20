import React from "react"
import {FaArrowAltCircleRight} from 'react-icons/fa'

const Stammdaten = () => {

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
            <button className="border shadow shadow-black text-sm border-b-slate-400 border-r-slate-400 bg-slate-300 px-2">Optionen</button>
          </div>

          <div className="grid grid-cols-12 w-full h-auto bg-slate-200 py-4">
            <div className="col-span-1 flex flex-col items-start">
            <button className="border shadow shadow-black border-b-black border-r-black h-6 bg-slate-300 text-sm px-2">aktualisieren</button>
              <span className="h-8 text-sm">
                <input className="h-8" type="checkbox" />Auto Aktual.
              </span>
            <button className="h-6 border shadow shadow-black bg-slate-300 text-sm border-b-black border-r-black px-2">zurücksetzen</button>
            </div>

          <div className="col-span-3 border bg-slate-200 border-black mx-2">
            <span className="mx-4 text-sm">Textsuche</span>
            <input className="border border-black rounded w-full mx-2" />
            <div className="border border-black">Kunden filtern
              <div className="flex flex-row items-start justify-start">
                <label for="default-radio-1">
                <input type="radio" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                Ja</label>
                <label for="default-radio-2">
                <input checked type="radio" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                Nein </label>
              </div>
            </div>
            <div className="border border-black">Kategorie filtern
              <div className="flex flex-row items-start justify-start">
                <label for="default-radio-1">
                <input type="radio" className="text-blue-600 focus:ring-blue-500" />
                Ja</label>
                <label for="default-radio-2">
                <input checked type="radio" className="text-blue-600 focus:ring-blue-500" />
                Nein</label>
              </div>
            </div>
          </div>

            <div className="col-span-3 border border-black">
              <p className="text-sm">Stammdaten</p>
              <span className="text-sm">Mitarbeiter
                <input className="items-center justify-items-center h-8" />
                <input className="items-center justify-items-center h-8" type="checkbox" />Alle
              </span>
              <span className="text-sm">
              <p className="text-sm mt-4">Art:</p>
                <input className="items-center justify-items-center h-8" />
                <input className="items-center justify-items-center h-8" type="checkbox" />Alle
              </span>
            </div>

            <div className="col-span-2">Datum
              <span>Von: <input /></span>
              <span>Bis: <input /></span>
              <input className="items-center justify-items-center h-8" type="checkbox" />aktuelle Berichte
            </div>

            <div className="col-span-2">Rückruf
              <div className="flex flex-row items-start justify-start">
                <label for="default-radio-1">
                <input type="radio" className="text-blue-600 focus:ring-blue-500" />
                Ja</label>
                <label for="default-radio-2">
                <input type="radio" className="text-blue-600 focus:ring-blue-500" />
                Nein</label>
              </div>
            <div className="flex flex-row items-start justify-start">
              <label for="default-radio-3">
              <input type="radio" className="text-blue-600 focus:ring-blue-500" />
              Alle </label>
              <span>Mitarbeiter</span>
              <input className="items-center justify-items-center h-8" />
              <input className="items-center justify-items-center h-8" type="checkbox" />Alle
            </div>
            </div>

            <div className="col-span-1">Erledigt
              <div className=" items-center">
                <input type="radio" className="text-blue-600 focus:ring-blue-500" />
                <label for="default-radio-1">Ja</label>
              </div>
              <div className=" items-center">
                <input type="radio" className="text-blue-600 focus:ring-blue-500" />
                <label for="default-radio-2">Nein</label>
              </div>
              <div className=" items-center">
                <input type="radio" className="text-blue-600 focus:ring-blue-500" />
                <label for="default-radio-3">Alle</label>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Stammdaten
