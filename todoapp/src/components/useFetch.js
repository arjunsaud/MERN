import { useState,useEffect } from 'react'

const useFetch = () => {
    
    const [todoList, setTodoList] = useState([])

    const [popup,setPopup]=useState("")
    const [index,setIndex]=useState()

    const fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        const jsonData = await data.json()
        setTodoList(jsonData)
    }
    useEffect(() => {
        fetchData()
    }, [])

  return [todoList,setTodoList,popup,setPopup,index,setIndex]

}

export default useFetch