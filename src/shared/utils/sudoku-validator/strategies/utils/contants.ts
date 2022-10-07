import {BruteForceValidation} from "../../../../types/brute-force-validation.type";
import {SudokuValidationResults} from "../../../../types/sudoku/sudoku-validation-results.type";

export const  BRUTE_FORCE_SUDOKU_VALIDATION_TYPE :  Record<string, BruteForceValidation> ={
    COLUMN : 'Column',
    ROW : 'Row',
    BOX : 'Box'
}

export const  SUDOKU_RESULTS :  Record<string, SudokuValidationResults> ={
    FINISHED : 'Finished !',
    TRY_AGAIN : 'Try Again !',
}