import React from 'react'

const StammdatenMitarbeiter = ({Name}) =>  {
  return (
      <>
        {
          <>
          {Name.map((item, index) => (
            <option key={item + index} value={item.Mitarbeiter}>{item.Mitarbeiter}</option>
          ))}
          </>
        }
      </>
  )
}

export default StammdatenMitarbeiter