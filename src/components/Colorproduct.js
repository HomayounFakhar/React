import React from 'react'
import '../css/App.css'
import '../css/reset.css'
import '../css/style.css'


const ColorproductList = ["Black", "Blue", "Orange", "Red"];

const ColorList = () => (
  <div>

{ColorproductList.map(name => <li key={name}> {name} </li>)}

  </div>

);

const Colorproduct = () => {
	return <div>
        <ColorList/>
        </div>
}
export default Colorproduct