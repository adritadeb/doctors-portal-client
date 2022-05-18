import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div style={{ backgroundImage: `url(${footer})`, backgroundSize: 'cover' }}>
            <footer class="footer p-10 pl-24">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title">Oral Health</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span class="footer-title">Our Address</span>
                    <a class="link link-hover">New York - 101010 Hudson</a>
                </div>
            </footer>
            <footer class="footer footer-center p-4 text-base-content">
                <div>
                    <p>Copyright © {year} - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;