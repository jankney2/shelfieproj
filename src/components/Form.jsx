import React, {Component} from 'react'
import axios from 'axios'
import '../CSS/form.css'
export default class Form extends Component {
constructor(props) {
  super(props) 
  this.state={
    name:'', 
    price: 0, 
    imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAGFBMVEXx7/D////18/T6+vr49/j08vP8/Pzw7e+uV6dtAAABfUlEQVR4nO3ayXKCUBBAUeXB4///OCEGmVQMLKx0n7NTYNG3mIvLBQAAAAAAAAAAAAAAAAAAAACANLrmrO7TI5xWr2eVT49wmgYaDDS4NWj6gxv3bZwGh7fWQINBrAbtn8+F41YaaKBB5Aa16bpm9+YpdIPfy0SXuMH4LNzvRAjcoJ2WvT5HBG4wX6jBzkNl3AZ1vTBhA8fCdbosDOYjb/aJwA1mI5XFyOsIgRtMF8dmMfLqZ+wGQ4S+X98dlM0ZMnSD77Hatlw3EzebfyI3eGBcN3GDn0GXO0K6Bs195bwNbisvdoRsDcY76MwNxrfvZfVfpgbj2vPXKskaTA+TWRuU2WPU7GDI06AsP7Xp0jUo22+NcjV4EOAyPxjiN3g2WZenwfPB0jR4MVdJ0uDVWF2OBq+nqhka7A1V4zfYn6lGb/DOSDVmg/v3629tNa4Yq8ExGmgwiNOgtEfVMA3O0UCDGA3actbxMyoAAAAAAAAAAAAAAAAAAAAAAPxDX+w9D05sn3cWAAAAAElFTkSuQmCC'
  }
}

changeHandler= (e)=> {
  let name= e.target.name

  this.setState({
    [name]: e.target.value
  })
}


cancel= (e)=> {
 let inputs= document.getElementsByTagName('input')

 for (let i=0; i<inputs.length; i++) {
   inputs[i].value=''
 }
}


postReq= (obj)=> {
//add 
let newObj = this.state 

  axios.post('/api/inventory', newObj).catch((err)=>console.log(err, "post Req failed"))

  window.location.reload()
}


  render() {
    return(
      <div className="form">
        <div style={{
          backgroundImage: `url(${this.state.imgUrl})`,
          height: '200px', 
          width: '200px',
          backgroundRepeat:'no-repeat', 
          objectFit:'cover', 
          marginLeft: "25%", 
          marginTop: "5%"

          
        }}></div>



<p htmlFor="imgUrl"> Image URL:</p>
        <input type="text" placeholder="image URL" name="imgUrl" onChange={this.changeHandler}/>
<p htmlFor="name"> Product Name:</p>
        <input type="text" placeholder="product name" name="name" onChange={this.changeHandler}/>
<p htmlFor="price"> Price:</p>
        <input type="text" placeholder="0" name="price" onChange={this.changeHandler}/>

        
<div>
<button onClick={this.cancel}>Cancel</button>



<button onClick={this.postReq}>Add to Inventory</button></div>
        {/* does post request axios */}
      </div>
    )
  }
}