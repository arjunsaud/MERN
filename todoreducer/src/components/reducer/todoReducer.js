import { TODO_ACTIONS } from "../actions/todoAction";

const completeTodo = (state, id) => {
  return state.map((todo,index) => {
    if (index === id) {
      return { ...todo, completed: !todo.completed };
    }else return todo;
  });
};


const deleteTodo = (state, id) => {
  return state.filter((todo,index) => {
    if (index !== id) return true
    else return false;
  });
};

const editTodo=(state,data)=>{
  return state.map((todo,index)=>{
    if(index===data.index) return (todo.title=data.inp,{...todo})
    else return todo
  })
}

export  const TodoController = (state, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODOS:
      return ([{title:action.payload,completed:false},...state]);
    case TODO_ACTIONS.COMPLETE_TODO:
      return completeTodo(state, action.payload);
    case TODO_ACTIONS.EDIT_TODO:
      return editTodo(state,action.payload);
    case TODO_ACTIONS.FETCH_TODO:
      return [...action.payload];
    case TODO_ACTIONS.DELETE_TODO:
      return deleteTodo(state,action.payload)
  }
};
