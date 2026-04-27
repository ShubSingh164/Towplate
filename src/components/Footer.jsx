import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Careers', path: '/careers' },
            { name: 'Press', path: '/press' },
            { name: 'Blog', path: '/blog' },
        ],
        support: [
            { name: 'Help Center', path: '/help' },
            { name: 'Safety', path: '/safety' },
            { name: 'Cancellation', path: '/cancellation' },
            { name: 'Contact Us', path: '/contact' },
        ],
        legal: [
            { name: 'Terms of Service', path: '/terms' },
            { name: 'Privacy Policy', path: '/privacy' },
            { name: 'Cookie Policy', path: '/cookies' },
            { name: 'Refund Policy', path: '/refund' },
        ],
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
                                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                                <path d="M12 20C12 15.5817 15.5817 12 20 12V20H28C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20Z" fill="currentColor" />
                                <circle cx="20" cy="20" r="4" fill="currentColor" />
                            </svg>
                            <span>Towplate</span>
                        </Link>
                        <p className="footer-description">
                            India's most trusted car rental platform. Experience premium vehicles
                            with seamless booking and 24/7 roadside assistance.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                {footerLinks.company.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Support</h4>
                            <ul>
                                {footerLinks.support.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Legal</h4>
                            <ul>
                                {footerLinks.legal.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Get the App</h4>
                        <p>Download our mobile app for the best experience</p>
                        <div className="app-buttons">
                            <a href="#" className="app-button">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                <div>
                                    <span>Download on the</span>
                                    <strong>App Store</strong>
                                </div>
                            </a>
                            <a href="#" className="app-button">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                </svg>
                                <div>
                                    <span>Get it on</span>
                                    <strong>Google Play</strong>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-payments">
                        <span>We accept:</span>
                        <div className="payment-icons">
                            <span className="payment-icon">💳 Visa</span>
                            <span className="payment-icon">💳 Mastercard</span>
                            <span className="payment-icon">📱 UPI</span>
                            <span className="payment-icon">📱 GPay</span>
                        </div>
                    </div>
                    <p className="footer-copyright">
                        © {currentYear} Towplate Technologies Pvt. Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
