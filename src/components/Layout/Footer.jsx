import React from 'react'


const Footer = () => {
  return (
    <div>
     <footer className="bg-reddish text-light py-4 sticky-bottom">
      <div className="container text-center">
        <div className="mb-3">
          <h5>Contact Us</h5>
          <p>Email: contact@thereactnews.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div>
          <h5>Follow Us</h5>
          <p>
            <a href="#" className="text-light me-3">
              Twitter
            </a>
            <a href="#" className="text-light me-3">
              Facebook
            </a>
            <a href="#" className="text-light me-3">
              Instagram
            </a>
          </p>
        </div>
        <p className="mt-3 mb-0">
          &copy; 2023 The React News. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
