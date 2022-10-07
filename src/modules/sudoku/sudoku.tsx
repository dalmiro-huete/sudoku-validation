import React, {FC, useEffect, useState} from 'react'
import {SudokuValidator} from "../../shared/utils/sudoku-validator/sudoku-validator";
import BruteForceSudoku from "../../shared/utils/sudoku-validator/strategies/brute-force-sudoku.strategy";
import {SUDOKU_BOARD} from "./utils/constants";
import SudokuValidation from "../../shared/types/sudoku/sudoku-validation.interface";
import {OptimizeSudoku} from "../../shared/utils/sudoku-validator/strategies/optimize-sudoku.strategy";

interface SudokuProps {}

const Sudoku: FC<SudokuProps> = () => {
    const [board, setBoard] = useState(SUDOKU_BOARD)
    const sudokuValidator = new SudokuValidator()

    sudokuValidator.setStrategy('brute-force', new BruteForceSudoku())
    sudokuValidator.setStrategy('optimize-sudoku', new OptimizeSudoku())


    const [sudokuValidation, setSudokuValidation] = useState<SudokuValidation>({
        bruteForce: '',
        optimize: ''
    })

    const onChange = (event: any, i: number, j:number) => {
            let value = event.target.value === "" ? 0 : event.target.value
            let temp = [...board]
            temp[i][j] = parseInt(value);
            setBoard(temp);
    }

    useEffect(() => {
        setSudokuValidation(prevState => {
            return {optimize: sudokuValidator.validate('optimize-sudoku', board), bruteForce:  sudokuValidator.validate('brute-force', board)}
        })
    }, [board])


    return (
        <>
            <h1> Sudoku validation | (Sorry for the horrible UI haha but is just a POC XD ) </h1>
            {
               board.map((array, i) => {
                 return  array.map((element, j) => {
                       return(
                           j !== 8 ? <input key={j} value={element} onChange={(event) => onChange(event, i, j)} /> : <><input key={j} value={element} onChange={(event) => onChange(event, i, j)} /><br /></>
                       )

                   })
               })
            }
            <h3>Brute Force Validation: {sudokuValidation.bruteForce}</h3>
            <h3>Optimize Validation : {sudokuValidation.optimize}</h3>
        </>
    )
}

export default (Sudoku)
