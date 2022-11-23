import React, { createContext, useContext } from "react";
import useCustomHook from "./useCustomHook";
import "./todo.css"

const TodoContext=createContext()

const Todo = () => {
  const [todoList,setTodoList,addTodo] = useCustomHook();
  return (<>
  <Title/>
  <TodoContext.Provider value={{todoList,setTodoList,addTodo}}>
  <AddTodo/>
  <ListTodo/>
  </TodoContext.Provider>
  </>);
};

const Title = () => {
  return <div className="title">Todo Lists</div>;
};

const AddTodo = () => {
    const context=useContext(TodoContext)
    const handleClick=(event)=>{
        event.preventDefault()
        const todo=context.addTodo.current.value
        if(context.addTodo.current.value){
            context.setTodoList([{title:todo,completed:false},...context.todoList])
            context.addTodo.current.value=null
        }
        }
    return (
    <div className="addtodo">
        <form>
            <input type="text" ref={context.addTodo} placeholder="Enter Todo" required />
            <button onClick={handleClick}>Add</button>
        </form>
    </div>
  );
};
const ListTodo = () => {
    const context=useContext(TodoContext)
    const handleClick=(idx)=>{
        const newdata=context.todoList.map((value,index)=>{
            if(idx===index) return {...value,completed:!value.completed}
            else return value
        })
        context.setTodoList(newdata)
    }

    return(
        <div className="todolist">
            {
                context.todoList.length>0?context.todoList.map((value,index)=>{
                    return(
                        <div key={index} onClick={()=>handleClick(index)} className="listitems" style={{backgroundColor:value.completed?"yellow":"blue", opacity:value.completed?".2":"1"}}>
                        <span className="listtitle" style={{textDecoration:value.completed?"red line-through" : "none"}}>{value.title}</span>
                        <span className="liststatus">{value.completed?"Completed":"Pending"}</span>
                        </div>
                    )
                }):"No Todo List"
            }
        </div>
    )
};
export default Todo;
