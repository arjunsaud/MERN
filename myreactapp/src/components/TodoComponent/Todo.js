import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import {Row,Col,Container} from 'react-bootstrap'

function Todo() {
  const [todoList,setTodoList]=useState([])
  const addTodo=(todo)=>{
    setTodoList([...todoList,{name:todo,isCompleted:false}])
  }
  const clearTodo=()=>{
    setTodoList([])
  }
  
  const deleteTodo=(idx)=>{
    const newtodo=todoList.filter((todo,index)=>{
        if(index===idx) return false;
        else return true;
    })
    setTodoList(newtodo)
}
  const updateTodo=(idx)=>{
    const newTodo= todoList.map((todo,index)=>{
      if(index===idx) return {...todo,isCompleted:!todo.isCompleted}
      else return todo;
    })
  setTodoList(newTodo)
  }


  return (
    <>
    <Container className="mt-4 w-50 bg-success text-center">
      <TodoTitle/>
      <AddTodoList addTodo={addTodo}/>
      <hr style={{height:'5px',backgroundColor:"red" }}/>
      <TodoLists todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      <TodoListFooter clearTodo={clearTodo}/>
      </Container>
    </>
  );
}

function TodoTitle(){
  return(
    <h1>
    Todo App
  </h1>
  )
}

function AddTodoList({addTodo}){
  const [todo,setTodo]=useState("")

  const handleChange=(event)=>{
    setTodo(event.target.value)
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(todo){
    addTodo(todo)
    }
    else{
      alert("Todo Name is Required")
    }
    setTodo("")
  }

  return(
    <>
  <div className='d-flex justify-content-center mb-4'>
    <input type="text" className='form-control form-control-md' onChange={handleChange} placeholder='Add Todo List' name="todo" value={todo} required/>
    <button className="btn btn-outline-dark mx-2 text-white" onClick={handleSubmit} type="button">Add</button>

  </div>
  </>

  )
}
  function TodoLists({todoList,updateTodo,deleteTodo}){
    const toggleCompleted=(idx)=>{
    updateTodo(idx)
  }
  const handleDelete=(idx)=>{
    deleteTodo(idx)
  }

    return(
      <>
      { todoList.length>0?
        todoList.map((value,key)=>{
          return(
            <div key={key} className='text-start mx-2 my-2'>
            <Row className={value.isCompleted?"bg-dark rounded":"bg-info rounded"}>
              <Col>
                <h4 className='float-start my-2' style={{cursor:"pointer",textDecoration :value.isCompleted?"line-through":"none"}} onClick={()=>toggleCompleted(key)}>{value.name}</h4>
              <button className='float-end my-1 btn btn-danger' onClick={()=>handleDelete(key)}>X</button>
              </Col>
            </Row>
            </div>

          )
        }):"No Todo List Yet"
      }

      </>
    )
}

function TodoListFooter({clearTodo}){
  const handleClick=()=>{
    clearTodo()
  }
  return(
    <>
    <div className="d-flex justify-content-center mt-4" >
    <button className='btn btn-warning mb-4' onClick={handleClick}>Clear All</button>
    </div>
    </>
  )
}

export default Todo;
