import React, { useState, useEffect } from 'react'
import { Task } from '../public/mock.ts'

export default ({ task }: { task: Task }) => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(task.done)
  }, [task])
  return (
    <div className="task">
      <label htmlFor={String(task.id)} className={checked ? 'checked' : ''}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(true)}
          id={String(task.id)}
        />
        {task.name}
      </label>
      <div className="notes">
        <textarea value={task.notes} />
      </div>
    </div>
  )
}
