import React from 'react';
import "./Home.css";
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
import AOS from 'aos';
import 'aos/dist/aos.css';


import Hero from "../../images/hero.png";
import ethereum from "../../images/ethereum.png";
import bitcoin from "../../images/bitcoin.png";
import speed from "../../images/speed.png";
import komodo from "../../images/komodo-logo.png";
import azure from "../../images/azure-logo.png";
import binance from "../../images/binance-logo.png";
import build1 from "../../images/build1.png";
import build2 from "../../images/build2.png";
import build3 from "../../images/build3.png";

const Home = () => {
    AOS.init({ duration: 1000 });

    const { ref } = useWebAnimations({
        ...bounce,
        duration: 15000,
        easing: "ease-in-out",
        delay: 1000,
    });
    return (
        <>
            <div className="main_container">
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="container py-5">
                        <div className="main_heading">
                            Build the future on Syscoin
                        </div>
                        <div className="sub_heading">
                            The best of <strong>Bitcoin</strong> and <strong>Ethereum</strong> in <strong>one place</strong>
                        </div>
                        <div className="links d-flex flex-wrap py-5">
                            <a href="#" className='active me-3'>Get Started</a>
                            <a href="#" className='me-3'>Get Discord</a>
                            <a href="#">Get Telegram</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main_resources" data-aos="fade-right">
                <div className="hero">
                    <img src={Hero} className='hero-img' alt="hero" />
                    <h2><strong>Syscoin</strong> is the <strong>only layer-1 Blockchain</strong> <br /> that scales with <strong>EVM functionality.</strong></h2>
                </div>

                <div className="sub_hero">
                    <div>
                        <img src={ethereum} width="110px" alt="ethereum" />
                        <h3>NEVM Smart Contracts</h3>
                    </div>
                    <div>
                        <img src={bitcoin} width="110px" alt="bitcoin" />
                        <h3>Bitcoin Merge-Mined
                        </h3>
                    </div>
                    <div>
                        <img src={speed} width="110px" alt="speed" />
                        <h3>Roadmap to ZK-Rollups
                        </h3>
                    </div>
                </div>
            </div>

            <div className="partners">
                <div>
                    <h4>Ecosystem Partners</h4>
                    <div className='partners_logo'>
                        <ul>
                            <div className='logos'
                                ref={ref}
                            >
                                <li>
                                    <a href="">
                                        <img src={komodo} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={azure} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={binance} alt="" />
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="final_cards my-5">
                <div className="d-flex justisy-content-evenly align-items-center">
                    <div className="container">
                        <h2 className='py-5'>Get Up & Running</h2>
                        <div className='row row-cols-1 row-cols-md-3 g-4' data-aos="zoom-in">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            Docs & Tutorials
                                            <div className="card-img-top">
                                                <img src={build1} width="100%" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            Get SYS
                                        </div>
                                        <div className="card-img-top">
                                            <img src={build2} width="100%" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            Whitepapers
                                        </div>
                                        <div className="card-img-top">
                                            <img src={build3} width="100%" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;