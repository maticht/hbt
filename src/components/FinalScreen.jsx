import React from 'react';
import './style.css';

const FinalScreen = () => {
    return (
        <div className="main">
            <div className={'finale-text-block'}>
                <h1 className={'titleText'}>С Днём Рождения, Танюсик!</h1>
                <p className={'textText'}>Моя милая прекрасная леди, с днем рождения! <br></br>
                    С каждым годом ты становишься красивее и мудрее!
                    И следующим году желаю тебе преисполниться, быть гордой собой и превзойти ожидания 21 однолетней
                    себя!
                    <br></br>
                    Удачи тебе в постижении английского и дизайна
                    Желаю тебе как можно быстрее найти крутую работу
                    А так же пусть твой следующей год запомниться тебе ещё и активным, счастливым и спокойным отдыхом и
                    побольше встреч с Мотькой
                    <br></br>
                    Люблю тебя!
                    <br></br>
                    Всего самого наилучшего!</p>
            </div>
            <div className="motka-love-image-wrapper">
                <img
                    src={'/img/love.png'}
                    alt={'happy'}
                    className={'motka-love-image'}
                />
            </div>
        </div>
    );
};

export default FinalScreen;
