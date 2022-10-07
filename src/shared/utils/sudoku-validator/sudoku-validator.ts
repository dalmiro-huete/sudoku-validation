import StrategyInterface from "../../types/strategy.interface";

export class SudokuValidator {
     private strategies: Record<string, StrategyInterface> = {};

    setStrategy(name: string, strategy : StrategyInterface) {
        this.strategies[name] = strategy;
    }
    validate(name: string, args: any) {
        return this.strategies[name].execute(args)
    }
}