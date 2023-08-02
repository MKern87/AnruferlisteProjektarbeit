import React from 'react'

const StammdatenMitarbeiterRR = ({Name}) =>  {
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

export default StammdatenMitarbeiterRR