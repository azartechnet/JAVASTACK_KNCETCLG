const {MongoClient}=require('mongodb')
const url="mongodb+srv://admin:admin@cluster0.j8tqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('cmsdb');
        const collection=db.collection('cmscollection');
        var obj=[{name:"azar1",age:36,email:"azar1@gmail.com"},{name:"azar2",age:35,email:"azar2@gmail.com"}]
        await collection.insertMany(obj);
        console.log("DataInserted")
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)