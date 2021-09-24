import React, {useRef} from 'react';
import './App.scss';
import {Footer} from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';


const App = () => {

    const featuresRef = useRef<HTMLDivElement>(null);
    const supportRef = useRef<HTMLDivElement>(null);
    const blogRef = useRef<HTMLDivElement>(null);

    return (
        <div className="wrapper">
            <Header featuresRef={featuresRef} blogRef={blogRef} supportRef={supportRef} />
            <div className="content">
                <Main featuresRef={featuresRef} blogRef={blogRef} supportRef={supportRef} />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
