import React, { useState } from 'react'

function TodoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
        setTasks([...tasks, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

  return (
    <div className='todo-list'>
        <h1>To-Do-list</h1>
        <div className='input-text'>
            <input 
            type="text"
            placeholder='enter a task'
            value = {newTask}
            onChange={handleInputChange} />
            <button className='add-bttn' onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index) => 
                <li key = {index}>
                    <span className="text">{task}</span>
                    <button className="delete-bttn" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="Move-bttn" onClick={() => moveTaskUp(index)}>Move Up</button>
                    <button className="Move-bttn" onClick={() => moveTaskDown(index)}>Move Down</button>
                </li>
            )}
        </ol>
    </div>
  )
}

export default TodoList