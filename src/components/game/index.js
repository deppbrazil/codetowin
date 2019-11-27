import React from 'react';
import './style.css';
import '../../global-style/Font.css';
import lado from '../../source/img/l20.jpg';
import profundidade from '../../source/img/p10.jpg';
import result from '../../source/img/result.jpg';

export default function Game(){
    
    const handleClick = (e) => {

    const resposta1 = document.querySelector(".tag._hide._1");
    const resposta2 = document.querySelector(".tag._hide._2");
    const resposta3 = document.querySelector(".tag._hide._3");

    const botao = e.target;
    if(e.target.classList.contains("r_1")){
        resposta1.classList.remove("_hide");
        botao.disabled = true;
    }
    if(e.target.classList.contains("r_2")){
        resposta2.classList.remove("_hide");
        botao.disabled = true;
    }
    if(e.target.classList.contains("_resposta")){
        resposta3.classList.remove("_hide");
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
                <img className="tag _hide _1" src={lado} alt="lado"/>
                <img className="tag _hide _2" src={profundidade} alt="profundidade"/>
                <img className="tag _hide _3" src={result} alt="resultado"/>
            </div>
            <div className="game-resposta">
                <button className="answer-button" onClick={handleClick}>Declarar L = 10</button>
                <button className="answer-button _correct r_1" onClick={handleClick}>Declarar L = 20</button>
                <button className="answer-button _correct r_2" onClick={handleClick}>Declarar P = 10</button>
                <button className="answer-button" onClick={handleClick}>Declarar P = 20</button>
                <button className="answer-button _resposta" onClick={handleClick}>Função</button></div>
        </section>
    </section>
    );
}

