import React, {useState} from 'react';
import logo from '../../assets/images/logo.svg';
import './header.scss'

type HeaderProps = {
    featuresRef: React.RefObject<HTMLDivElement>;
    supportRef: React.RefObject<HTMLDivElement>;
    blogRef: React.RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({featuresRef, supportRef, blogRef}) => {

    const [isBurger, setIsBurger] = useState(false);

    const toggleBurger = (toggleValue: boolean) => {
        setIsBurger(toggleValue);
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }

    const scrollToFeatures = () => {
        if (isBurger) {
            setIsBurger(false);
            document.body.style.overflow = "scroll";
        }
        featuresRef.current?.scrollIntoView({behavior: "smooth"});
    }

    const scrollToSupport = () => {
        if (isBurger) {
            setIsBurger(false);
            document.body.style.overflow = "scroll";
        }
        supportRef.current?.scrollIntoView({behavior: "smooth"});
    }

    const scrollToBlog = () => {
        if (isBurger) {
            setIsBurger(false);
            document.body.style.overflow = "scroll";
        }
        blogRef.current?.scrollIntoView({behavior: "smooth"});
    }

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

                        <button onClick={scrollToFeatures} className="header__link">Features</button>
                        <button onClick={scrollToSupport} className="header__link">Support</button>
                        <button onClick={scrollToBlog} className="header__link">Blog</button>

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
                            <button onClick={scrollToFeatures} className="header__link">Features</button>
                            <button onClick={scrollToSupport} className="header__link">Support</button>
                            <button onClick={scrollToBlog} className="header__link">Blog</button>
                        </div>
                    }
                </div>

            </div>
        </header>
    );
}