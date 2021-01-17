import React from 'react'
import { Import } from 'aleph'
import Task from '../components/Task.tsx'
import mock from '../public/mock.ts'

export default function Home() {
  return (
    <div className="page">
      <Import from="../style/index.less" />
      <h1>Pending tasks</h1>
      {mock.map(t => (
        <Task key={t.id} task={t} />
      ))}
    </div>
  )
}
