import React, {Component} from 'react'
import Product from './Product'

export default class Dashboard extends Component {

//map out all of the products from the array on app.js state
  render() {

const productMap= this.props.productList.map((el)=> {
  console.log('map fired')
  
  return <Product imgUrl={el.img} name= {el.name} price={el.price} key={el.id} deleteId={el.id} toggleStatus={this.props.toggleStatus}/>
})


    return(
      <div>

        
        
        {/* Dashboard */}
      {productMap}
      
      </div>
    )
  }
}