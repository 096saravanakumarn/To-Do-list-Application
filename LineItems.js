import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

const LineItems = ({it,handleCheck,handleDelete}) => {
  return (
    <li className="item">
    <input type="checkbox" onChange={()=>handleCheck(it.id)} checked={it.checked} />
    <label style={(it.checked)?{textDecoration:"line-through"}:null}  onDoubleClick={()=>handleCheck(it.id)} > {it.item}</label>
    <FaRegTrashAlt
    onClick={()=>handleDelete(it.id)}
    role="button"
    tabIndex="0"
    aria-label={`Delete ${it.item}`}
    />
  </li>
  )
}

export default LineItems