import React, { useEffect, useState ,useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTodos,complete,deletetodo,edittodo,addtodo,openPopup} from "../slice/todoSlice";
import "./todo.css"
const Todo = () => {
  const dispatch=useDispatch()
  const { loading,isPopup } = useSelector((state) => {
    return state.todos;
  });
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return <>
  <h3 className="text-center">Todo Lists</h3>
  {isPopup?<Edit/>:<></>}
  <AddTodo/>
  {!loading ? <ListTodo /> : "loading"}

  </>;
};

const AddTodo=()=>{
  const dispatch = useDispatch();
  const item=useRef()
  const handleAdd=(event)=>{
    event.preventDefault()
    if(item.current.value){
      dispatch(addtodo({title:item.current.value,completed:false}))
      item.current.value=""
    }
  }
  return(
  <div className="text-center my-4">
    <form>
    <input type="text" ref={item} placeholder="Enter Todo" required/>
    <button className="mx-2" onClick={handleAdd}>Add</button>
    </form>
  </div>
  )
}

const ListTodo = () => {
  const dispatch = useDispatch();
  const { todos} = useSelector((state) => {
    return state.todos;
  });

  const handleClick=(index)=>{
    dispatch(complete(index))
  }
  const handleEdit=(index,value)=>{
    dispatch(openPopup({open:true,index,value}))
  }

  const handleDelete=(index)=>{
    dispatch(deletetodo(index))
  }
  return (
    <div>
      {todos.length > 0
        ? todos.map((value, index) => {
            return (
              <div key={value.id} className="todocontainer text-center m-2">
                <div style={{opacity:value.completed?".2":"1"}}>
                <span onClick={()=>handleClick(index)} className="todotitle mx-2" style={{textDecoration: value.completed ? "red line-through" : "none"}}>{value.title}</span>
                <button onClick={()=>handleEdit(index,value.title)} className="btn btn-warning my-2">Edit</button>
                <button onClick={()=>handleDelete(index)} className="btn btn-danger my-2 mx-2">Delete</button>
                </div>
              </div>
            );
          })
        : "No Todos"}
    </div>
  );
};

const Edit=()=>{
  const dispatch = useDispatch();
  const {todoEditValue,todoEditIndex}= useSelector((state) => {
    return state.todos;
  });
  const [inp,setInp]=useState(todoEditValue)
  const handleChange=(event)=>{
    setInp(event.target.value)
  }
  const handleSubmit=(event)=>{
      event.preventDefault()
      dispatch(edittodo(({title:inp,todoEditIndex})))
      dispatch(openPopup({open:false}))
  }
  const handleClose=()=>{
    dispatch(openPopup({open:false}))
  }
  return(
      <div className="model">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Edit</h2>
            <form>
              <input type="text" value={inp} onChange={handleChange}/>
              <button onClick={handleSubmit}>Update</button>
            </form>
            <button className="close-modal" onClick={handleClose}>
              X
            </button>
          </div>
    </div>
  )
}

export default Todo;
