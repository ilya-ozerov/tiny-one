import React, {useState} from 'react';
import './inspire.scss';
import iPadMini from '../../../assets/images/iPad Mini White facing.png';
import {AndroidFilled, AppleFilled, WindowsFilled} from "@ant-design/icons";

type InspireProps = {}

enum Pages {
    first = 1,
    second = 2,
    third = 3,
}

export const Inspire: React.FC<InspireProps> = () => {

    const [page, setPage] = useState<Pages>(Pages.first);

    return (
        <section className="inspire">
            <div className="container">

                {
                    page === Pages.first &&
                    <div className="inspire__row">
                        <div className="inspire__body">
                            <div className="inspire__title title">Inspire your inspiration 1</div>
                            <div className="inspire__subtitle subtitle">Simple to use for your app, products
                                showcase and your inspirat
                            </div>
                            <div className="inspire__text text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
                                venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta
                                lobortis sit
                            </div>
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
                }

                {
                    page === Pages.second &&
                    <div className="inspire__row">
                        <div className="inspire__body">
                            <div className="inspire__title title">Inspire your inspiration 2</div>
                            <div className="inspire__subtitle subtitle">Simple to use for your app, products
                                showcase and your inspirat
                            </div>
                            <div className="inspire__text text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
                                venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta
                                lobortis sit
                            </div>
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
                }

                {
                    page === Pages.third &&
                    <div className="inspire__row">
                        <div className="inspire__body">
                            <div className="inspire__title title">Inspire your inspiration 3</div>
                            <div className="inspire__subtitle subtitle">Simple to use for your app, products
                                showcase and your inspirat
                            </div>
                            <div className="inspire__text text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
                                venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta
                                lobortis sit
                            </div>
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
                }

                <div className="inspire__row">
                    <div className="inspire__dots">
                        {/* 1 */}
                        <div onClick={() => setPage(Pages.first)}
                             className={page !== Pages.first ? "inspire__dot" : "inspire__dot inspire__dot-active"}></div>
                        {/* 2 */}
                        <div onClick={() => setPage(Pages.second)}
                             className={page !== Pages.second ? "inspire__dot" : "inspire__dot inspire__dot-active"}></div>
                        {/* 3 */}
                        <div onClick={() => setPage(Pages.third)}
                             className={page !== Pages.third ? "inspire__dot" : "inspire__dot inspire__dot-active"}></div>

                    </div>
                </div>
            </div>
        </section>
    );
}