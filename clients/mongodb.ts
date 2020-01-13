import { MongoClient } from 'https://deno.land/x/mongo@v0.12.1/mod.ts'

export const mongodbClient = () => {
  const dbName = Deno.env.get('DB_NAME')
  const user = Deno.env.get('DB_USERNAME')
  const password = Deno.env.get('DB_PASSWORD')
  const cluster = Deno.env.get('DB_CLUSTER')
  const uri = `mongodb+srv://${user}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`

  const client = new MongoClient()

  const getTasks = async () => {
    const collection = await getCollection('tasks')

    const tasks = await collection.find().toArray()

    closeClient()

    return tasks
  }

  const getCollection = async (collectionName: string) => {
    await getConnection()
    return client.database(dbName).collection(collectionName)
  }

  const getConnection = async () => {
    console.log(uri)
    await client.connectWithUri(uri)
  }

  const closeClient = () => {
    client.close()
  }

  return {
    getTasks,
  }
}
