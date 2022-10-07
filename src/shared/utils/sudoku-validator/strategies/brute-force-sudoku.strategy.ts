import StrategyInterface from "../../../types/strategy.interface";
import {BruteForceValidation} from "../../../types/brute-force-validation.type";
import {BRUTE_FORCE_SUDOKU_VALIDATION_TYPE, SUDOKU_RESULTS} from "./utils/contants";

export default class BruteForceSudoku implements StrategyInterface {
    execute(board: number[][]): string {
        const isAValidSudoku = this.validateRowColumns(board, BRUTE_FORCE_SUDOKU_VALIDATION_TYPE.ROW) && this.validateRowColumns(board, BRUTE_FORCE_SUDOKU_VALIDATION_TYPE.COLUMN) && this.validateBox(board)
        return isAValidSudoku ? SUDOKU_RESULTS.FINISHED :  SUDOKU_RESULTS.TRY_AGAIN
    }

     validateRowColumns (board: number[][] , type: BruteForceValidation): boolean  {
        const rowColumnSet = new Set<Number>()
        for(let i = 0 ; i<= board.length-1 ; i++){
            for(let j = 0 ; j<= board.length-1 ; j++){
                let number = type === BRUTE_FORCE_SUDOKU_VALIDATION_TYPE.ROW ? board[i][j] : board[j][i]
                if(!isNaN(number)){
                    if(rowColumnSet.has(number))return false
                    rowColumnSet.add(number)
                }
            }
            rowColumnSet.clear()
        }
        return true
    }

    validateBox (board: number[][]): boolean {
        const boxSet = new Set<Number>()
        // run big boxes
        for(let i = 0 ; i < 3; i++){
            for(let j = 0 ; j < 3; j++){
                // run items of boxes
                for(let k = 0 ; k < 3; k++){
                    for(let a = 0 ; a < 3; a++){
                        let number = board[k + i*3][a+(j*3)]
                        if(!isNaN(number)){
                            if(boxSet.has(number))return false
                            boxSet.add(number)
                        }
                    }

                }

                boxSet.clear()
            }
        }
        return true;
    }



}