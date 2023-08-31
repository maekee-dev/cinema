const { MongoClient } = require('mongodb')
const dotenv = require('dotenv')

dotenv.config()

const dbConnect = async () => {
    try{
        const client = new MongoClient(
            'mongodb+srv://' + process.env.DBUSR + ':' + process.env.DBPSW + '@cluster.adtaord.mongodb.net/?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        await client.connect()
        return client
    } catch(error){
        console.error('Cannot connect to db:', error)
        throw error
    }
}

const getData = async () => {
    let client
    try{
        client = await dbConnect()
        const db = client.db('MovieDB')
        const collection = db.collection('general')
        const data = await collection.find({}, {}).toArray() //problem with Node, must call .toArray() to get requested data
        return data.sort((a,b) => .5 - Math.random())
    } 
    catch(error){ console.error('Cannot read data:', error) } 
    finally{ if(client) client.close() }
}

module.exports = async () => {
    const general = await getData()
    return general
}