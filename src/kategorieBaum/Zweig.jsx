import React, { useEffect, useState } from 'react'
import Ast from './Ast';


const Zweig = ({ item, level }) => {

  const [selected, setSelected] = useState(item.selected ?? false);

  const hasChildren = item.children && item.children.length !==0;

  const renderZweige = () => {
    if (hasChildren){
      const newLevel = level + 1;

      return item.children.map((child) => {
        return <Zweig key={child.Mitarbeiter_ID} item={child} level={newLevel} />
      });
    }

    return null;
  };

  useEffect(() => {

  }, []);

  const toggleSelected = () => {
    setSelected(prev => !prev);
  };

  return (
    <>
      <Ast
        item={item}
        selected={selected}
        hasChildren={hasChildren}
        level={level}
        onToggle={toggleSelected}
      />

      {selected && renderZweige()}
    </>
  )
}

export default Zweig