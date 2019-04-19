import React, { Component } from 'react'
import '../CSS/product.css'
import axios from 'axios';
import { Link } from 'react-router-dom'
export default class Product extends Component {


  deleteProduct = (id) => {

    console.log("delete")
    axios.delete(`/api/inventory/${this.props.deleteId}`).catch((err) => console.log(err, 'delete failed'))
    window.location.reload()
  }

  render() {
    return (
      <div className="product">


        <img src={`${this.props.imgUrl}`} alt="image didn't work" />
        <div className="col2">
          <h1>{this.props.name}</h1>


          <h1>{`$ ${this.props.price}`}</h1>


          <button onClick={this.deleteProduct}>Delete</button>


{/* the basic idea of this function is to do a get request to find out the data that corresponds to the id of the parent item (which would require an if statement) then to loop over the inputs and assign the values of each input to the res.body.(property).....it's complicated? */}
          <Link to="/form">
            <button onClick={() => {
              let inputs = document.getElementsByTagName("input")

              axios.get('/api/products').then((res) => {
                for (let i = 0; i < inputs.length; i++) {
                  let name = inputs[i].name

                  inputs[i].value = res.body[name]
                }
              })
            }}>Edit</button>
          </Link>
        </div>



      </div>
    )
  }
}
