import React, { useState } from 'react'
import Modal from './modal';

const TodoItem = (props) => {

    const [edit, setEdit] = useState(false);
    const [editedValue, setEditedValue] = useState(props.item)
    const [modal, setModal] = useState(false)

  return (  
    <div>
        <p>
            {props.item}
        </p>
        {edit && <> <input value={editedValue} onChange={(e) => setEditedValue(e.target.value) }/> <button onClick={ () => setModal(true) }>ok</button>  </>}
    
        {!edit && <> <button onClick={() => setEdit(true) } >  edit  </button>      <button onClick={() => props.deleteItem(props.id)} > delete </button> </>}
        {modal && <Modal title = {props.item}   changeValue={() => props.changeWord(editedValue)} changeState = { () => {setModal(false); setEdit(false); setEditedValue(props.item)}}  />  }
    </div>
  )
}




export default TodoItem