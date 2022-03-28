import "../src/boards.css";
export let BoardAddBoardModal = (function () {
    let addBoardModal = document.createElement('div')
    addBoardModal.classList.add('board-add-board-modal')
    addBoardModal.innerHTML = `
    <div>
        <div>
            <h3>Add board</h3>
            <ion-icon name="close-outline"></ion-icon>
        </div>

        <form action="">
            <label for="boardName">Board name:</label>
            <input id="boardName" type="text">
        </form>
        <button class="btn" type="button">Save board</button>
    </div>
`
    return {
        addBoardModal
    }
})()
