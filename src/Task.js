import React from 'react'
import './Task.css'
const Task = props => {
    const { task, deleteTask, editTask } = props;
    const { id, name } = task;

    return (
        <li>
            <div className='id'>
                {id}
            </div>
            <div className='name'>
                {name}
            </div>
            <div className='container'>
                <button className="delete" onClick={() => deleteTask(id)} >Delete</button>
                <button className="edit" onClick={() => editTask(id)} >Edit</button>
            </div>
        </li>
    )
}

export default Task;