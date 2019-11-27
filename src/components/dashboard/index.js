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
                            <h2 className="h2">ID:xxxxxx</h2>
                        </div>
                    </div>
                    <div className="coin">
                        <h1 className="h1">coin</h1>
                    </div>
                </div>
                <div className="wrapper__head--center flexbox">
                    <div className="coin">
                        <h1 className="h1">flow</h1>
                    </div>
                </div>
            </header>
        
            <section>
                <div>Content</div>
            </section>
        </>
    );
}

export default Dashboard;
