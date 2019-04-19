const express= require('express')
const app= express()
const controller= require('./controller')
const port=4555
require('dotenv').config()
const massive= require('massive')
// const {CONNECTION_STRING, SERVER_PORT}= process.env
app.use(express.json())


massive(
'postgres://pvzzyyszzzobzc:6493a1a6741b836d485a2d54d4626ed9d82b68d8bb65354c3819a80dfd56592a@ec2-54-225-116-36.compute-1.amazonaws.com:5432/dcjnbv2nutcsoo?ssl=true'
).then(dbConnect=>{
  app.set('db', dbConnect)
}).catch((err)=> console.log(`error: ${err}`))




app.get('/api/inventory', controller.getProducts)
app.post('/api/inventory', controller.createProduct)
// app.put()
app.delete('/api/inventory/:id', controller.deleteProduct)

app.listen(port, ()=>console.log(`listening on ${port}`))