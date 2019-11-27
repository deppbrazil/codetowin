import React from 'react';
import './style.css';
import './text.css';
import '../../global-style/Font.css';
import { Link } from 'react-router-dom';

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
                    <h1 className="h1">300 / 3000</h1>
                    <div className="progress-bar flexbox"></div>
                </div>
            </header>
        
            <section className="container flexbox">
                <div className="container__wrapper flexbox">
                    <div className="wrapper__stage flexbox">
                        <h1 className="h1">Fase 1</h1>
                        <div className="wrapper__icon-stage flexbox">
                            <div className="icon-stage complete flexbox"><div className="checked"></div></div>
                                <Link className="link" to="/game">
                                    <button className="icon-stage active"></button>
                                </Link>
                            <div className="icon-stage disable"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="wrapper__stage flexbox">
                        <h1 className="h1">Fase 2</h1>
                        <div className="wrapper__icon-stage flexbox">
                            <div className="icon-stage disable"></div>
                            <div className="icon-stage disable"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="wrapper__stage flexbox">
                        <h1 className="h1">Fase 3</h1>
                        <div className="wrapper__icon-stage flexbox">
                            <div className="icon-stage disable"></div>
                            <div className="icon-stage disable"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Dashboard;
