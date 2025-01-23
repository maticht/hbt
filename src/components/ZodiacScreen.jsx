import React, { useState } from 'react';
import Motka from './Motka';
import './style.css';
import {useNavigate} from "react-router-dom";

const ZodiacScreen = () => {
    const [showMotka, setShowMotka] = useState(false);
    const [motkaValue, setMotkaValue] = useState(false);
    const navigate = useNavigate();

    const handleAnswer = (correct) => {
        if (correct) {
            setMotkaValue('yesZodiac');
            setShowMotka(true);
        } else {
            setMotkaValue('noZodiac');
            setShowMotka(true);
        }
    };

    const handleMotkaClose = () => {
        if (motkaValue === 'yesZodiac') {
            navigate('/question');
        } else if (motkaValue === 'noZodiac') {
            navigate('/');
        }
        setShowMotka(false);
    };

    return (
        <div className={'main'}>
            {showMotka && (
                <Motka
                    value={motkaValue}
                    onClose={handleMotkaClose}
                />
            )}
            <>
                <h1 className={'titleText'}>{"Кто ты по знаку зодиака?"}</h1>
                <div className={'check-button-block'}>
                    <button className={'check-button'} onClick={() => handleAnswer(false)}
                            style={{margin: '10px'}}>Весы
                    </button>
                    <button className={'check-button'} onClick={() => handleAnswer(true)}
                            style={{margin: '10px'}}>Водолей
                    </button>
                    <button className={'check-button'} onClick={() => handleAnswer(false)}
                            style={{margin: '10px'}}>Рыбы
                    </button>
                    <button className={'check-button'} onClick={() => handleAnswer(false)}
                            style={{margin: '10px'}}>Лев
                    </button>
                </div>
            </>
        </div>
    );
};

export default ZodiacScreen;
