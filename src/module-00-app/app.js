//This page: Board and Todo global variables and local storage

//*************** THE BOARDs and TODOs variables ***************
let allBoardsArray; //the allBoardsArray stores all active boards.
let arrayCounter; //the arrayCounter is used to give boards a unique id
let allTodosArray; //the allTodosArray stores all active todos.
let todoCounter; //the todoCounter is used to give boards a unique id

//*************** LOCAL STORAGE FUNCTIONS ***************
//either retrieves local storage data or uses example data:
const retrieveLocalStorage = function () {
    allBoardsArray = JSON.parse(localStorage.getItem("allBoards")) || [{ boardId: 'board0', boardName: 'All boards' }, { boardId: 'board1', boardName: 'Default' }, { boardId: 'board2', boardName: 'The Odin Project' }];
    arrayCounter = JSON.parse(localStorage.getItem("boardsCounter")) || 2;
    allTodosArray = JSON.parse(localStorage.getItem("allTodos")) || [
        {
            toDoId: 'td0', title: 'To do example', boardId: 'board1', priority: '2', dueDate: '2022-05-28', description: 'With Todo Boards you can add new to do cards with a description, check-list, and notes. Click "Add to do" to start! Ps: an icon will appear at the bottom of the card if you have added note and/or a checklist!', note: 'The description area is too short? Add notes to complement it!', checklist: [['Checklists', true], ['are', true], ['not', false], ['great!', true]]
        },
        {
            toDoId: 'td1', title: 'Todo Project', boardId: 'board2', priority: '1', dueDate: '2022-05-30', description: 'Create a todo list with projects or separate lists of todos: use webpack and date-fns!', note: 'How about writing a note about your progress?', checklist: [['Create boards', true], ['Create Todos', true], ['Filter Schedule', true], ['Escape form fields', false]]
        },
        {
            toDoId: 'td2', title: 'Library Project', boardId: 'board2', priority: '3', dueDate: '', description: 'Do a library app: store boo objects in simple array. Allow users to add, edir, and delete books & change book status to "read"', note: '', checklist: []
        }
        ,
        {
            toDoId: 'td3', title: 'Restaurant Page', boardId: 'board2', priority: '3', dueDate: '', description: 'Use webpack to create a restaurant page. Use tabbed browsing to access the Contact and Menu pages.', note: '', checklist: []
        },
        {
            toDoId: 'td4', title: 'Weather App', boardId: 'board2', priority: '0', dueDate: '', description: 'Create a weather forecast site using the weather API', note: '', checklist: []
        },
        {
            toDoId: 'td5', title: 'Battleship Game', boardId: 'board2', priority: '0', dueDate: '', description: 'Build the game Battleship to practice Test Driven Development with Jest.', note: '', checklist: []
        }
    ];
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



