// import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from 'react'
function Todo() {

  const [todoList,setTodoList]=useState([])

  return (
    <>
      <TodoTitle/>
      <AddTodoList/>
    </>

  );
}

function TodoTitle(){
  return(
    <div className="d-flex justify-content-center mt-4 h1" >
    Todo App
  </div>
  )
}

function AddTodoList(){
  return(
<div className="input-group d-flex justify-content-center ">
  <div>
    <input type="text" className='form-control form-control-md' placeholder='Add Todo List' required/>
  </div>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary mx-2" type="button">Add</button>
  </div>
</div>
  )

  function TodoLists(){
    return(
      <>
      </>
    )
  }
}

export default Todo;
