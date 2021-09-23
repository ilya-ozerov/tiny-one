import React from 'react';
import "./footer.scss"

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">

                    <div className="footer__contacts">
                        <div className="footer__title">HALOVIETNAM LTD</div>
                        <div className="footer__address">
                            <p>66, Dang Van ngu, Dong Da</p>
                            <p>Hanoi, Vietnam</p>
                        </div>
                        <div className="footer__email">contact@halovietnam.com</div>
                        <div className="footer__phone-number">+844 35149182</div>
                    </div>

                    <aside className="footer__menu">
                        <div className="footer__columns">

                            <div className="footer__column">

                                <ul className="footer__list">
                                    <li>Examples</li>
                                    <li>Shop</li>
                                    <li>License</li>
                                </ul>

                            </div>

                            <div className="footer__column">
                                <ul className="footer__list">
                                    <li>Contact</li>
                                    <li>About</li>
                                    <li>Privacy</li>
                                    <li>Terms</li>
                                </ul>
                            </div>

                            <div className="footer__column">
                                <ul className="footer__list">
                                    <li>Download</li>
                                    <li>Support</li>
                                    <li>Documents</li>
                                </ul>
                            </div>

                            <div className="footer__column">
                                <ul className="footer__list">
                                    <li>Media</li>
                                    <li>Blog</li>
                                    <li>Forums</li>
                                </ul>
                            </div>

                        </div>
                    </aside>
                </div>
            </div>
        </footer>
    );
}