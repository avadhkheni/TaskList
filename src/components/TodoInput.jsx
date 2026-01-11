import { useState } from "react"

export function TodoInput(props) {//props is comin ftom App / fun handeleAddTodo(newTodo)

    const { handeleAddTodo } = props
    const [inputValue,setInputValue]= useState("")
   
    return(
        <div className="input-container">
            <input value={inputValue} onChange={(e)=>{
        setInputValue(e.target.value)
    }} placeholder="Add task" />
            <button onClick={()=>{
                if(!inputValue){return}
                handeleAddTodo(inputValue)
                setInputValue("")
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}