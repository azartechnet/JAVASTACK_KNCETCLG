const {MongoClient}=require('mongodb')
const url="mongodb+srv://admin:admin@cluster0.j8tqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('cmsdb');
        const collection=db.collection('cmscollection');
        //delete
        const cd=await collection.deleteOne({name:"azar"})
        console.log("Deleted..");
        console.log(cd.deletedCount)
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)