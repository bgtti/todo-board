# todo-list

To-do list app

How the Todo Boards works:
The user can create boards (that can represent different projects), and add todo cards to them.
The todo cards can contain a title, description, priority level, due date, note, and check-list.
The user can see the todos of all todo cards under 'All boards'.
The can see todos belonging to a particular board by clicking on that board's name.
The can see todos due 'today' or within the next 7 days.

Boards and Todos can be added, edited, and deleted. Exception being the Default board, which can be eddited, but not deleted.
Content is saved to user's local storage. Storage content can be erased by pressing the 'clear local storage' button.

This app was built using Webpack as part of the Odin Project.
Dates are formatted using date-fns library: https://date-fns.org/v2.28.0/docs/format

Currently implemented:
Board creation done. Currently only 'All boards' page displaying.
Changing board view not possible due to event listener error that needs fixing.

Event listener issue (in index.js under "//E.L. for nav board buttons: displaying the different boards")

![Preview of eventlistener issue](/src/assets/eventlistenerIssue.png)

The code is organized in the following way:
index.js: displays the elements in the html file. Most elements are imported from other files (navbar, footer, modals, etc).
HTML elements are created in separate files than js management functions. Example: while boards-add-board-modal.js contains the HTML content of the modal, boards.js manages the injection function, and the index.js manages the event listeners.
app.js: sets the arrays where todos and boards are saved to. Also used to manage local storage.

Odin Project Requirements: https://www.theodinproject.com/lessons/node-path-javascript-todo-list
