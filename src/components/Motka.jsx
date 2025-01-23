import React, {useEffect, useState} from 'react';
import './style.css';

const Motka = ({ value, onClose }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const slides = [
        {
            key: 'hello',
            text: 'Привет! Приглашаю тебя пройти этот тест!',
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
            text: 'Да-да, все так, моя именинница)',
            image: '/img/yes.png',
            buttonText: 'Завершить',
        },
        {
            key: 'noYears',
            text: 'Всё ложь, тебе 22! Меня не обманешь!',
            image: '/img/info.png',
            buttonText: 'Вернуться',
        },
        {
            key: 'yesZodiac',
            text: 'Оо, володей значит! Добро пожаловать, мы вам всегда рады!',
            image: '/img/yes.png',
            buttonText: 'Продолжить',
        },
        {
            key: 'noZodiac',
            text: 'Сожалею, это закрытый клуб. Только для водолеев!',
            image: '/img/no.png',
            buttonText: 'Вернуться',
        },
        {
            key: 'yesRadioactivity',
            text: 'Ого, это правильный ответ, умняша! Продолжим?',
            image: '/img/yes.png',
            buttonText: 'Продолжить',
        },
        {
            key: 'noRadioactivity',
            text: 'Очень близко, но нет( Попробуй ка ёщё раз!',
            image: '/img/no.png',
            buttonText: 'Вернуться',
        },
    ];

    const slide = slides.find((slide) => slide.key === value) || slides[1];

    useEffect(() => {
        setDisplayedText(''); // Очищаем текст перед началом
        setIsButtonVisible(false); // Скрываем кнопку

        const characters = Array.from(slide.text); // Преобразуем строку в массив символов
        let index = 0;

        characters.map((char, i) => {
            setTimeout(() => {
                setDisplayedText((prev) => prev + char); // Добавляем текущий символ
                if (i === characters.length - 1) { // Когда последний символ добавлен
                    setIsButtonVisible(true); // Показываем кнопку
                }
            }, 50 * i); // Увеличиваем задержку для каждого символа
        });

        return () => {
            setDisplayedText('');
            setIsButtonVisible(false);
        };
    }, [slide.text]);




    return (
        <div className="motka-overlay">
            <div className="motka-modal">
                <div className="motka-content-block">
                    <p>{displayedText}</p>
                    <button
                        onClick={onClose}
                        className={`check-button ${isButtonVisible ? 'visible' : 'hidden'}`}
                        disabled={!isButtonVisible}
                    >
                        {slide.buttonText}
                    </button>
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
