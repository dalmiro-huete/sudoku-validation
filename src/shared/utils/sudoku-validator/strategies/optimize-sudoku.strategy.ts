import StrategyInterface from "../../../types/strategy.interface";
import {SUDOKU_RESULTS} from "./utils/contants";

export class OptimizeSudoku implements StrategyInterface {
    execute(board: number[][]): string {
            const rowSet = new Set()
            const columnSet = new Set()
            const boxSet = new Set()
            for(let i = 0; i <= board.length -1; i++){
                const sudokuRow = board[i]
                for(let j = 0; j <= sudokuRow.length -1 ; j++ ){
                    const rowItem = sudokuRow[j]
                    const columnItem = board[j][i]
                    const boxItem = board[3 * Math.floor(i/3) + Math.floor(j/3)][((i*3) % 9) + (j % 3)]
                    // validates every row item
                    if(!isNaN(rowItem)){
                        if(rowSet.has(rowItem)) return SUDOKU_RESULTS.TRY_AGAIN
                        rowSet.add(rowItem)
                    }
                    // validates every column item
                    if(!isNaN(columnItem)){
                        if(columnSet.has(columnItem)) return SUDOKU_RESULTS.TRY_AGAIN
                        columnSet.add(columnItem)
                    }
                    // validates boxes
                    // validates every column item
                    if(!isNaN(boxItem)){
                        if(boxSet.has(boxItem)) return SUDOKU_RESULTS.TRY_AGAIN
                        boxSet.add(boxItem)
                    }
                }
                rowSet.clear()
                columnSet.clear()
                boxSet.clear()
            }

            return SUDOKU_RESULTS.FINISHED
        }
}