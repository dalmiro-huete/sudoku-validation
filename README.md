# Sudoku Validation APP

# Quickstart

To get your development environment up and running from scratch, follow these
steps:

1. Clone [git repo](#git-repo)
2. [Running](#running)
3. [Installing packages](#installing-packages)

## Git Repo

> NOTE: Add your ssh public key to your Github account to make life easier.

```
#
mkdir -p ~/BestProjectEver
cd ~/BestProjectEver
# this repo
git clone git@github.com:[blah]
```


## Running

- yarn install
- yarn dev

## Code Structure

All source code is located in the `src/` directory:

1. `src/modules` modules of the application that compose tha main pages
2. `src/Pages` main pages of the application . Entry points to the workflows that are integrated by different modules
3. `src/shared` elements that are shared through the application you will find here patterns, global utilities, types, reusable components etc

## General Summary About the Project
On this problem, we could have multiple solutions and with the idea to show some alternatives to the same problem (brute-force and optimal resolution) was implemented the [Strategy Pattern](https://refactoring.guru/design-patterns/strategy) to switch between strategies using a general context.\
   &nbsp;
   - You could find this specification here : (src/shared/utils/sudoku-validator)
   - The strategy is to make a general sudoku validator fed with the `setMethod` and executed through the `validate` function.
   - This Object is made in the component `src/modules/sudoku/sudoku.tsx` and is in charge of watching the DOM changes to execute and refresh the strategies with the entries
   - The specification of the strategies are in the strategies folder : src/shared/utils/sudoku-validator/strategies.
   
   ### About the strategies : 
All the approaches use the Set Object benefit to validate the existence of not-repeated items per row, column, and boxes.
- **Brute-force approach** : In this approach, we're using three different cycles to: validate column, validate rows, and validates boxes. The two first validations are under the same function with two nested for that change how to get the items according to an argument, and the third validation are four cycles to accomplish: testing of unique items in rows and columns inside the box and the movement of the boxes 
- **Optimize approach** : This approach takes some research, especially for the calculation of the boxes. We unified the loops in two central cycles. The rowItem validation and column validation are straightforward. They are using different Sets to validate the uniqueness; the boxes validation uses the Set but in a variety of rows and columns using the Quotient and remainder of the division to sum the values (0,3,6) in the rows and columns to move the boxes vertically and horizontally.
### Some Bonus
1. Added the capacity in the UI to change the sudoku values readapting the strategies calculation
2. All the code was in typescript and react with next js
3. we added patterns to promote the flexibility of the application
4. Application is hosted in the next link : http://react-assesment.s3-website-us-east-1.amazonaws.com/
