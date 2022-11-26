import { TODO_ACTIONS } from './actions/todoAction'
import { useReducer,useEffect, useRef, useState } from 'react'
import { TodoController } from './reducer/todoReducer'
import { initialState } from './Store'

const useCustomHook = () => {
    const [todos, dispatch] = useReducer(TodoController,initialState)

    const [model,setModel]=useState(false)

    const todoItem=useRef("")
    const [edit,setEdit]=useState("")
    const [id,setId]=useState()
    const fetchTodos = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        dispatch({type: TODO_ACTIONS.FETCH_TODO, payload : data})
      };

    useEffect(() => {    
        fetchTodos()
    }, [])

    const updateTodoList=(index,value)=>{
        setModel(!model)
        setEdit(value)
        setId(index)
    }
    const saveUpdateTodo=(inp,index)=>{
        const data={inp,index}
        dispatch({type:TODO_ACTIONS.EDIT_TODO,payload:data})
    }

    const Toggle=(idx)=>{
        dispatch({type:TODO_ACTIONS.COMPLETE_TODO,payload:idx})
    }

    const addTodo=()=>{
        dispatch({type:TODO_ACTIONS.ADD_TODOS,payload:todoItem.current.value})
    }
    const deleteTodo=(idx)=>{
        dispatch({type:TODO_ACTIONS.DELETE_TODO,payload:idx})

    }

  return [id,edit,todos,todoItem,updateTodoList,saveUpdateTodo,Toggle,addTodo,deleteTodo,model]
}

export default useCustomHook