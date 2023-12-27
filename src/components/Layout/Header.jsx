import React from 'react'

const Header = () => {
    return (
        <div className="container-fuild sticky-top bg-white">
            <header className="border-bottom lh-1 py-3">
                <div className="row  justify-content-between align-items-center p-0 m-0">
                    <div className="col-md-4 pt-1 text-center">
                        <a className="link-secondary" href="#">Subscribe</a>
                    </div>
                    <div className="col-md-4 text-center">
                        <a className="blog-header-logo text-body-emphasis text-decoration-none h1" href="#">VR NEWS</a>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <a className="link-secondary" href="#" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" /></svg>
                        </a>
                        <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                    </div>
                </div>
            </header>
            <div className="nav-scroller py-1 mb-3 border-bottom bg-reddish">
                <nav className="nav nav-underline justify-content-center ">
                    <a className="nav-item nav-link text-white  me-lg-5" href="#">World</a>
                    <a className="nav-item nav-link text-white me-lg-5" href="#">U.S.</a>
                    <a className="nav-item nav-link text-white me-lg-5" href="#">Technology</a>
                    <a className="nav-item nav-link text-white me-lg-5" href="#">Design</a>
                </nav>
            </div>
        </div>

    )
}

export default Header