import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/Todoinput"
import { TodoList } from "./components/TodoList"


function App() {

  // const todos = [
  //   {input:"Hello! Add Your first todo!",Complete:true},
  //   {input:"Get the groceries!",Complete:false},
  //   {input:"Learn how to web desidn",Complete:false},
  //   {input:"say hi to gran gran",Complete:true}, 
  // ]

  const [todos,setTodos] = useState([
     {input:"Hello! Add Your first todo!",Complete:true}
  ])

  const [selectedTab, setSelectedTab] = useState("Open")

  function handeleAddTodo(newTodo) {
    const newTodoList = [...todos,{input:newTodo, Complete:false}]
    setTodos(newTodoList)
     handleSaveData(newTodoList)
  }

  function handelCompleteTodo(index) {
      let newTodoList=[...todos]
      let completedTodo = todos[index]
      completedTodo["complete"] = true
      newTodoList[index] = completedTodo 
      setTodos(newTodoList)
       handleSaveData(newTodoList)
  }

  function handelDeleteTodo(index) {
  let  newTodoList =todos.filter((val,valIndex)=>{
        return valIndex !== index 
      })
      setTodos(newTodoList)
       handleSaveData(newTodoList)
  } 
  
  function handleSaveData(currTodos){
    localStorage.setItem("todo-app",JSON.stringify({ todos:
    currTodos }))
  }
  
  useEffect(()=>{
    if(!localStorage || !localStorage.getItem("todo-app")){return}
    let db = JSON.parse(localStorage.getItem("todo-app"))
    setTodos(db.todos)
  },[])
  return (
    <> 
      <Header todos={todos}/>

      <Tabs
      selectedTab={selectedTab} 
      setSelectedTab={setSelectedTab} 
      todos={todos}
      />

       
      <TodoList 
      handelCompleteTodo={handelCompleteTodo}
      handelDeleteTodo={handelDeleteTodo}
      todos={todos}
      selectedTab={selectedTab}  
      />
      <TodoInput handeleAddTodo={handeleAddTodo}/>
    </>
  )
}

export default App
