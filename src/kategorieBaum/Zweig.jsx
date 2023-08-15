import React, { useEffect, useState } from 'react'
import Ast from './Ast';


const Zweig = ({ item, Parent_ID }) => {

  const [selected, setSelected] = useState(false);

  const hasChildren = item.ID ? true : false;

  const renderZweige = () => {
    if (hasChildren){
      const nextLvl = item.Parent_ID + 1;

      return item.ID.map((child) => {
        return <Zweig key={child.Parent_ID} item={child} level={nextLvl} />
      });
    }
    return null;
  };

  const toggleSelected = () => {
    setSelected(show => !show);
  }

  useEffect(() => {

  }, []);

  return (
    <>
      <Ast
        item={item}
        selected={selected}
        hasChildren={hasChildren}
        level={item.Parent_ID}
        onToggle={toggleSelected}
      />
      {selected && renderZweige()}
    </>
  )
}

export default Zweig