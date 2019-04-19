import React, {Component} from 'react'
import '../CSS/header.css'


export default class Header extends Component {
  

  render() {
    return(
      <div className="header">

<div className="headerLogo">logo</div>
<p>Shelfie</p>
<button>Button</button>
<button>Button</button>
      </div>
    )
  }
}