module.exports= {
  getProducts: (req, res)=> {
    console.log("get fired")

    const dbInstance= req.app.get('db')

    dbInstance.get_products().then((response)=>{
      res.status(200).send(response)
    }).catch((response)=>res.status(500).send(response))

  },

createProduct: (req, res)=> {
  console.log(req.body)
  const dbInstance= req.app.get('db')

  dbInstance.create_product([req.body.name, +req.body.price, req.body.imgUrl]).then((response)=>{
    res.status(200).send(response)
  }).catch((response)=>res.status(500).send(response)
  
  )

}, 

deleteProduct: (req, res)=> {
  const dbInstance= req.app.get('db')

  dbInstance.delete_product([req.params.id]).then((response)=>{
    res.status(200).send(response)
  }).catch((response)=>res.status(500).send(response))
}, 

editProduct: (req, res)=> {
  const dbInstance= req.app.get('db')

  dbInstance.update_product([req.body.name, req.body.price, req.body.imgUrl, req.params.id]).then((response)=>{
    res.status(200).send(response)
  }).catch((response)=>res.status(500).send(response))
}

}