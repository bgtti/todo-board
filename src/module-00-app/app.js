//This page: Board and Todo global variables and local storage

//*************** THE BOARDs and TODOs variables ***************
let allBoardsArray; //the allBoardsArray stores all active boards.
let arrayCounter; //the arrayCounter is used to give boards a unique id
let allTodosArray; //the allTodosArray stores all active todos.
let todoCounter; //the todoCounter is used to give boards a unique id

//*************** LOCAL STORAGE FUNCTIONS ***************
const retrieveLocalStorage = function () {
    allBoardsArray = JSON.parse(localStorage.getItem("allBoards")) || [{ boardId: 'board0', boardName: 'All boards' }, { boardId: 'board1', boardName: 'Default' }];
    arrayCounter = JSON.parse(localStorage.getItem("boardsCounter")) || 2;
    allTodosArray = JSON.parse(localStorage.getItem("allTodos")) || [{
        toDoId: 'td0', title: 'To do example', boardId: 'board1', priority: '2', dueDate: '2022-05-28', description: 'With Todo Boards you can add new to do cards with a description, check-list, and notes. Click "Add to do" to start!', note: 'The description area is too short? Add notes to complement it!', checklist: [['Checklists', true], ['are', true], ['not', false], ['great!', true]]
    }];
    todoCounter = JSON.parse(localStorage.getItem("todoCounter")) || 1;
}()

const updateLocalStorage = function () {
    localStorage.setItem("allBoards", JSON.stringify(allBoardsArray));
    localStorage.setItem("boardsCounter", JSON.stringify(arrayCounter));
    localStorage.setItem("allTodos", JSON.stringify(allTodosArray));
    localStorage.setItem("todoCounter", JSON.stringify(todoCounter));
}

//*************** UPDATING ARRAYS and COUNTERS FUNCTIONS ***************
const updateAllBoardsArray = function (newArray) {
    if (newArray !== undefined) {
        allBoardsArray = newArray;
    }
    updateLocalStorage();
}
const updateBoardCounter = function () {
    arrayCounter++;
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

//*************** PAGE EXPORTS ***************
export {
    allBoardsArray,//used in boards.js //used in todo.js
    arrayCounter,//used in boards.js
    allTodosArray, //used in todo.js
    todoCounter, //used in todo.js

    updateAllBoardsArray, //used in boards.js 
    updateBoardCounter, //used in boards.js

    updateAllTodosArray, //used in todo.js
    updateTodoCounter, //used in todo.js

}



