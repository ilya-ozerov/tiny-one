import React, { MutableRefObject } from 'react';
import { Inspire } from './Inspire/Inspire';
import { Features } from "./Features/Features";
import { InTouch } from './InTouch/InTouch';

type MainProps = {
    featuresRef: React.RefObject<HTMLDivElement>;
    supportRef: React.RefObject<HTMLDivElement>;
    blogRef: React.RefObject<HTMLDivElement>;
}

export const Main: React.FC<MainProps> = ({featuresRef, supportRef, blogRef}) => {
    return (
        <main className="main">
            <Inspire/>
            <Features featuresRef={featuresRef}/>
            <InTouch supportRef={supportRef} blogRef={blogRef}/>
        </main>
    );
}