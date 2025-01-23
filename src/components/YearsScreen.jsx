import React, { useState } from 'react';
import Motka from './Motka';
import './style.css';
import {useNavigate} from "react-router-dom";

const YearsScreen = () => {
    const [showMotka, setShowMotka] = useState(false);
    const [motkaValue, setMotkaValue] = useState(false);
    const navigate = useNavigate();

    const handleAnswer = (correct) => {
        if (correct) {
            setMotkaValue('yesYears');
            setShowMotka(true);
        } else {
            setMotkaValue('noYears');
            setShowMotka(true);
        }
    };

    const handleMotkaClose = () => {
        if (motkaValue === 'yesYears') {
            navigate('/final');
        } else if (motkaValue === 'noYears') {
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
                <h1 className={'titleText'}>{"И сколько же тебе лет?"}</h1>
                <div className={'check-button-block'}>
                    <button className={'check-button'} onClick={() => handleAnswer(false)} style={{ margin: '10px' }}>18</button>
                    <button className={'check-button'} onClick={() => handleAnswer(false)} style={{ margin: '10px' }}>21</button>
                    <button className={'check-button'} onClick={() => handleAnswer(true)} style={{ margin: '10px' }}>22</button>
                </div>
            </>
        </div>
    );
};

export default YearsScreen;
