import React, {useRef} from 'react';
import iPadMini from '../../../assets/images/iPad Mini White facing.png';
import {AndroidFilled, AppleFilled, WindowsFilled} from "@ant-design/icons";
import {InspirePage} from "./InspirePage";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
    Pagination, Autoplay
} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import {PaginationOptions} from "swiper/types/components/pagination";

import './inspire.scss';

SwiperCore.use([Pagination, Autoplay]);

type InspireProps = {}

export const Inspire: React.FC<InspireProps> = () => {

    const inspireRef = useRef<HTMLDivElement>(null)

    const pagination: PaginationOptions = {
        "clickable": true,
    }

    return (
        <section ref={inspireRef} className="inspire">
            <div className="container">
                <div className="inspire__row">
                    <div className="inspire__body">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={pagination}
                            autoplay={{delay: 10000}}
                        >
                            <SwiperSlide>
                                <InspirePage title='Inspire your inspiration' subtitle='Simple to use for your app, products
                                showcase and your inspirat' text='Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
                                venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta
                                lobortis sit' icons={[<AppleFilled/>, <AndroidFilled/>, <WindowsFilled/>]}
                                             img={iPadMini} imgAlt='ipad mini with logo'/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <InspirePage title='Lorem ipsum dolor. ' subtitle='Lorem ipsum dolor sit amet.' text='Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
                                    venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta
                                    lobortis sit' icons={[<AppleFilled/>, <AppleFilled/>, <AppleFilled/>]} img={iPadMini} imgAlt='ipad mini with logo'/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <InspirePage title='Lorem ipsum dolor sit amet.'
                                             subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, voluptas.'
                                             text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet assumenda commodi consequuntur culpa cumque cupiditate, deserunt dolor dolorum ducimus eius eligendi facere facilis illo incidunt ipsum maiores natus nemo non obcaecati perferendis possimus provident similique, soluta ut voluptatum. Ab consequuntur delectus earum eius eum harum incidunt laboriosam soluta.'
                                             icons={[<WindowsFilled/>, <WindowsFilled/>, <WindowsFilled/>]} img={iPadMini} imgAlt='ipad mini with logo'/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}