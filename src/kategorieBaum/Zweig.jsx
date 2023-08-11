import React, { useEffect, useState } from 'react'
import Ast from './Ast';


const Zweig = ({ item, Parent_ID }) => {

  const [selected, setSelected] = useState(item.selected ?? false);

  const hasChildren = item.Parent_ID && item.Parent_ID.length !==0;

  const renderZweige = () => {
    if (hasChildren){
      const newParent_ID = Parent_ID + 1;

      return item.Parent_ID.map((child) => {
        return <Zweig key={child.Mitarbeiter_ID} item={child} level={newParent_ID} />
      });
    }

    return null;
  };

  const toggleSelected = () => {
    setSelected(prev => !prev);
  }

  useEffect(() => {

  }, []);

  return (
    <>
      <Ast
        item={item}
        selected={selected}
        hasChildren={hasChildren}
        level={Parent_ID}
        onToggle={toggleSelected}
      />

      {selected && renderZweige()}
    </>
  )
}

export default Zweig