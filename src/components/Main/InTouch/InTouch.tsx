import {FacebookFilled, GooglePlusSquareFilled, TwitterSquareFilled} from '@ant-design/icons';
import React from 'react';
import './intouch.scss';

type InTouchProps = {
    supportRef: React.RefObject<HTMLDivElement>;
    blogRef: React.RefObject<HTMLDivElement>;
}

export const InTouch: React.FC<InTouchProps> = ({supportRef, blogRef}) => {
    return (
        <section className="in-touch">
            <div className="container">
                <div className="in-touch__row">
                    <div ref={supportRef} className="in-touch__title title">Keep in touch with us</div>
                    <div className="in-touch__subtitle subtitle"> Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
                        venenatis.
                    </div>
                    <div className="in-touch__form">
                        <div className="in-touch__input">
                            <input type="text" placeholder="Enter your email to update"/>
                        </div>
                        <div className="in-touch__button">
                            <button>Submit</button>
                        </div>
                    </div>
                    <div ref={blogRef} className="in-touch__socials">
                        <FacebookFilled className="in-touch__facebook"/>
                        <TwitterSquareFilled className="in-touch__twitter"/>
                        <GooglePlusSquareFilled className="in-touch__google"/>
                    </div>
                </div>
            </div>
        </section>
    );
}