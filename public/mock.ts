export type Task = {
  name: string
  id: number
  notes: string
  done: boolean
}

const tasks: Array<Task> = [
  {
    name: 'Task1',
    id: 1,
    notes: 'Has to be done Has to be done Has to be done Has to be done Has to be done',
    done: false,
  },
]

export default tasks
