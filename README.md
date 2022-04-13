# todo-list

To-do list app

Important: This is a work in progress

How the Todo Boards should work:
The user can create boards (that can represent different projects), and add todo cards to them.
The todo cards can contain a title, description, priority level, dates, among others.
The user shall be able to see the todos of all boards under 'All boards'.
The user shall be able to see todos belonging to a particular board by clicking on that board's name.
The user shall be able to see todos due 'today' or 'this week'.

Currently implemented:
Board creation done. Currently only 'All boards' page displaying.
Changing board view not possible due to event listener error that needs fixing.

Event listener issue (in index.js under "//E.L. for nav board buttons: displaying the different boards")

![Preview of eventlistener issue](/src/assets/eventlistenerIssue.png)

The code is organized in the following way:
index.js: displays the elements in the html file. Most elements are imported from other files (navbar, footer, modals, etc).
index.css styles general content only. Each module contains their own css files.
HTML elements are created in separate files than js management functions. Example: while boards-add-board-modal.js contains the HTML content of the modal, boards.js manages the injection function, and the index.js manages the event listeners.
