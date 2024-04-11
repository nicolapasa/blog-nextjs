import { MongoClient } from 'mongodb';
const bcrypt = require('bcrypt'); 
const saltRounds = 10;
    export default async function handler(req, res) {
      const client = new MongoClient(process.env.MONGODB_URI);
    
      await client.connect();
      const db = client.db("blog-nextjs");
    
          // Handle POST request
          const {email, password} = req.body;
          if(email ==='' || password ===''){
            res.status(401).json("type username and password")
          }
          else{
            const hash = bcrypt.hashSync(password, saltRounds);
            const result = await db.collection('users').insertOne({email, hash});
            res.status(201).json(result);
      
      
            await client.close();
          }
          
         
    }