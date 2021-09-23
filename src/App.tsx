import React, {useState} from 'react';
import './App.scss';
import {Footer} from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {ReactComponent} from "*.svg";


const App = () => {
    const [isBurger, setIsBurger] = useState(false);

    const toggleBurger = (toggleValue: boolean) => {
        setIsBurger(toggleValue);
    }

    return (
        <div className="wrapper">
            <Header isBurger={isBurger} toggleBurger={toggleBurger}/>
            {
                !isBurger &&
                <React.Fragment>
                    <div className="content">
                        <Main/>
                    </div>
                    <Footer/>
                </React.Fragment>
            }
        </div>
    );
}

export default App;
