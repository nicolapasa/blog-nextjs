import { MongoClient } from 'mongodb';
const bcrypt = require('bcrypt'); 



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

           
            const result = await db.collection('users').findOne({email});
            
            if(!result){
                res.status(401).json("invalid username or password")
            }
            else{
                const passwordMatch=  bcrypt.compareSync(password, result.password);
                if(passwordMatch){
                    
                    res.status(201).json('logged in');
                }
                else{
                    res.status(401).json("invalid username or password")
                }
             
            }
          
      
      
            await client.close();
          }
          
         
    }