import React, { useEffect, useState } from 'react'
import Ast from './Ast';


const Zweig = ({ item, Parent_ID }) => {

  const [selected, setSelected] = useState(false);

  const hasChildren = item.ID ? item.Parent_ID : +1;

  const renderZweige = () => {
    if (hasChildren){
      const nextLvl = item.Parent_ID + 1;

      return item.Parent_ID.map((child) => {
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
        level={Parent_ID}
        onToggle={toggleSelected}
      />
      {selected && renderZweige()}
    </>
  )
}

export default Zweig