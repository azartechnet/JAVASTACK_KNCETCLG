const {MongoClient}=require('mongodb')
const url="mongodb+srv://admin:admin@cluster0.on5xupe.mongodb.net/?appName=Cluster0"
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('kishoredb')
        const collection=db.collection('mycol2');
        // var obj={_id:2001,name:"azar1",email:"azar1@gmail.com"};
        var obj=[{_id:2002,name:"azar2",email:"azar2@gmail.com"},
            {_id:2003,name:"azar3",email:"azar3@gmail.com"}]
        // await collection.insertOne(obj);
         await collection.insertMany(obj);
        console.log("Data Inserted...")
    }
    finally
    {
        await client.close()
    }
}
run().catch(console.error)
