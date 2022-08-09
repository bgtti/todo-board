# todo-list

Live preview: https://bgtti.github.io/todo-list/

![Preview of app](/src/assets/TodoAppPreview.png)

How the Todo Boards works:
The user can create boards (that can represent different projects), and add todo cards to them.
The todo cards can contain a title, description, priority level, due date, note, and check-list.
When the todo card includes a note or check-list, an icon will appear to indicate it on the card (bottom-left).
The user can see the todos of all todo cards under 'All boards'.
The can see todos belonging to a particular board by clicking on that board's name.
The can see todos due 'today' or within the next 7 days.

Boards and Todos can be added, edited, and deleted. Exception being the Default board, which can be eddited, but not deleted.
Content is saved to user's local storage. Storage content can be erased by pressing the 'clear local storage' button.

This app was built using Webpack as part of the Odin Project.
Dates are formatted using date-fns library: https://date-fns.org/v2.28.0/docs/format

The code is organized in the following way:
index.js: displays the elements in the html file. Most elements are imported from other files (navbar, footer, modals, etc).
HTML elements are created in separate files than js management functions. Example: while boards-add-board-modal.js contains the HTML content of the modal, boards.js manages the injection function, and the index.js manages the event listeners.
app.js: sets the arrays where todos and boards are saved to. Also used to manage local storage.

How this Todo App could be improved:

- Adding an option to order todos by priority or due date,
- Adding a log-in and using a database to store data (security of input fields should be checked),
- Adding the possibility to view todos as lists instead of cards,
- Adding the possibility of changing priority of a todo by clicking on the priority icon,
- UI design, especially text areas in modals.

Odin Project Requirements: https://www.theodinproject.com/lessons/node-path-javascript-todo-list
