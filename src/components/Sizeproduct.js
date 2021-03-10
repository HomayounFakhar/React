import React from 'react'
import '../css/App.css'
import '../css/reset.css'
import '../css/style.css'


const SizeproductList = ["Small", "mediom", "Large", "XLarge"];

const SizeList = () => (
  <div>

{SizeproductList.map(name => <li key={name}> {name} </li>)}

  </div>

);

const Sizeproduct = () => {
	return <div>
        <SizeList/>
        </div>
}
export default Sizeproduct