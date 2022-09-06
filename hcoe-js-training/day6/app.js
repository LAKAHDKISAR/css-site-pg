let inputArea = document.querySelector('.inputArea');
let toDoItems = document.querySelector('.todoItems');
let addButton = document.querySelector('.addButton');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('I am clicked')
    let listItem = document.createElement('li')
    toDoItems.appendChild(listItem)
    let content = document.createElement('div');
    listItem.appendChild(content)

    content.classList.add('content')

    content.innerText = inputArea.value;
    inputArea.value = ""

})
