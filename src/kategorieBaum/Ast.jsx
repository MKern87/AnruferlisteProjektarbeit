import React, { useEffect, useState } from 'react'

const Ast = ({ item, hasChildren, Parent_ID, onToggle }) => {





  useEffect(() => {

  }, []);

  return (
    <div style={{ paddingLeft: `${Parent_ID * 16}px`}}>
      {item.Kategorie}

      {hasChildren && <button onClick={onToggle}>toggle</button>}
    </div>
  )
}

export default Ast