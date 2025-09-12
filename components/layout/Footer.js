// import Link from 'next/link';
// import React from 'react';

// const Footer = () => {
//     return (
//         <>
//             <footer className="footer">
//                 <div className="footer-1">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-3 my-margin-3 width-20 mb-50">
//                                 <div className="mb-10"><img alt="dataclap" src="/assets/logo_name.svg" /></div>
//                                 <p className="font-md mb-20 color-grey-400">4517 Washington Ave.<br className="d-none d-lg-block" />Manchester, Kentucky 39495</p>
//                                 <div className="font-md mb-20 color-grey-400"><strong className="font-md-bold">Hours:</strong> 8:00 - 17:00, Mon - Sat</div>
//                                 <h6 className="color-brand-1">Follow Us</h6>
//                                 <div className="mt-15"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /><Link className="icon-socials icon-linkedin" href="#" /><Link className="icon-socials icon-youtube" href="#" /></div>
//                             </div>
//                             <div className="col-lg-3 mp-0 width-15 my-margin-2">
//                                 <h5 className="color-brand-1 mb-10">Industries</h5>
//                                 <ul className=" menu-footer">
//                                     <li><Link href="#">ADAS</Link></li>
//                                     <li><Link href="#">RPA</Link></li>
//                                     <li><Link href="#">Manufacturing</Link></li>
//                                     <li><Link href="#">Geospatial</Link></li>
//                                     <li><Link href="#">Customer Services</Link></li>
//                                     <li><Link href="#">Social Media</Link></li>
//                                     <li><Link href="#">Manufacturing</Link></li>
//                                 </ul>
//                             </div>
//                             <div className="col-lg-3 width-15 my-margin mb-30 footer-column">
//                                 <h5 className="mb-10 color-brand-1"></h5>
//                                 <ul className="menu-footer">
//                                     <li><Link href="#">Agriculture</Link></li>
//                                     <li><Link href="#">News &amp; Events</Link></li>
//                                     <li><Link href="#">Sports &amp; Media</Link></li>
//                                     <li><Link href="#">Retail</Link></li>
//                                     <li><Link href="#">Mapping</Link></li>
//                                     <li><Link href="#">Robotics</Link></li>
//                                     <li><Link href="#">Geospatial</Link></li>
//                                 </ul>
//                             </div>
//                             <div className="col-lg-3 width-15 mb-30">
//                                 <h5 className="mb-10 color-brand-1">Services</h5>
//                                 <ul className="menu-footer">
//                                     <li><Link href="/about">LLM Evals</Link></li>
//                                     <li><Link href="/team">Image Annotation</Link></li>
//                                     <li><Link href="/career">LiDAR Annotation</Link></li>
//                                     <li><Link href="#">Press &amp; Media</Link></li>
//                                     <li><Link href="#">Video Annotation</Link></li>
//                                     <li><Link href="#">Data Collection</Link></li>
//                                     <li><Link href="#">Human in the loop</Link></li>
//                                 </ul>
//                             </div>
//                             <div className="col-lg-3 width-16 mb-30">
//                                 <h5 className="mb-10 color-brand-1">We offer</h5>
//                                 <ul className="menu-footer">
//                                     <li><Link href="#">Project  software</Link></li>
//                                     <li><Link href="#">Resource  software</Link></li>
//                                     <li><Link href="#">Workflow automation</Link></li>
//                                     <li><Link href="#">Gantt chart makers</Link></li>
//                                     <li><Link href="#">Project dashboards</Link></li>
//                                     <li><Link href="#">Task  software</Link></li>
//                                     <li><Link href="#">Data Collection</Link></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="footer-2">
//                     <div className="container">
//                         <div className="footer-bottom">
//                             <div className="row">
//                                 <div className="col-lg-6 col-md-12 text-center text-lg-start">
//                                     <ul className="menu-bottom">
//                                         <li><Link className="font-sm color-grey-300" href="/term-conditions">Privacy policy</Link></li>
//                                         <li><Link className="font-sm color-grey-300" href="/term-conditions">Cookies</Link></li>
//                                         <li><Link className="font-sm color-grey-300" href="/term-conditions">Terms of service</Link></li>
//                                     </ul>
//                                 </div>
//                                 <div className="col-lg-6 col-md-12 text-center text-lg-end"><span className="color-grey-300 font-md">©Iori Official 2022. All right reversed.</span></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>


//         </>
//     );
// };

// export default Footer;

































import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="modern-footer mt-100">
                <div className="footer-main">
                    <div className="footer-container">
                        <div className="footer-grid">
                            {/* Column 1 - Company Details */}
                            <div className="footer-column company-details">
                                <div className="company-logo">
                                    <img alt="dataclap" src="/assets/logo_name.svg" />
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
                                            {/* <Link className="social-icon facebook" href="#" />
                                            <Link className="social-icon instagram" href="#" />
                                            <Link className="social-icon twitter" href="#" /> */}
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