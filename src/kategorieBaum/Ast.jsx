import React, { useEffect, useState } from 'react'

const Ast = ({ item, hasChildren, level, onToggle }) => {





  useEffect(() => {

  }, []);

  return (
    <div style={{ paddingLeft: `${level * 16}px`}}>
      {item.Kategorie}

      {hasChildren && <button onClick={onToggle}>toggle</button>}
    </div>
  )
}

export default Ast