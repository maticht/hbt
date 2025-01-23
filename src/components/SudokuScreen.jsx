import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import solveSudoku from '../utils/sudokuSolver';
import './style.css';
import Motka from './Motka';

const initialBoard = [
    [5, 3, '', '', 7, '', '', '', ''],
    [6, '', '', 1, 9, 5, '', '', ''],
    ['', 9, 8, '', '', '', '', 6, ''],
    [8, '', '', '', 6, '', '', '', 3],
    [4, '', '', 8, '', 3, '', '', 1],
    [7, '', '', '', 2, '', '', '', 6],
    ['', 6, '', '', '', '', 2, 8, ''],
    ['', '', '', 4, 1, 9, '', '', 5],
    ['', '', '', '', 8, '', '', 7, 9],
];

const SudokuScreen = () => {
    const navigate = useNavigate();
    const [board, setBoard] = useState(initialBoard);
    const [showMotka, setShowMotka] = useState(true);
    const [motkaValue, setMotkaValue] = useState('rules');
    const [gameStarted, setGameStarted] = useState(false);

    const handleInputChange = (row, col, value) => {
        if (initialBoard[row][col] !== '') return;

        const updatedBoard = board.map((r, rIdx) =>
            rIdx === row
                ? r.map((c, cIdx) => (cIdx === col ? (isNaN(value) || value < 1 || value > 9 ? '' : value) : c))
                : r
        );
        setBoard(updatedBoard);
    };

    const handleMotkaClose = () => {
        if (motkaValue === 'rules') {
            setMotkaValue('yes');
            setGameStarted(true);
        } else if (motkaValue === 'victory') {
            navigate('/years');
        }
        setShowMotka(false);
    };

    useEffect(() => {
        if (solveSudoku(board)) {
            setTimeout(() => {
                setMotkaValue('victory');
                setShowMotka(true);
            }, 1000);
        }
    }, [board]);

    return (
        <div className="main">
            {showMotka && (
                <Motka
                    value={motkaValue}
                    onClose={handleMotkaClose}
                />
            )}
            {!gameStarted && (
                <Motka
                    value={motkaValue}
                    onClose={handleMotkaClose}
                />
            )}
            <>
                <h1 className={'titleText'}>Реши судоку!</h1>
                <div className="sudoku-grid">
                    {board.map((row, rowIndex) =>
                        row.map((cell, colIndex) => {
                            const isFixed = initialBoard[rowIndex][colIndex] !== '';
                            const isHighlighted = cell !== '';
                            return (
                                <input
                                    key={`${rowIndex}-${colIndex}`}
                                    type="text"
                                    value={cell}
                                    maxLength={1}
                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                                    className={`sudoku-cell ${isFixed ? 'fixed' : 'empty'} ${
                                        isHighlighted ? 'highlighted' : ''
                                    } ${
                                        colIndex % 3 === 2 && colIndex !== 8 ? 'section-border-right' : ''
                                    } ${rowIndex % 3 === 2 && rowIndex !== 8 ? 'section-border-bottom' : ''}`}
                                />
                            );
                        })
                    )}
                </div>
            </>
        </div>
    );
};

export default SudokuScreen;
