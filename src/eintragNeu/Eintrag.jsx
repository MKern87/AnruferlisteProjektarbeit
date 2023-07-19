import React from 'react'

const Eintrag = () => {

  const menuItems = [
    {
      title: 'Stammdaten',
      key: '/'
    },
    {
      title: 'Eintrag',
      key: '/Eintrag'
    }
  ]

  
  return (
    <>
    <div>
      {menuItems.map((item, index) => (
        <a key={item+index} href={item.key}>{item.title}</a>
      ))}
    </div>
    <div className=' text-sm w-screen bg-gray-100 absolute grid grid-cols-6 grid-rows-4 h-full border border-black px-2 py-2'>
      <div className='grid col-span-3 border border-black relative mt-6'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Kundeninfo</p>
      </div>
      <div className='grid col-span-1 row-span-2 border border-black ml-2 mt-6'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Kategorie</p>
      </div>
      <div className='grid col-start-1 col-span-1 border border-black mt-6 relative'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Stammdaten</p>
        <span className='ml-4 mt-4'>Kategorie:</span>
        <span className='ml-4 mt-4'>Mitarbeiter:
          <input className='mx-1 border border-black shadow-inner' type="text" />
        </span>
        <span className='ml-4'>Art:
          <input className='ml-14 border border-black shadow-inner' type="text" />
        </span>
      </div>
      <div className='grid col-start-2 col-span-1 border border-black mt-6 relative ml-2'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Status</p>
        <span className='ml-4 mt-2'>
        <input className='' type="checkbox"/>
        </span>
      </div>
      <div className='grid col-start-3 col-span-1 border border-black mt-6 relative ml-2'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Rückruf</p>
      </div>
      <div className='grid col-span-4 row-span-4 mt-6 border border-black relative'>
        <p className='absolute inset-x -mt-3 ml-4 bg-gray-100 px-1'>Beschreibung</p>
        <input type="text" />
      </div>
      <div className='grid col-start-5 col-span-2 row-span-4 mt-6 border border-black ml-2'>
        <input type="text" />
      </div>
    </div>
    </>
  )
}

export default Eintrag