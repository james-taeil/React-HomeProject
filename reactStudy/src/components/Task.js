import React from 'react'
import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete, onToggle }) => {
    
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3>
                {task.username} 
                <FaTimes 
                style={{ color:'red', cursor:'pointer' }}
                onClick={() => onDelete(task.id)} 
                onDoubleClick={() => onToggle(task.reminder)} />
            </h3>
        </div>
    )
}

export default Task
