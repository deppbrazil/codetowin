import React, { useState, useEffect } from 'react';
import './style.css';

export default function Game(){
    

    return (
        <>
            <header>
                <p>
                    Questão: blablablabla
                </p>
            </header>
            <section class="game-question">
                <div class="game-console"></div>
                <div class="game-resposta"></div>
            </section>
        </>
    );
    
}

