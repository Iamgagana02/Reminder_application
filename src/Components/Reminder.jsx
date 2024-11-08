import React,{useState} from 'react'
import '../Css_files/Reminder.css'

function Reminder() {
  const[newreminder,setNewreminder]=useState('')
  const[reminder,setReminder]=useState([])
  const handle_input=(event)=>{
    setNewreminder(event.target.value)
  }
  const handle_button=()=>{
    if (newreminder.trim()){
      setReminder([...reminder,newreminder])
      setNewreminder('')
    }
  }
  const handle_delete=(index)=>{
    setReminder(reminder.filter((_, itemIndex) => itemIndex !== index));
  }
  return (
    <div>
      <div className="container">
        <h1>Reminder App</h1>
        <div className="inputContainer">
          <input type='text'value={newreminder} placeholder='enter here' onChange={handle_input}/>
          <button onClick={handle_button}>SET</button>
        </div>
        <ul className='list_container'>
          {
            reminder.map((item,index)=>(
              <li key={index}>{item}<button onClick={()=>{handle_delete(index)}}>delete</button></li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Reminder
