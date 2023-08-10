import React, { useEffect, useState } from 'react'

const Ast = ({ item, hasChildren, level, onToggle }) => {





  useEffect(() => {

  }, []);

  return (
    <div>
      {item.label}

      {hasChildren && <button onClick={onToggle}>toggle</button>}
    </div>
  )
}

export default Ast