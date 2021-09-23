import React from 'react';

type FeaturesItemProps = {
    icon: string,
    title: string;
    text: string;
}

export const FeaturesItem: React.FC<FeaturesItemProps> = ({icon, title, text}) => {
    return (
        <div className="features__item">
            <div className="features__icon">{icon}</div>
            <div className="features__item-title">{title}</div>
            <div className="features__item-text">{text}</div>
        </div>
    );
}