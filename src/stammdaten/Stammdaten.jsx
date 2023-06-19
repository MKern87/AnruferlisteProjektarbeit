import React from "react"
import {FaArrowAltCircleRight} from 'react-icons/fa'

const Stammdaten = () => {

  return(
    <div className="w-full h-auto grid grid-cols-4 bg-slate-100">
      <div className="grid grid-cols-span-1">
        <h1 className="flex font-bold float-left mb-3">Kunden</h1>
        <div>
          <FaArrowAltCircleRight className="inline mx-1 mb-1"/>
          <input className="inline border rounded" />
        </div>
        <p className="mt-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="w-full col-start-2 col-span-3 pl-1">
          <div className="flex w-full col-span-1">
            <h1 className="font-bold float-left mb-3">Tagesberichte</h1>
          </div>

          <div className="flex col-span-1">
            <button className="border rounded bg-slate-300 px-2">Optionen</button>
          </div>

          <div className="flex col-auto bg-slate-200">
            <button className="border rounded bg-slate-300 px-2">aktualisieren</button>
            <input type="checkbox" />Auto Aktual.
            <button className="border rounded bg-slate-300 px-2">zurücksetzen</button>
          <div className="border border-black">Textsuche
            <input className="flex" />
          </div>
          

          <div className="border border-black">Kunden Item
            <div className="flex items-center">
              <input type="radio" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
              <label for="default-radio-1">Ja</label>
            </div>
            <div className="flex items-center">
              <input checked type="radio" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
              <label for="default-radio-2">Nein</label>
            </div>
            </div>

            <div className="border border-black">Kategorie Item
            <div className="flex items-center">
              <input type="radio" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
              <label for="default-radio-1">Ja</label>
            </div>
            <div className="flex items-center">
              <input checked type="radio" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
              <label for="default-radio-2">Nein</label>
            </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Stammdaten