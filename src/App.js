import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import SudokuScreen from './components/SudokuScreen';
import FinalScreen from './components/FinalScreen';
import YearsScreen from "./components/YearsScreen";

function App() {
  return (
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/question" element={<QuestionScreen />} />
        <Route path="/sudoku" element={<SudokuScreen />} />
        <Route path="/final" element={<FinalScreen />} />
        <Route path="/years" element={<YearsScreen />} />
      </Routes>
  );
}

export default App;
