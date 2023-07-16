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
    <div className='grid grid-cols-6'>
      Testtest
    </div>
    </>
  )
}

export default Eintrag