import React, { useEffect, useState } from 'react'


const Ast = ({ item, hasChildren, level, onToggle }) => {



  useEffect(() => {

  }, []);

  return (
    <div style={{ paddingLeft: `${level * 10}px`}}>
      {item.Kategorie}
      {hasChildren && <button onClick={onToggle}>+</button>}
    </div>
  )
}

export default Ast