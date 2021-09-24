import React from 'react';
import './inspire.scss';
import iPadMini from '../../../assets/images/iPad Mini White facing.png';
import {AndroidFilled, AppleFilled, WindowsFilled} from "@ant-design/icons";

type InspireProps = {
}

export const Inspire: React.FC<InspireProps> = () => {
    return (
        <section className="inspire">
            <div className="container">
                <div className="inspire__row">
                    <div className="inspire__body">
                        <div className="inspire__title title">Inspire your inspiration</div>
                        <div className="inspire__subtitle subtitle">Simple to use for your app, products showcase and your inspirat</div>
                        <div className="inspire__text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit </div>
                        <div className="inspire__icons">
                            <AppleFilled className="inspire__apple-icon"/>
                            <AndroidFilled className="inspire__android-icon"/>
                            <WindowsFilled className="inspire__windows-icon"/>
                        </div>
                    </div>

                    <div className="inspire__image">
                        <img src={iPadMini} alt="ipad mini with logo"/>
                    </div>
                </div>
                <div className="inspire__row">
                    <div className="inspire__dots">
                        <div className="inspire__dot inspire__dot-active"></div>
                        <div className="inspire__dot"></div>
                        <div className="inspire__dot"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}