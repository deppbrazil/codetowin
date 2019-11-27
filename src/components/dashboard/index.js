import React from 'react';
import './style.css';
import './text.css';
import '../../global-style/Font.css';


function Dashboard() {
    return (
        <>
            <header className="head flexbox">
                <div className="wrapper__head flexbox">
                    <div className="wrapper__avatar flexbox">
                        <div className="avatar"></div>
                        <div className="wrapper__text">
                            <h1 className="h1">user</h1>
                            <h2 className="h2">ID: 999999-8</h2>
                        </div>
                    </div>
                    <div className="wrapper__coin flexbox">
                        <h1 className="h1">10x</h1>
                        <div className="coin"></div>
                    </div>
                </div>
                <div className="wrapper__head--center flexbox">
                    <h1 className="h1">100 / 1000</h1>
                    <div className="progress-bar flexbox"></div>
                </div>
            </header>
        
            <section>
                <div></div>
            </section>
        </>
    );
}

export default Dashboard;
