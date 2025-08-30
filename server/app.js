import express from 'express';
import router from './route.js';


const app = express()
const PORT = 3000
app.get('/',(req,res)=>{
    res.send('hello HARI')
})

app.use('/user',router)

app.listen(PORT,()=>{
    console.log(`server is rumming on http://localhost:${PORT}`)
})