import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link';
import HeroSlider from '../components/slider/HeroSlider';
import Tab from '../components/elements/Tab';
import Team from '../components/slider/Team';
import Offer from '../components/slider/Offer';
import Brand from '../components/slider/Brand';

const HomePage3 = () => {
    const [isOpen, setOpen] = useState(false)

    const [pricing, setPricing] = useState(1);

    const handlePricing = (index) => {
        setPricing(index); // remove the curly braces
    };

    const [social, setSocial] = useState(1);
    
    const handleSocial = (index) => {
        setSocial(index); // remove the curly braces
    };

    return (
        <>
            <Layout>
                <section className="section banner-11">
                    <div className="box-banner-home11">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-1 right-pagination">
                                <HeroSlider/>
                            </div>
                        </div>
                        <div className="swiper-pagination right-pagination swiper-pagination-group-11" />
                    </div>
                </section>
                <section className="section mb-50 bg-brand-1 pt-100 pb-100 bg-explore">
                    <div className="container">
                        <div className="text-center">
                            <span className="font-xl-bold color-white text-uppercase">explore network</span>
                            <h2 className="color-brand-2 mb-60 mt-15">
                                Ready to capture every <br className="d-none d-lg-block" />wonderful
                                moment
                            </h2>
                        </div>
                        <div className="mt-30 mb-60">
                            <Tab/>
                        </div>
                    </div>
                </section>
                <section className="section banner-12">
                    <div className="asset-1 shape-1" />
                    <div className="asset-2 shape-2" />
                    <div className="asset-3 shape-3" />
                    <div className="asset-4 shape-1" />
                    <div className="asset-5 shape-2" />
                    <div className="container text-center">
                        <div className="row mt-150">
                            <div className="col-xl-8 col-lg-10 m-auto"><span className="font-md color-grey-400">Think. Creative. Solve</span>
                                <h1 className="color-brand-1 mb-25 mt-10">Innovative Solution to Move Your Business Forward</h1>
                                <p className="font-md color-grey-500 mb-25">Collaborate, plan projects and manage resources with powerful features that your whole team<br className="d-none d-lg-block" />can use.  The latest news, tips and advice to help you run your business with less fuss.</p><Link href="/#"><img className="mr-10" src="assets/imgs/template/appstore.png" alt="iori" /></Link><Link href="/#"><img src="assets/imgs/template/google-play.png" alt="iori" /></Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="members">
                    <div className="image-slideshow">
                        <div className="mover-1" />
                        <div className="mover-2" />
                    </div>
                </section>
                <section className="section">
                    <div className="box-radius-bottom">
                        <div className="container">
                            <div className="text-center">
                                <h3 className="color-brand-1 mb-15">Loved By Developers, Trusted By Enterprises</h3>
                                <p className="font-lg color-grey-500">We helped these brands turn online assessments into success stories.<br className="d-none d-lg-block" />Join them. Elevate your testing.</p>
                            </div>
                            <div className="mt-30">
                                <div className="box-swiper">
                                    <div className="swiper-container swiper-group-8">
                                        <div className="swiper-wrapper">
                                            <Brand />
                                        </div>
                                        <div className="swiper-pagination swiper-pagination-group-8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section banner-8 mt-100">
                    <div className="box-banner-home8">
                        <div className="mt-100">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-7-center">
                                    <Team />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="section mt-100">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Take your social media marketing <br className="d-none d-lg-block" />prowess to the next level</h2>
                            </div>
                        </div>
                        <div className="text-center mt-25 mb-65">
                            <div className="box-social-media">
                                <ul className="tabs-plan change-media" role="tablist">
                                    <li> <a className={social === 1 ? "active" : ""} onClick={() => handleSocial(1)}>Personal</a></li>
                                    <li> <a className={social === 2 ? "active" : ""} onClick={() => handleSocial(2)}>Enterprise</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-50">

                            {social == 1 && <>
                                <div className="col-lg-4 col-md-6 social-media enterprise">
                                    <div className="card-offer-style-2">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Cross-Platform</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media enterprise">
                                    <div className="card-offer-style-2 bg-5">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Social Media</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media personal">
                                    <div className="card-offer-style-2">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Cross-Platform</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media personal">
                                    <div className="card-offer-style-2 bg-5">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Social Media</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media personal">
                                    <div className="card-offer-style-2 bg-2">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage2/identity.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Brand Identity</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media enterprise">
                                    <div className="card-offer-style-2 bg-1">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Customer Service</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>}
                            {social == 2 && <>
                                <div className="col-lg-4 col-md-6 social-media personal">
                                    <div className="card-offer-style-2 bg-1">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Customer Service</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media personal">
                                    <div className="card-offer-style-2 bg-7">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross5.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Social advertising</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media enterprise">
                                    <div className="card-offer-style-2 bg-4">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage2/creation.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Content creation</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media personal">
                                    <div className="card-offer-style-2 bg-4">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage2/creation.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Content creation</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>}



                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">What We Offer</h2>
                                <p className="font-lg color-gray-500">
                                    What makes us different from others? We give holistic solutions
                                    <br className="d-none d-lg-block" />
                                    with strategy, design &amp; technology.
                                </p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-4">
                                    <Offer />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="card-radius-32">
                                    <div className="card-info">
                                        <h3 className="color-brand-1 mb-20">Financial Management</h3>
                                        <p className="font-md color-grey-500 mb-20">Track, manage, and control your expenses. The only financial management tool you’ll ever need.</p>
                                        <div className="text-center"> <Link href="#"><img className="mr-10" src="/assets/imgs/template/appstore.png" alt="iori" /></Link><Link href="#"><img src="/assets/imgs/template/google-play.png" alt="iori" /></Link></div>
                                    </div>
                                    <div className="card-image"> <img src="/assets/imgs/page/homepage7/img-financial.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="card-radius-32 bg-4">
                                    <div className="card-info">
                                        <h3 className="color-brand-1 mb-20">Automated Platform</h3>
                                        <p className="font-md color-grey-500 mb-20">Synchronize and automate all your business in the cloud. Save time and effort, enjoy great vacations.</p>
                                        <div className="mt-0"> <Link className="btn btn-brand-1-small" href="#">Get Started Now
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                    <div className="card-image"> <img src="/assets/imgs/page/homepage7/automated.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-xl-12 mb-30">
                                <div className="card-radius-32 bg-grey-60">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd">
                                                <div className="box-image-rd-30"> <img className="w-100" src="/assets/imgs/page/homepage7/img.png" alt="iori" />
                                                    <h4 className="color-brand-1 lbl-on-top">IORI Business Platform</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd-2">
                                                <h2 className="color-brand-1 mb-30">How to grow your <br className="d-none d-lg-block" />business fast</h2>
                                                <div className="item-number hover-up">
                                                    <div className="num-ele">1</div>
                                                    <div className="info-num">
                                                        <h5 className="color-brand-1 mb-15">Consultation</h5>
                                                        <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                                    </div>
                                                </div>
                                                <div className="item-number hover-up">
                                                    <div className="num-ele">2</div>
                                                    <div className="info-num">
                                                        <h5 className="color-brand-1 mb-15">Pilot</h5>
                                                        <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                                    </div>
                                                </div>
                                                <div className="item-number hover-up">
                                                    <div className="num-ele">3</div>
                                                    <div className="info-num">
                                                        <h5 className="color-brand-1 mb-15">Feedback and Optimization</h5>
                                                        <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 mb-30">
                                <div className="card-radius-32 bg-grey-60">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd">
                                                <div className="box-image-rd-30"> <img className="w-100" src="/assets/imgs/page/homepage7/img.png" alt="iori" />
                                                    <h4 className="color-brand-1 lbl-on-top">IORI Business Platform</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd-2">
                                                <h2 className="color-brand-1 mb-30">How to grow your <br className="d-none d-lg-block" />business fast</h2>
                                                <div className="item-number hover-up">
                                                    <div className="num-ele">4</div>
                                                    <div className="info-num">
                                                        <h5 className="color-brand-1 mb-15">Customize Workflow</h5>
                                                        <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                                    </div>
                                                </div>
                                                <div className="item-number hover-up">
                                                    <div className="num-ele">5</div>
                                                    <div className="info-num">
                                                        <h5 className="color-brand-1 mb-15">Execution</h5>
                                                        <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                                    </div>
                                                </div>
                                                <div className="item-number hover-up">
                                                    <div className="num-ele">6</div>
                                                    <div className="info-num">
                                                        <h5 className="color-brand-1 mb-15">QC and Delivery</h5>
                                                        <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                <div className="col-lg-6">
                                    <div className="box-info-video"><span className="btn btn-tag">Get in touch</span>
                                        <h2 className="color-brand-1 mt-15 mb-20">Want to talk to a marketing expert?</h2>
                                        <p className="font-md color-grey-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link><a className="btn btn-default font-sm-bold hover-up" href="#">
                                            Support Center
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="box-newsletter">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="box-image-newsletter"> <img className="img-main" src="assets/imgs/template/newsletter_img.png" alt="iori" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12"><span className="font-lg color-brand-1">Newsletter</span>
                                    <h2 className="color-brand-1 mb-15 mt-5">Subcribe our newsletter</h2>
                                    <p className="font-md color-grey-500">By clicking the button, you are agreeing with our Term &amp; Conditions</p>
                                    <button class="contact-button">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    );
};

export default HomePage3;