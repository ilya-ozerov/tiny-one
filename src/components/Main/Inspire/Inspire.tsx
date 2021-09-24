import React, {useEffect, useRef, useState} from 'react';
import './inspire.scss';
import iPadMini from '../../../assets/images/iPad Mini White facing.png';
import {AndroidFilled, AppleFilled, WindowsFilled} from "@ant-design/icons";
import {InspirePage} from "./InspirePage";

type InspireProps = {}

enum Pages {
    first = 1,
    second = 2,
    third = 3,
}

export const Inspire: React.FC<InspireProps> = () => {

    const [page, setPage] = useState<Pages>(Pages.first);
    const inspireRef = useRef<HTMLDivElement>(null)

    const togglePage = (number: Pages) => {
        setPage(number);

        if (window.innerWidth < 767) {
            inspireRef.current?.scrollIntoView({behavior: "smooth"});
        }
    }

    useEffect(() => {
        const autoChangePage = setInterval(() => {
            setPage(current => {
                switch (current) {
                    case Pages.first:
                        return Pages.second;
                    case Pages.second:
                        return Pages.third;
                    case Pages.third:
                        return Pages.first;
                }
            });
        }, 10000);

        return () => {
            clearInterval(autoChangePage);
        }
    })

    return (
        <section ref={inspireRef} className="inspire">
            <div className="container">
                <div className="inspire__row">
                    {
                        page === Pages.first &&
                        <InspirePage title='Inspire your inspiration' subtitle='Simple to use for your app, products
                                showcase and your inspirat' text='Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
                                venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta
                                lobortis sit' icons={[<AppleFilled/>, <AndroidFilled/>, <WindowsFilled/>]} img={iPadMini} imgAlt='ipad mini with logo'/>
                    }

                    {
                        page === Pages.second &&
                        <InspirePage title='Lorem ipsum dolor. ' subtitle='Lorem ipsum dolor sit amet.' text='Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
                                    venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta
                                    lobortis sit' icons={[<AppleFilled/>, <AppleFilled/>, <AppleFilled/>]} img={iPadMini} imgAlt='ipad mini with logo'/>
                    }
                    {
                        page === Pages.third &&
                        <InspirePage title='Lorem ipsum dolor sit amet.'
                                     subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, voluptas.'
                                     text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet assumenda commodi consequuntur culpa cumque cupiditate, deserunt dolor dolorum ducimus eius eligendi facere facilis illo incidunt ipsum maiores natus nemo non obcaecati perferendis possimus provident similique, soluta ut voluptatum. Ab consequuntur delectus earum eius eum harum incidunt laboriosam soluta.'
                                     icons={[<WindowsFilled/>, <WindowsFilled/>, <WindowsFilled/>]} img={iPadMini} imgAlt='ipad mini with logo'/>
                    }
                </div>

                <div className="inspire__row">
                    <div className="inspire__dots">
                        {/* 1 */}
                        <div onClick={() => togglePage(Pages.first)}
                             className={page !== Pages.first ? "inspire__dot" : "inspire__dot inspire__dot-active"}></div>
                        {/* 2 */}
                        <div onClick={() => togglePage(Pages.second)}
                             className={page !== Pages.second ? "inspire__dot" : "inspire__dot inspire__dot-active"}></div>
                        {/* 3 */}
                        <div onClick={() => togglePage(Pages.third)}
                             className={page !== Pages.third ? "inspire__dot" : "inspire__dot inspire__dot-active"}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}