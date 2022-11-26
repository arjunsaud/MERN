import React, { createContext, useContext, useState } from 'react'
import useCustomHook from './useCustomHook'
import './todo.css'

const TodoContext=createContext()
const Todo = () => {
    const [id,edit,todos,todoItem,updateTodoList,saveUpdateTodo,Toggle,addTodo,deleteTodo,model]=useCustomHook()    
    return (
        <>
        <TodoTitle/>
        <TodoContext.Provider value={{id,edit,todos,todoItem,updateTodoList,saveUpdateTodo,Toggle,addTodo,deleteTodo,model}}>
            <AddTodo/>
            <ListTodo/>
            {model?<Popup/>:<></>}
        </TodoContext.Provider>
        </>
    )
}

const TodoTitle=()=>{
    return(
    <div style={{textAlign:"center", fontSize:"40px"}}>
        Todo Lists
    </div>)
}

const AddTodo=()=>{
    const context=useContext(TodoContext)
    const handleSubmit=(event)=>{
        event.preventDefault()    
        context.addTodo()  
    }
    return(<div className="addtodo">
        <form>
            <input ref={context.todoItem} type="text" placeholder="Enter Todo"/>
            <button onClick={handleSubmit}>Add</button>
        </form>        
    </div>)
}

const ListTodo=()=>{
    const context=useContext(TodoContext)
    return(<div className="todolists">
        {context.todos.map((todo,index)=>{
            return (
            <div key={index} className="todoitem" style={{opacity:todo.completed?".2" : "1"}}>
            <span onClick={()=>context.Toggle(index)}  style={{textDecoration:todo.completed?"red line-through" : "none"}}>{todo.title}</span>
            <button className='edit' onClick={()=>context.updateTodoList(index,todo.title)}>edit</button>
            <button className='delete' onClick={()=>context.deleteTodo(index)}>Delete</button>
            </div>)
        })}
    </div>)
}

const Popup=()=>{
    const context=useContext(TodoContext)
    const [inp,setInp]=useState(context.edit)
    const handleChange=(event)=>{
        setInp(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        context.saveUpdateTodo(inp,context.id)
        context.updateTodoList()
    }
    return(
        <>
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <h2>Edit</h2>
              <form>
                <input type="text" onChange={handleChange} value={inp}/>
                <button onClick={handleSubmit}>Update</button>
              </form>
              <button className="close-modal" onClick={context.updateTodoList}>
                X
              </button>
            </div>
          </div>
      </>
    )
}
export default Todo