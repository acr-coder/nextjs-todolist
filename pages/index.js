import { useState } from 'react'

const Index = () => {
    const [input, setInput] = useState("")
    const [todoList, setTodolist] = useState([])
    const handleChange = (e) => {
        e.preventDefault()        
        setInput(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        setTodolist([input, ...todoList])       
        
    }
    const handleDelete = (todo) => {

        const filteredlist = todoList.filter(todoitem => {
           return(
            todoList.indexOf(todoitem) !== todoList.indexOf(todo)
           ) 
        })
        setTodolist(filteredlist)
    }
    return ( 
        <div>
           <h1>Todo List</h1> 
           <form>
               <input type="text" value={input} onChange={handleChange} />
               <button disabled={input=== ""} onClick={handleSubmit}>Add</button>
               
           </form>
           <ul>
               {
                   todoList.map((todo,index)=>{
                       return(
                           <li key={index}>{todo} <button onClick={(e)=>{
                               e.preventDefault()
                               handleDelete(todo)
                           }}>Delete</button></li>
                       )
                   })
               }
           </ul>
        </div> 
    );
}
 
export default Index;