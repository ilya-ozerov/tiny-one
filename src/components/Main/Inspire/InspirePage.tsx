import React, { ReactElement } from 'react';
import './inspire.scss';

type InspirePageProps = {
    title: string;
    subtitle: string;
    text: string;
    img: string;
    imgAlt: string;

    icons?: Array<ReactElement>;
}

export const InspirePage: React.FC<InspirePageProps> = ({title, subtitle, text, icons, img, imgAlt}) => {

    const iconsList = icons?.map(icon => {
        return <li>{icon}</li>;
    })

    return (
        <div className="inspire__page">
            <div className="inspire__body">
                <div className="inspire__title title">{title}</div>
                <div className="inspire__subtitle subtitle">{subtitle}</div>
                <div className="inspire__text text">{text}</div>
                <ul className="inspire__icons">
                    {iconsList}
                </ul>
            </div>
            <div className="inspire__image">
                <img src={img} alt={imgAlt}/>
            </div>
        </div>
    );
}