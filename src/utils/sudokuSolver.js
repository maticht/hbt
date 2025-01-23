const isValidSudoku = (board) => {
    const rows = new Set();
    const cols = new Set();
    const boxes = new Set();

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const value = board[row][col];
            if (value === '') return false; // Если есть пустые клетки, судоку неверное

            const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

            const rowKey = `row-${row}-${value}`;
            const colKey = `col-${col}-${value}`;
            const boxKey = `box-${boxIndex}-${value}`;

            if (rows.has(rowKey) || cols.has(colKey) || boxes.has(boxKey)) {
                return false; // Если найдены дубли, судоку неверное
            }

            rows.add(rowKey);
            cols.add(colKey);
            boxes.add(boxKey);
        }
    }
    return true; // Все клетки заполнены корректно
};

const solveSudoku = (board) => {
    // Считаем судоку правильным, только если оно валидно и заполнено полностью
    return isValidSudoku(board);
};

export default solveSudoku;
