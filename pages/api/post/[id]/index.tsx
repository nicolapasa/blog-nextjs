
import { MongoClient, ObjectId, WithId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'  




    export default async function handler( req: NextApiRequest,
      res: NextApiResponse) {
      const client = new MongoClient(process.env.MONGODB_URI!);
    
      await client.connect();
      const db = client.db("blog-nextjs");
      let {id}:any=req.query;

 

      switch (req.method) {
        case 'GET':

          interface Post {
            // Define the structure of your post data here
            // For example:
            _id: ObjectId;
            title: String;
            content: String;
            created: String;
            category: String;
            author: String;
            // other properties...
          }
          interface ResponseData  {
            message: string
            error: object
            post: WithId<Post>[] 
          }  
        
          try {
          
            if( id !== 'undefined'){
            
              const post :WithId<Post>[] |null = await db.collection<WithId<Post>>('posts').find({_id: new ObjectId(id) }).toArray();
              
              const postIds: ObjectId[] = post.map(pos => pos._id); 

              res.status(200).json({ postIds });
    
              await client.close();
            }
          } catch (error:any) {
             res.json(error)
          }
        break;
        case 'DELETE':
        
         
          // Handle DELETE request
          if( id !== 'undefined'){ 
          const resultDel:any = await db.collection('posts').deleteOne({
            _id: new ObjectId(id),
          });
          res.status(200).json(resultDel);
        }
          break;
      }
    
  
    }

    export const config = {
      api: {
        externalResolver: true,
      },
    };