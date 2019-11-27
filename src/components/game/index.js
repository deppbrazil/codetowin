import React, { useState, useEffect } from 'react';
import './style.css';
import '../../global-style/Font.css';


export default function Game(){
    

    return (
        <>
            <header className="game-head _flexbox">
                <div className="game-head-wrapper">
                    <h1>
                    Question: blablabla
                    </h1>
                </div>
                
            </header>
            <section class="game-question">
                <div class="game-console"></div>
                <div class="game-resposta"></div>
            </section>
        </>
    );
    
}

