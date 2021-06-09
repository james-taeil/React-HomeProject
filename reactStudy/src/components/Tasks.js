import React, { useState } from 'react'

const Tasks = ({ tasks }) => {

    return (
        <div>
            {tasks.map((task) => (
            <h3 key={task.id}>{task.username}</h3>
            ))}
        </div>
    )
}

export default Tasks
