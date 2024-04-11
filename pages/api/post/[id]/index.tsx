
import { MongoClient, ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'  
type ResponseData = {
  message: string,
  post: any[],
  error: any
}  

    export default async function handler( req: NextApiRequest,
      res: NextApiResponse<ResponseData>) {
      const client = new MongoClient(process.env.MONGODB_URI!);
    
      await client.connect();
      const db = client.db("blog-nextjs");
      let {id}:any=req.query;

 

      switch (req.method) {
        case 'GET':
         
     
        
          try {
          
            if( id !== 'undefined'){
            
              const post = await db.collection('posts').find({_id: new ObjectId(id) }).toArray();
              
              res.status(200).json({"post":post});
    
              await client.close();
            }
          } catch (error) {
             res.json(error)
          }
        break;
        case 'DELETE':
        
         
          // Handle DELETE request
          if( id !== 'undefined'){ 
          const resultDel = await db.collection('posts').deleteOne({
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