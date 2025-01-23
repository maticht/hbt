import React, { useState } from 'react';
import Motka from './Motka';
import './style.css';
import {useNavigate} from "react-router-dom";

const QuestionScreen = () => {
    const [showMotka, setShowMotka] = useState(true);
    const [motkaValue, setMotkaValue] = useState('hello');
    const navigate = useNavigate();

    const handleAnswer = (correct) => {
        if (correct) {
            setMotkaValue('yes');
            setShowMotka(true);
        } else {
            setMotkaValue('no');
            setShowMotka(true);
        }
    };

    const handleMotkaClose = () => {
        if (motkaValue === 'yes') {
            navigate('/sudoku');
        } else if (motkaValue === 'no') {
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
                    <h1 className={'titleText'}>{"Кто вы?"}</h1>
                    <div className={'check-button-block'}>
                        <button className={'check-button'} onClick={() => handleAnswer(false)} style={{ margin: '10px' }}>Мотька</button>
                        <button className={'check-button'} onClick={() => handleAnswer(true)} style={{ margin: '10px' }}>Танюсик</button>
                        <button className={'check-button'} onClick={() => handleAnswer(false)} style={{ margin: '10px' }}>Вончик</button>
                    </div>
                </>
        </div>
    );
};

export default QuestionScreen;
