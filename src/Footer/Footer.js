import React from 'react'
import './Footer.css'
import { ReactComponent as MyfIcon } from '../Assets/icon-facebook.svg';
import { ReactComponent as MytIcon } from '../Assets/icon-twitter.svg';
import { ReactComponent as MypIcon } from '../Assets/icon-pinterest.svg';
import { ReactComponent as MyiIcon } from '../Assets/icon-instagram.svg';
const Footer = () => {
    return (
        <>
        <div className="footer-header">
            <h1>Boost your links today</h1>
            <button>Get started</button>
        </div>

        <div className='footer-container'>
            <div className='footer-sections'>
                <h3>Shortly</h3>
            </div>
            <div className="foo">
                <div className='footer-sections'>
                    <h4>Features</h4>
                    <ul>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div className='footer-sections'>
                    <h4>Resources</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className='footer-sections'>
                    <h4>Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                </div>
                <div className='social-icons'>
                    <MyfIcon />
                    <MytIcon />
                    <MypIcon />
                    <MyiIcon />
                </div>
            
        </div>
        </>
    );
}
export default Footer;