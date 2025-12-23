const {MongoClient}=require('mongodb')
const url="mongodb+srv://admin:admin@cluster0.on5xupe.mongodb.net/?appName=Cluster0"
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('kishoredb')
        const collection=db.collection('mycol2');
        //update
        const cu=await collection.updateOne({_id:2001},{"$set":{name:"mohamed"}})
        console.log(`${cu.modifiedCount}`)
        //display
        const st=collection.find()
        const data=await st.toArray()
        console.table(data)
    }
    finally
    {
        await client.close()
    }
}
run().catch(console.error)
