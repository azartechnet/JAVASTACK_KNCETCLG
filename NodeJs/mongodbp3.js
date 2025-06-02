const {MongoClient}=require('mongodb')
const url="mongodb+srv://admin:admin@cluster0.j8tqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('cmsdb');
        const collection=db.collection('cmscollection');
        const result=await collection.updateOne({name:"azar1"},{$set:{age:30}});
            console.log(result);
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)