//Board and Todo creation

//*** THE BOARDs and TODOs
let allBoardsArray; //the allBoardsArray stores all active boards.
let arrayCounter; //the arrayCounter is used to give boards a unique id
let allTodosArray;
let todoCounter;

// localStorage.clear();
//*** LOCAL STORAGE
const retrieveLocalStorage = function () {
    allBoardsArray = JSON.parse(localStorage.getItem("allBoards")) || [{ boardId: 'board0', boardName: 'All boards' }, { boardId: 'board1', boardName: 'Default' }];
    arrayCounter = JSON.parse(localStorage.getItem("boardsCounter")) || 2;
    allTodosArray = JSON.parse(localStorage.getItem("allTodos")) || [];
    todoCounter = JSON.parse(localStorage.getItem("todoCounter")) || 0;
}()
// retrieveLocalStorage();

const updateLocalStorage = function () {
    localStorage.clear();
    localStorage.setItem("allBoards", JSON.stringify(allBoardsArray));
    localStorage.setItem("boardsCounter", JSON.stringify(arrayCounter));
    localStorage.setItem("allTodos", JSON.stringify(allTodosArray));
    localStorage.setItem("todoCounter", JSON.stringify(todoCounter));
}
// const exampleAB = function () {
//     console.log(allBoardsArray)
//     console.log(arrayCounter)
//     console.log(allTodosArray)
//     console.log(todoCounter)
// }
// exampleAB()

//*** UPDATING ARRAYS and COUNTERS
const updateAllBoardsArray = function (newArray) {
    console.log(newArray)
    if (newArray !== undefined) {
        allBoardsArray = newArray;
    }
    updateLocalStorage();
}
const updateBoardCounter = function () {
    arrayCounter++;
    console.log(arrayCounter);
    updateLocalStorage();
}

const updateAllTodosArray = function (newArray) {
    if (newArray !== undefined) {
        allTodosArray = newArray;
    }
    updateLocalStorage();
}

const updateTodoCounter = function () {
    todoCounter++;
    updateLocalStorage();
}

export {
    allBoardsArray,//used in boards.js
    arrayCounter,//used in boards.js
    allTodosArray,
    todoCounter,
    // updateLocalStorage,
    // retrieveLocalStorage,
    updateAllBoardsArray, //used in boards.js //used in todo.js
    updateBoardCounter, //used in boards.js

    updateAllTodosArray, //used in todo.js
    updateTodoCounter, //used in todo.js

}



