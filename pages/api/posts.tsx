import { MongoClient, ObjectId } from 'mongodb';
    
    export default async function handler(req: any, res:any) {
      const client = new MongoClient(process.env.MONGODB_URI!);
    
      await client.connect();
      const db = client.db("blog-nextjs");
    
      switch (req.method) {
        case 'GET':
          const posts = await db.collection('posts').find({}).limit(5).toArray();
          res.status(200).json(posts);
          break;
        case 'POST':
          // Handle POST request
          const {title, content, image, category, author} = req.body;
          let current = new Date(Date.now());
          let created=current.toDateString()
          if(title==='' || content ==="" || image ==="" || category==='' || author===''){
            res.status(401).json({message:"plaese fill all fields"});
          }
          else{
            const result = await db.collection('posts').insertOne({title, content, image, category, created, author});
            res.status(201).json(result);
          }
         
          break;
        case 'PUT':
          // Handle PUT request
          const { id, ...data } = req.body;
          
          const resultPut = await db.collection('posts').updateOne(
            { _id: new ObjectId(id) },
            { $set: data }
          );
          res.status(200).json(resultPut);
          break;
      
        default:
          res.status(405).json({ error: 'Unsupported HTTP method' });
      }
    
      await client.close();
    }