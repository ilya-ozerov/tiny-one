import {
    DownloadOutlined,
    FolderOutlined,
    LayoutOutlined,
    MailOutlined,
    TabletOutlined,
    ToolOutlined
} from '@ant-design/icons';
import React from 'react';
import './features.scss'

type FeaturesProps = {
    featuresRef: React.RefObject<HTMLDivElement>;
}

export const Features: React.FC<FeaturesProps> = ({featuresRef}) => {
    return (
        <section ref={featuresRef} className="features">
            <div className="container">
                <div className="features__row">
                    <div className="features__title title">Features header</div>
                    <div className="features__subtitle subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
                        venenatis.
                    </div>

                    <div className="features__columns">
                        <div className="features__column">
                            <div className="features__items">

                                <div className="features__item">
                                    <div className="features__icon"><TabletOutlined/></div>
                                    <div className="features__body">
                                        <div className="features__item-title">Fully Responsive</div>
                                        <div className="features__item-text text">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                                        </div>
                                    </div>
                                </div>

                                <div className="features__item">
                                    <div className="features__icon"><ToolOutlined/></div>
                                    <div className="features__body">
                                        <div className="features__item-title">HTML3 & CSS3</div>
                                        <div className="features__item-text text">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="features__column">
                            <div className="features__items">

                                <div className="features__item">
                                    <div className="features__icon"><LayoutOutlined/></div>
                                    <div className="features__body">
                                        <div className="features__item-title">Fully Layered PSD</div>
                                        <div className="features__item-text text">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                                        </div>
                                    </div>
                                </div>

                                <div className="features__item">
                                    <div className="features__icon"><MailOutlined/></div>
                                    <div className="features__body">
                                        <div className="features__item-title">Email Template</div>
                                        <div className="features__item-text text">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="features__column">
                            <div className="features__items">

                                <div className="features__item">

                                    <div className="features__icon"><FolderOutlined/></div>

                                    <div className="features__body">
                                        <div className="features__item-title">Font Awesome Icons</div>

                                        <div className="features__item-text text">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                                        </div>
                                    </div>
                                </div>

                                <div className="features__item">
                                    <div className="features__icon"><DownloadOutlined/></div>

                                    <div className="features__body">
                                        <div className="features__item-title">Free to download</div>
                                        <div className="features__item-text text">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}