import { useEffect, useState,useRef } from "react";

const useCustomHook = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodo = useRef("");

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonData = await data.json();
    setTodoList(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [todoList,setTodoList,addTodo];
};
export default useCustomHook;
