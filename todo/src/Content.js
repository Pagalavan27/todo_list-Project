import React from 'react'
import ItemsList from './ItemsList';


const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <>
      {(items.length) ? (
        <ItemsList
            items = {items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
        />
      ): (
        <p>
          Your list is empty
          <br></br>
          <span>&#128533;</span>
        </p>
        
      )}
        
    </>
    
  )
}

export default Content