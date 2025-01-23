import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const StartScreen = () => {
    const navigate = useNavigate();

    return (
        <div className={'main'}>
            <h1 className={'titleText'}>Вы готовы начать?</h1>
            <button className={'check-button'} onClick={() => navigate('/question')} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Начать
            </button>
        </div>
    );
};

export default StartScreen;
