import React, { useState } from 'react'

const TodoItem = (props) => {

    const [edit, setEdit] = useState(false);
    const [editedValue, setEditedValue] = useState("")
  return (
    <div>
        <p>
            {props.item}
        </p>
        {edit && <> <input onChange={(e) => setEditedValue(e.target.value) }  placeholder={props.item}  /> <button onClick={ () => props.changeWord(editedValue) }>ok</button> </>}
        <button onClick={() => props.deleteItem(props.id)} type='button' > delete </button>
        {!edit &&  <button onClick={() => setEdit(true) } type='button' >  edit  </button>}
    </div>
  )
}


export default TodoItem