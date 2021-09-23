import React from 'react';
import { Inspire } from './Inspire/Inspire';
import { Features } from "./Features/Features";
import { InTouch } from './InTouch/InTouch';

export const Main: React.FC = () => {
    return (
        <main className="main">
            <Inspire />
            <Features />
            <InTouch />
        </main>
    );
}