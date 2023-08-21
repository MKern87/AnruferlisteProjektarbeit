import React from 'react'

const AutoAktualZurueck = () => {
  
  const aktualisieren = () => {
    window.location.reload(false);
  }
  
  return (
    <div className="w-full md:col-span-1 col-span-2 flex md:flex-col flex-row items-center justify-around h-full md:px-0 px-2 md:mb-0 mb-4">
            <button onClick={aktualisieren} className="border flex-1 shadow shadow-black border-b-black border-r-black bg-gray-300 text-sm p-[2px] px-2">
              <p className='mb-1'>aktualisieren</p>
            </button>
              <span className="flex flex-row my-2 text-sm md:ml-0 ml-4  flex-2">
                <input defaultChecked={false} type="checkbox" />
                <p className="pl-1">Auto Aktual.</p>
              </span>
            <button className="md:block hidden border flex-3 shadow shadow-black bg-gray-300 text-sm border-b-black border-r-black p-[2px] px-2 mb-1">
              <p className='mb-1'>zurücksetzen</p>
            </button>
          </div>
  )
}

export default AutoAktualZurueck