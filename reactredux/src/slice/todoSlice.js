import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllTodos = createAsyncThunk(
  "todo/fetchAllTodos",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    return todos;
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    loading: true,
    isPopup: false,
    todoEditValue: "",
    todoEditIndex: "",
    todos: [],
  },
  reducers: {
    openPopup: (state, { payload }) => {
      state.isPopup = payload.open;
      state.todoEditValue = payload.value;
      state.todoEditIndex = payload.index;
    },
    addtodo: (state, { payload }) => {
      return { todos: [payload, ...state.todos] };
    },
    complete: (state, { payload }) => {
      const todos = state.todos;
      const newTodo = todos.map((todo, idx) => {
        if (idx === payload) return { ...todo, completed: !todo.completed };
        return todo;
      });
      return { ...state, todos: newTodo };
    },
    edittodo: (state, { payload }) => {
      console.log(payload);
      state.todos.map((todo, index) => {
        if (index === payload.todoEditIndex) {
          return (todo.title = payload.title,todo);
        }
        return todo;
      });
    },

    deletetodo: (state, { payload }) => {
      const data = state.todos.filter((todo, index) => {
        if (index !== payload) {
          return true;
        }
        return false
      });
      return { todos: [...data] };
    },
  },

  extraReducers: {
    [fetchAllTodos.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllTodos.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.todos = payload;
    },
  },
});

export const { openPopup, addtodo, complete, deletetodo, edittodo } =
  todoSlice.actions;
export default todoSlice.reducer;
