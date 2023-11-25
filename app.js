import bcrypt from 'bcrypt'
import express from 'express'

/* const password = 'password1'

//hashing the password
const hash = await bcrypt.hash(password,10)

//compare the password
const isMatch=await bcrypt.compare("password1",hash)

console.log(isMatch) */

const app = express();
app.use(express.json())

const users = [
     
]

app.post('/signup', async(req, res)=>{
    const{username, password} = req.body
    const hash = await bcrypt.hash(password,10)

    users.push({
        username,
    password:hash
})

    console.log(users)

    res.send('Ok')

   /*  if (!req.body) {
        return res.status(400).send('Bad Request: Missing request body');
      }
    
      const { username, password } = req.body;
    
      if (!username || !password) {
        return res.status(400).send('Bad Request: Missing username or password');
      }
    
      const hash = await bcrypt.hash(password, 10);
    
      users.push({
        username,
        password: hash
      });
    
      console.log(users);
    
      res.send('Ok');*/
    }) 


    app.post('/login',async (req, res)=>{
        const {username, password} = req.body
        const user = users.find(u =>u.username === username)

        if(!user){
            res.send("wrong user")
            return
        }

        const isValid= await bcrypt.compare(password, user.password)
        if(!isValid){
            res.send("wrong password")
            return
        }

        res.send('ok')
    })

app.listen(8080,()=> console.log("Listening on PORT 8080"))
    