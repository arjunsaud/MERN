import React, { useState } from 'react'
import './todo.css'
const Popup = (props) => {
    const { message, clearPopup, changeTodo, index } = props

    const [inputData, setInputData] = useState(message)

    const handleSubmit = (event) => {
        setInputData(event.target.value)
    }
    const handleChange = (event) => {
        event.preventDefault()
        changeTodo(inputData, index)
        setTimeout(clearPopup,500);
    }

    return (
        <div className="popup">
            <button className="close" onClick={clearPopup}>&times;</button>
            <div className='content' style={{ textAlign: "center" }}>
                <input type="text" onChange={handleSubmit} name="inputdata" value={inputData} /><br />
                <button onClick={handleChange}>update</button>
            </div>
        </div>

    )
}

export default Popup