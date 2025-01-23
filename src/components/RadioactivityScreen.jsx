import React, { useState } from 'react';
import Motka from './Motka';
import './style.css';
import {useNavigate} from "react-router-dom";

const RadioactivityScreen = () => {
    const [showMotka, setShowMotka] = useState(true);
    const [motkaValue, setMotkaValue] = useState('hello');
    const navigate = useNavigate();

    const handleAnswer = (correct) => {
        if (correct) {
            setMotkaValue('yesRadioactivity');
            setShowMotka(true);
        } else {
            setMotkaValue('noRadioactivity');
            setShowMotka(true);
        }
    };

    const handleMotkaClose = () => {
        if (motkaValue === 'yesRadioactivity') {
            navigate('/zodiac');
        } else if (motkaValue === 'noRadioactivity') {
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
                <h1 className={'titleText'}>{"В чём измеряется радиоактивность?"}</h1>
                <div className={'check-button-block'}>
                    <button className={'check-button'} onClick={() => handleAnswer(true)}
                            style={{margin: '10px'}}>Беккерель (Бк)
                    </button>
                    <button className={'check-button'} onClick={() => handleAnswer(false)}
                            style={{margin: '10px'}}>Зиверт (Зв)
                    </button>
                    <button className={'check-button'} onClick={() => handleAnswer(false)}
                            style={{margin: '10px'}}>Грей (Гр)
                    </button>
                    <button className={'check-button'} onClick={() => handleAnswer(false)}
                            style={{margin: '10px'}}>Эт самое
                    </button>
                </div>
            </>
        </div>
    );
};

export default RadioactivityScreen;
