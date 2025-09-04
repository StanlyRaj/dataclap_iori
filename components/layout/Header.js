import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = ({ handleOpen, handleRemove, openClass, addClass }) => {
    const [scroll, setScroll] = useState(0)
    const [isSearchToggled, setSearchToggled] = useState(false);
    const [isLanguageToggled, setLanguageToggled] = useState(false);
    const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
    const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    
    return (
        <>
            <header className={`${scroll ? "header sticky-bar stick" : "header sticky-bar"} ${addClass}`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex" href="/index-3">
                                    <img alt="Ecom" src="assets/imgs/template/logo.svg" />
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        {/* SERVICES - MEGA DROPDOWN */}
                                        <li className="has-children has-mega-dropdown">
                                            <Link className="active" href="/">Services</Link>
                                            <div className="mega-dropdown">
                                                <div className="mega-dropdown-content">
                                                    <div className="dropdown-column">
                                                        <h3>Pre-trained</h3>
                                                        <ul>
                                                            <li><Link href="/index-11">LLM EVALUATIONS</Link></li>
                                                            <li><Link href="/index-11">GENERATIVE AI</Link></li>
                                                            <li><Link href="/index-11">SEARCH AND PERSONALIZATION</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="dropdown-column">
                                                        <h3>Post-trained</h3>
                                                        <ul>
                                                            <li><Link href="/index-11">SUPERVISED FINE TUNING</Link></li>
                                                            <li><Link href="/index-11">TRAINING AS A SERVICE</Link></li>
                                                            <li><Link href="/index-11">CONTENT MODERATION</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="dropdown-column">
                                                        <h3>Other</h3>
                                                        <ul>
                                                            <li><Link href="/index-11">HUMAN DATA</Link></li>
                                                            <li><Link href="/index-11">OCR/IDP</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        {/* INDUSTRIES - REGULAR DROPDOWN */}
                                        <li className="has-children">
                                            <Link href="#">Industries</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/index-11">ADAS</Link></li>
                                                <li><Link href="/index-11">Retail</Link></li>
                                                <li><Link href="/index-11">Geospatial</Link></li>
                                                <li><Link href="/index-11">Robotics</Link></li>
                                                <li><Link href="/index-11">Mapping</Link></li>
                                                <li><Link href="/index-11">Social Media</Link></li>
                                                <li><Link href="/index-11">Manufacturing</Link></li>
                                                <li><Link href="/index-11">Agriculture</Link></li>
                                                <li><Link href="/index-11">Sports & Media</Link></li>
                                                <li><Link href="/index-11">Finance & Insurance</Link></li>
                                                <li><Link href="/index-11">Customer Service</Link></li>
                                                <li><Link href="/index-11">RPA</Link></li>
                                                <li><Link href="/index-11">Asset Management</Link></li>
                                                <li><Link href="/index-11">Physical AI</Link></li>
                                            </ul>
                                        </li>
                                        
                                        {/* OTHER MENUS - UNCHANGED */}
                                        <li className="has-children">
                                            <Link href="#">Resources</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/blog-detail">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#">Company</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/about">About us</Link></li>
                                                <li><Link href="/career">Careers</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/register">Register</Link></li>
                                                <li><Link href="/login">Login</Link></li>
                                                <li><Link href="/coming-soon">Coming soon</Link></li>
                                                <li><Link href="/404">Error 404</Link></li>
                                                <li><Link href="/help.js">Help</Link></li>
                                                <li><Link href="/term-conditions">Terms and Conditions</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/pricing">Pricing</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                                <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                    onClick={() => { handleOpen(); handleRemove() }}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                            <div className="header-right">
                                <div className="d-inline-block box-search-top">
                                    <div className={isSearchToggled ? "form-search-top d-block" : " form-search-top d-none"}>
                                        <form action="#">
                                            <input className="input-search" type="text" placeholder="Search..." />
                                            <button className="btn btn-search">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                    <span className="font-lg icon-list search-post" onClick={toggleSearchTrueFalse}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="d-inline-block box-dropdown-cart" onClick={toggleLanguageTrueFalse}>
                                    <span className="font-lg icon-list icon-account">
                                        <span className="font-lg color-grey-900 arrow-down">EN</span>
                                    </span>
                                    <div className={isLanguageToggled ? "dropdown-account dropdown-open" : "dropdown-account"}>
                                        <ul>
                                            <li>
                                                <Link className="font-md" href="#">
                                                    <img src="assets/imgs/template/icons/en.png" alt="iori" />
                                                    English
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-none d-sm-inline-block">
                                    <Link className="btn btn-brand-1 hover-up" href="register">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;