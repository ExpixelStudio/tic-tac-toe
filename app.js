"use strict";

const gameBoard = (() => {

    const board = document.getElementById('game-board');
    /* const boardObject = ['X','O','X','O','X','O','X','O','X']; */
    

    const createBoard = () => {
        for (let i = 0 ; i < 9 ; i++) {
            const playBox = document.createElement('div');
            playBox.classList.add('play-square');
            playBox.classList.add(`squareEl-${[i+1]}`); //TODO make win condtions in gameController function using these classes
            board.appendChild(playBox);
        }
    }

    const display = () => {
        createBoard();
        const render = document.querySelectorAll('.play-square');
            render.forEach((object,index) => {
                /* object.innerHTML = boardObject[index]; */
            })
    }
        

    /* const print = () => console.log(display()); */
        return {
            display,
            /* boardObject, */
        };

})(); //gameBoard module

const gameController = () => {

        /* const boardObject = ['X','O','X','O','X','O','X','O','X']; */
    

    const playerTurn = () => {

        const boardObject = ['X','O','X','O','X','O','X','O','X'];
        const turnMsg = document.querySelector('.player-turn');
        const playSpace = document.querySelectorAll('.play-square');
        const parent = document.getElementById('game-board');
        let i = -1;
        /* console.log([parent].indexOf()); */
        /* console.log(parent.childNodes); */
            playSpace.forEach((square) => {
                
                console.log('hmmss');
                
                square.addEventListener('click' , function(e){
                    checkWin();
                    console.log('clicked play space');
                    console.log('Index:'+ Array.from(parent.children).indexOf(square),square);
                    /* if(square.children) */
                    /* for (let i = 0; i < boardObject.length-1 ; i++) { */
                    if(square.innerHTML == '') {
                        i++;
                        /* console.log(i); */
                        turnMsg.innerHTML = `Its ${boardObject[i+1]}'s turn.`;
                        square.innerHTML = boardObject[i];
                        checkWin();
                    } 
                        return;
                });

            });
    };
    
    /* const checkWin = () => {
        const parent = document.getElementById('game-board');

        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];

          for (const winCombo of winConditions) {
                if (winCombo.every(index => boardObject[index] === 'X')){
                    console.log('X wins');
                    return true;
                }
          }

            return false;
        };
        
      
        }
*/
        return {
            playerTurn,
            checkWin,
    };
}

const checkWin = () => {
    //const boardObject = ['X','O','X','O','X','O','X','O','X'];
    const parent = document.getElementById('game-board');
    //const playSpace = document.querySelectorAll('.play-square');
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      
            
         for (const winCombo of winConditions) {

            const [a,b,c] = winCombo;
            if (parent.children[a].innerHTML =='X' && parent.children[b].innerHTML == 'X' && parent.children[c].innerHTML == 'X'){
                console.log('X wins!');
                return true;
            } 

            else if(parent.children[a].innerHTML =='O' && parent.children[b].innerHTML == 'O' && parent.children[c].innerHTML == 'O'){
                console.log('O wins!');
                return true;
            }
        }
            
        return false;
    };
      
    
      
    /* if(parent.children[0].innerHTML =='X' && parent.children[1].innerHTML == 'X' && parent.children[2].innerHTML == 'X') {
        alert('X Wins');
        console.log('X Win');
    } */





const gameFlow = gameController();

gameBoard.display();

gameFlow.playerTurn();



/* console.log(gameBoard.boardObject); */

/* const show = gameBoard();

show(); */

/* const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  
  const jeff = personFactory('jeff', 27);
  
  console.log(jeff.name); // 'jeff'
  
  jeff.sayHello(); // calls the function and logs 'hello!' */