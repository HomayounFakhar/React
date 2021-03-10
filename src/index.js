import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './components/App'
import EndPage from './components/EndPage.js'
import Sizeproduct from './components/Sizeproduct.js'
import Colorproduct from './components/Colorproduct.js'


ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<EndPage />, document.getElementById('EndPage'))
ReactDOM.render(<Sizeproduct />, document.getElementById('Sizeproduct'))
ReactDOM.render(<Colorproduct />, document.getElementById('Colorproduct'))
