import React from 'react';
import './style.css';
import '../../global-style/Font.css';

import lado from '../../source/img/l20.jpg';
import profundidade from '../../source/img/p10.jpg';
import result from '../../source/img/result.jpg';


export default function Game(){
    
    const handleClick = (e) => {
           
    const resposta = document.querySelector(".tag._hide");
    const botao = e.target;
    if(e.target.classList.contains("_correct")){
        resposta.classList.remove("_hide");
        botao.disabled = true;
    }
    if(e.target.classList.contains("_resposta")){
        resposta.classList.remove("_hide");
        botao.disabled = true;
    }

}




    return (
        <section className="game-page">
            <header className="game-head _flexbox">
                <div className="game-head-wrapper _flexbox">
                    <h1 className="game-question">
                    Questão: João precisa identificar a área de um terreno. Dado que a área é retangular com uma profundidade de 10 metros e largura com o dobro da profundidade. Identifique qual a área total do terreno que Jão está analisando:
                    </h1>
                </div>
                
            </header>
            <section className="game-question-board">
                <div className="game-console">
                    <img className="tag _hide" src={lado} alt="lado"/>
                    <img className="tag _hide" src={profundidade} alt="profundidade"/>
                    <img className="tag _hide" src={result} alt="resultado"/>
                </div>
                <div className="game-resposta">
                    <button className="answer-button" onClick={handleClick}>Declarar L = 10</button>
                    <button className="answer-button _correct" onClick={handleClick}>Declarar L = 20</button>
                    <button className="answer-button _correct" onClick={handleClick}>Declarar P = 10</button>
                    <button className="answer-button" onClick={handleClick}>Declarar P = 20</button>
                    <button className="answer-button _resposta" onClick={handleClick}>Resposta</button></div>


            </section>
        </section>
    );
    
}

