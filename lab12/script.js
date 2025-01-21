class Sudoku {
    constructor() {
        this.grid = Array.from({ length: 9 }, () => Array(9).fill(0));
    }

    checkRow(row) {
        const seen = new Set();
        for (let col = 0; col < 9; col++) {
            const value = this.grid[row][col];
            if (value !== 0) {
                if (seen.has(value)) return false;
                seen.add(value);
            }
        }
        return true;
    }

    checkColumn(col) {
        const seen = new Set();
        for (let row = 0; row < 9; row++) {
            const value = this.grid[row][col];
            if (value !== 0) {
                if (seen.has(value)) return false;
                seen.add(value);
            }
        }
        return true;
    }

    checkSquare(startRow, startCol) {
        const seen = new Set();
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const value = this.grid[startRow + row][startCol + col];
                if (value !== 0) {
                    if (seen.has(value)) return false;
                    seen.add(value);
                }
            }
        }
        return true;
    }

    validateBoard() {
        for (let i = 0; i < 9; i++) {
            if (!this.checkRow(i)) return { type: "строке", index: i };
            if (!this.checkColumn(i)) return { type: "столбце", index: i };
        }

        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                if (!this.checkSquare(row, col)) return { type: "квадрате", index: { row, col } };
            }
        }

        return null;
    }

    resetBoard() {
        this.grid = Array.from({ length: 9 }, () => Array(9).fill(0));
    }

    generateBoard() {
        const fillGrid = (row, col) => {
            if (row === 9) return true;

            const nextRow = col === 8 ? row + 1 : row;
            const nextCol = (col + 1) % 9;

            if (this.grid[row][col] !== 0) return fillGrid(nextRow, nextCol);

            for (let num = 1; num <= 9; num++) {
                if (this.canPlace(row, col, num)) {
                    this.grid[row][col] = num;
                    if (fillGrid(nextRow, nextCol)) return true;
                    this.grid[row][col] = 0;
                }
            }
            return false;
        };

        this.resetBoard();
        fillGrid(0, 0);
    }

    canPlace(row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (this.grid[row][i] === num || this.grid[i][col] === num) return false;
        }

        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (this.grid[startRow + r][startCol + c] === num) return false;
            }
        }
        return true;
    }

    printBoard() {
        console.log(this.grid.map(row => row.join(" ")).join("\n"));
    }
}

const sudoku = new Sudoku();
sudoku.generateBoard();
sudoku.printBoard();

sudoku.resetBoard();
sudoku.printBoard();

sudoku.generateBoard();
sudoku.grid[0][0] = 2;
sudoku.printBoard();
const validationResult = sudoku.validateBoard();
if (validationResult) {
    console.log(`Ошибка в ${validationResult.type}: ${validationResult.index + 1}`);
} else {
    console.log("Поле корректно!");
}