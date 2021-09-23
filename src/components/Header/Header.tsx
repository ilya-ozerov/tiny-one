import React from 'react';
import logo from '../../assets/images/logo.svg';
import './header.scss'

type HeaderProps = {
    isBurger: boolean;
    toggleBurger: (toggleValue: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({isBurger, toggleBurger}) => {

    return (
        <header className="header">
            <div className="container">

                <div className="header__row">
                    <div className="header__logo">
                        <div className="header__img">
                            <img src={logo} alt="Company's logo fingerprint" />
                        </div>
                        <div className="header__name">tinyone</div>
                    </div>

                    <aside className="header__menu">

                        <a className="header__link" href='#'>Features</a>
                        <a className="header__link" href='#'>Support</a>
                        <a className="header__link" href='#'>Blog</a>

                    </aside>

                    {
                        !isBurger &&
                        <div onClick={() => toggleBurger(true)} className="header__burger">
                            <span></span>
                        </div>
                    }

                    {
                        isBurger && <div onClick={() => toggleBurger(false)} className="header__cross"></div>
                    }

                    {
                        isBurger &&
                        <div className="header__mobile-menu">
                            <a className="header__link" href='#'>Features</a>
                            <a className="header__link" href='#'>Support</a>
                            <a className="header__link" href='#'>Blog</a>
                        </div>
                    }
                </div>

            </div>
        </header>
    );
}