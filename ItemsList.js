import React from 'react'
import LineItems from './LineItems';
const ItemsList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
        {items.map((it)=>(
         <LineItems
            it={it}
            key={it.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
         />
        ))}
      </ul>
  )
}

export default ItemsList