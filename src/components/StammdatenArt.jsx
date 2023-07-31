import React from 'react'

const StammdatenArt = ({Art}) => {
  return (
    <>
    {
      <>
      {Art.map((item, index) => (
        <option key={item + index} value={item.Art}>{item.Art}</option>
      ))}
      </>
    }
    </>
  )
}

export default StammdatenArt