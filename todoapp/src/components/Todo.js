import React, { useState } from 'react'
import './todo.css'
import Popup from './Popup';
import useFetch from './useFetch';

const Todo = () => {


    const [todoList,setTodoList,popup,setPopup,index,setIndex]=useFetch()

    const addTodo = (todo) => {
        console.log(todo);
        setTodoList([{ title: todo, isStriked: false }, ...todoList])
    }
    const deleteTodo = (idx) => {
        const newtodo = todoList.filter((todo, index) => {
            if (index !== idx) return true
            else return false
        })
        setTodoList(newtodo)
    }
    const updateTodo = (idx) => {
        todoList.map((todo, index) => {
            if (index === idx){
                setPopup(todo.title)
                setIndex(index)
            }
            return todo
        })
    }

    const changeTodo=(data,idx)=>{
        const newTodo = todoList.map((todo, index) => {
            if (index === idx) return (todo.title=data,{...todo})
            else return todo
        })
        setTodoList(newTodo)
    }
    
    const clearPopup=()=>{
        setPopup("")
    }

    const strikeTodo = (idx) => {
        const newTodo = todoList.map((todo, index) => {
            if (index === idx) return { ...todo, isStriked: !todo.isStriked }
            else return todo;
        })
        setTodoList(newTodo)
    }
    const clearAll = () => {
        setTodoList([])
    }
    return (
        <>
            <Title />
            {popup.length>0?<Popup message={popup} index={index} clearPopup={clearPopup} changeTodo={changeTodo}/>:<></>}
            <AddTodo addTodo={addTodo} />
            <ClearAll clearAll={clearAll} />
            <TodoLists todoList={todoList} updateTodo={updateTodo} strikeTodo={strikeTodo} deleteTodo={deleteTodo} />
        </>
    )
}

//title
const Title = () => {
    return (<div className='title'>Todo Lists</div>)
}

const ClearAll = ({ clearAll }) => {
    const handleClick = () => {
        clearAll()
    }
    return (
        <div className='clear-section'>
            <button className='clear-btn' onClick={handleClick}>Clear All</button>
        </div>

    )
}

//for adding todo in list
const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState("")
    const handleChange = (event) => {
        setTodo(event.target.value)
    }
    const handleSubmit = () => {
        if (todo) {
            addTodo(todo)
        }
        setTodo("")
    }
    return (
        <div className='addtodo'>
            <input type="text" onChange={handleChange} placeholder='Add Todo' name="todo" value={todo} required />
            <button onClick={handleSubmit} type="button">Add</button>
        </div>)
}

//listing out todo lists
const TodoLists = ({ todoList, deleteTodo, updateTodo, strikeTodo }) => {
    const handleDelete = (index) => {
        deleteTodo(index)
    }
    const handleEdit = (index) => {
        updateTodo(index)
    }
    const handleStrike = (index) => {
        strikeTodo(index)
    }
    return (
        <div className='todoBody'>
            {todoList.length > 0 ?
                todoList.map((value, index) => {
                    return (
                        <div key={index} className="todoListItems">
                            <section style={{ opacity: value.isStriked ? "0.3" : "1" }}>
                                <div style={{ cursor: "pointer", textDecoration: value.isStriked ? "red line-through" : "none" }} onClick={() => handleStrike(index)}>
                                    {((value.title).length>30)?(value.title).slice(0, 35):value.title}</div>
                                <div>
                                    <button className='btn-delete' onClick={() => handleDelete(index)}>Remove</button>
                                    <button className='btn-edit' onClick={() => handleEdit(index)}>Edit</button>
                                </div>
                            </section>
                        </div>
                    )
                }) : (<div style={{ textAlign: 'center' }}>No Todo</div>)
            }
        </div>
    )
}

export default Todo
