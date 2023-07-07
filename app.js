"use strict";

const gameBoard = (() => {

    const board = document.getElementById('game-board');
    /* const boardObject = ['X','O','X','O','X','O','X','O','X']; */
    

    const createBoard = () => {
        for (let i = 0 ; i < 9 ; i++) {
            const playBox = document.createElement('div');
            playBox.classList.add('play-square');
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

    const playerTurn = () => {
        const space = document.querySelectorAll('.play-square');
            
            space.forEach((square) => {
                
                square.addEventListener('click',function(e) {
                    console.log("ff");
                    square.innerHTML = 'X';
                })

            })
    }

    return {playerTurn};
}


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