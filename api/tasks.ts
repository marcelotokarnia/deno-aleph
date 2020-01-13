import type { APIRequest } from 'aleph-types'
import { mongodbClient } from '../clients/mongodb.ts'

const fetchTasks = async (req: APIRequest) => {
  const tasks = await mongodbClient().getTasks()
  return req.status(200).json(tasks)
}

export default fetchTasks
