import React from 'react';
import './style.css';

const Motka = ({ value, onClose }) => {

    const slides = [
        {
            key: 'hello',
            text: 'Привет! Я Мотька. Приглашаю тебя пройти этот тест!',
            image: '/img/hello.png',
            buttonText: 'Продолжить',
        },
        {
            key: 'yes',
            text: 'Оо, куль! Приятно познакомиться! Продолжим?',
            image: '/img/yes.png',
            buttonText: 'Продолжить',
        },
        {
            key: 'no',
            text: 'К сожалению, вы нам не подходите. Попробуйте ещё раз!',
            image: '/img/no.png',
            buttonText: 'Вернуться',
        },
        {
            key: 'rules',
            text: 'Ну, на самом деле каждый может назваться Танюшей, а ты докажи, что ты действительно та самая!',
            image: '/img/info.png',
            buttonText: 'Начать игру!',
        },
        {
            key: 'victory',
            text: 'Поздравляю! Ты решила судоку и доказала что ты та самая! Молоток!',
            image: '/img/yes.png',
            buttonText: 'Продолжить',
        },
        {
            key: 'yesYears',
            text: 'Да да, все так, моя именинница)',
            image: '/img/yes.png',
            buttonText: 'Завершить',
        },
        {
            key: 'noYears',
            text: 'Всё ложь, тебе 22! Меня не обманешь!',
            image: '/img/info.png',
            buttonText: 'Завершить',
        },
    ];

    const slide = slides.find((slide) => slide.key === value) || slides[1];

    return (
        <div className="motka-overlay">
            <div className="motka-modal">
                <div className="motka-content-block">
                    <p>{slide.text}</p>
                    <button onClick={onClose} className="check-button">{slide.buttonText}</button>
                </div>
                <div className="motka-image-wrapper">
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="motka-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Motka;
