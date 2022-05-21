import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div style={{ backgroundImage: `url(${footer})`, backgroundSize: 'cover' }}>
            <footer className="footer p-10 pl-24">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 text-base-content">
                <div>
                    <p>Copyright © {year} - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;