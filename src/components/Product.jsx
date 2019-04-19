import React, { Component } from 'react'
import '../CSS/product.css'
import axios from 'axios';

export default class Product extends Component {


deleteProduct= (id)=>{

  console.log("delete")
  axios.delete(`/api/inventory/${this.props.deleteId}`).catch((err)=>console.log(err, 'delete failed'))
  window.location.reload()
} 

  render() {
    return (
      <div className="product">
        
        
        <img src={`${this.props.imgUrl}`} alt="image didn't work" />
        <div>
        <h1>{this.props.name}</h1>
        
        
        <h1>{`$ ${this.props.price}`}</h1>
        
        
        <button onClick={this.deleteProduct}>Delete</button>


        <button onClick={()=> {
            
        }}>Edit</button>
        
        </div>
        
      
      
      </div>
    )
  }
}
