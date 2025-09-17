import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="modern-footer mt-50">
                <div className="footer-main">
                    <div className="footer-container">
                        <div className="footer-grid">
                            {/* Column 1 - Company Details */}
                            <div className="footer-column company-details">
                                <div className="company-logo">
                                    <img alt="dataclap" src="/assets/logo_white-1.svg" />
                                </div>
                                <div className="company-info">
                                    <p className="company-address">
                                        4517 Washington Ave.<br />
                                        Manchester, Kentucky 39495
                                    </p>
                                    <div className="company-hours">
                                        <strong>Hours:</strong> 8:00 - 17:00, Mon - Sat
                                    </div>
                                    <div className="social-section">
                                        <h6 className="social-title">Follow Us</h6>
                                        <div className="social-links">
                                            <Link className="social-icon linkedin" href="#" />
                                            <Link className="social-icon youtube" href="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2 - Industries (Column 1) */}
                            <div className="footer-column industries-col">
                                <h5 className="column-title">Industries</h5>
                                <ul className="footer-menu">
                                    <li><Link href="#">ADAS</Link></li>
                                    <li><Link href="#">RPA</Link></li>
                                    <li><Link href="#">Manufacturing</Link></li>
                                    <li><Link href="#">Geospatial</Link></li>
                                    <li><Link href="#">Customer Services</Link></li>
                                    <li><Link href="#">Social Media</Link></li>
                                    <li><Link href="#">Manufacturing</Link></li>
                                </ul>
                            </div>

                            {/* Column 3 - Industries (Column 2) */}
                            <div className="footer-column industries-col">
                                <h5 className="column-title invisible">Industries</h5>
                                <ul className="footer-menu">
                                    <li><Link href="#">Agriculture</Link></li>
                                    <li><Link href="#">News &amp; Events</Link></li>
                                    <li><Link href="#">Sports &amp; Media</Link></li>
                                    <li><Link href="#">Retail</Link></li>
                                    <li><Link href="#">Mapping</Link></li>
                                    <li><Link href="#">Robotics</Link></li>
                                    <li><Link href="#">Geospatial</Link></li>
                                </ul>
                            </div>

                            {/* Column 4 - Services */}
                            <div className="footer-column services-col">
                                <h5 className="column-title">Services</h5>
                                <div className="service-group">
                                    <h6 className="service-heading">AI & ML SOLUTIONS</h6>
                                    <ul className="service-submenu">
                                        <li><Link href="#">LLM Evaluations</Link></li>
                                        <li><Link href="#">Model Training</Link></li>
                                        <li><Link href="#">AI Consulting</Link></li>
                                    </ul>
                                </div>
                                <div className="service-group">
                                    <h6 className="service-heading">DATA SERVICES</h6>
                                    <ul className="service-submenu">
                                        <li><Link href="#">Data Collection</Link></li>
                                        <li><Link href="#">Data Processing</Link></li>
                                        <li><Link href="#">Quality Assurance</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 5 - Services (continued) */}
                            <div className="footer-column services-col">
                                <h5 className="column-title invisible">Services</h5>
                                <div className="service-group">
                                    <h6 className="service-heading">ANNOTATION</h6>
                                    <ul className="service-submenu">
                                        <li><Link href="#">Image Annotation</Link></li>
                                        <li><Link href="#">Video Annotation</Link></li>
                                        <li><Link href="#">LiDAR Annotation</Link></li>
                                    </ul>
                                </div>
                                <div className="service-group">
                                    <h6 className="service-heading">AUTOMATION</h6>
                                    <ul className="service-submenu">
                                        <li><Link href="#">Workflow Automation</Link></li>
                                        <li><Link href="#">Human in the Loop</Link></li>
                                        <li><Link href="#">Process Optimization</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-container">
                        <div className="bottom-content">
                            <div className="footer-links">
                                <ul className="legal-menu">
                                    <li><Link className="legal-link font-md" href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link className="legal-link font-md" href="/terms">Terms of Service</Link></li>
                                    {/* <li><Link className="legal-link" href="/cookies">Cookies</Link></li> */}
                                </ul>
                            </div>
                            <div className="copyright">
                                <span className="copyright-text">©2024-2026 Dataclap. All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;