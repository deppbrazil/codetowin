import React from 'react';
import './style.css';
import '../../global-style/Font.css';
import Button from '../answerButton/index'


export default function Game(){
    

    return (
        <>
            <header className="game-head _flexbox">
                <div className="game-head-wrapper _flexbox">
                    <h1 className="game-question">
                    Question: blablabla
                    </h1>
                </div>
                
            </header>
            <section class="game-question-board">
                <div class="game-console"></div>
                <div class="game-resposta"><Button/></div>
            </section>
        </>
    );
    
}

