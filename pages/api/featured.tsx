import { MongoClient } from 'mongodb';
    
    export default async function handler(req, res) {
      const client = new MongoClient(process.env.MONGODB_URI);
    
      await client.connect();
      const db = client.db("blog-nextjs");
    

          const post = await db.collection('posts').find().limit(1).sort({ _id: -1 }).toArray();
        
          res.status(200).json({"post":post});
           
    
      await client.close();
    }