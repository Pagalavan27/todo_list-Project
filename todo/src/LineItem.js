import React from 'react'
import { IoTrashSharp } from "react-icons/io5";

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='item'>
              <input 
                type="checkbox" 
                onChange={() => handleCheck(item.id)}
                checked= {item.checked}
              />
              <label
                style={(item.checked)?{textDecoration: 'line-through'} : null}
                onDoubleClick={() => handleCheck(item.id)}
              >{item.item}</label>
              <IoTrashSharp
                role='button'
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
                aria-label={`Delete ${item.item}`}
              />
    </li>
  )
}

export default LineItem