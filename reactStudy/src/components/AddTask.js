import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
        }

        onAdd({ text, day, reminder })

        setDay('')
        setReminder(false)
        setText('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input type='text' placeholder='AddTask' value={text}
                onChange={(e) => setText(e.target.value)}/>
            </div>
            <div>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' 
                value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div>
                <label>set Reminder</label>
                <input type='checkbox' checked={reminder}
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task'></input>
        </form>
    )
}

export default AddTask
