import React from 'react'
import '../css/App.css'
import '../css/reset.css'
import '../css/style.css'

const EndPage = () => {
	return <div>
        <footer className="page-footer">
    <ul className="social">
      <li><a href="#"><span>face</span> Facebook</a></li>
      <li><a href="#"><span>camera_alt</span> Instagram</a></li>
      <li><a href="#"><span>alternate_email</span> Twitter</a></li>
    </ul>
    <nav aria-label="Legal">
      <ul className="legal">
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Accessibility Policy</a></li>
      </ul>
    </nav>
    <p class="copyright">&copy; Copyright, 2021.</p>
  </footer>
        </div>
}

export default EndPage