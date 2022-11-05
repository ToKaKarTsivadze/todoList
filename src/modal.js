import React from 'react'

const styles = {
    position: 'fixed',
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
}

const stylesA = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0, .7)"
}

export default function Modal(props) {
  return (
    <div style={stylesA}>
        <div style={styles}>
        <p>
            ნამდვილად გსურთ შეცვალოთ? "{props.title}"
        </p>
        <button onClick={props.changeValue}> Yes </button>
        <button onClick={props.changeState}> cancel </button>
    </div>
    </div>
  )
}
