let inputArea = document.querySelector('.inputArea');
let toDoItems = document.querySelector('.todoItems');
let addButton = document.querySelector('.addButton');

let errorDiv = document.querySelector('.error')
if (inputArea.value == '') {
    addButton.addEventListener('click', () => {
        errorDiv.classList.add('show')
    })
}

addButton.addEventListener('click', (e) => {
    e.preventDefault();

    let listItem = document.createElement('li')
    toDoItems.prepend(listItem)
    let content = document.createElement('div');
    listItem.appendChild(content)

    content.classList.add('content')

    content.innerText = inputArea.value;
    inputArea.value = ""

    let actionWrapper = document.createElement('div');
    actionWrapper.classList.add('action')

    let completedButton = document.createElement('button');
    completedButton.innerText = "Completed";
    completedButton.classList.add('btnComplete')


    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete'
    deleteButton.classList.add('btnDelete')

    actionWrapper.appendChild(completedButton);
    actionWrapper.appendChild(deleteButton);


    listItem.appendChild(actionWrapper)

    deleteButton.addEventListener('click', function () {
        this.parentElement.parentElement.classList.toggle('remove');
        this.parentElement.parentElement.ontransitionend = function () {
            this.remove();
        }
    })

    completedButton.addEventListener('click', function () {
        // this.parentElement.parentElement.classList('removed');
    })


})



