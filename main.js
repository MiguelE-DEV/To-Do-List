//add items to list
document.querySelector('#add').addEventListener('click',toDo)
function toDo(){
    let input = document.querySelector('#toDo').value
    let item = document.createElement('li')
    let inText = document.createTextNode(input)
    item.appendChild(inText)
    document.getElementById('list').appendChild(item)
    document.querySelector('#toDo').value = ' '
}
//Finished a task and strike it through
document.querySelector('#list').addEventListener('click', strike)
function strike(){
    document.querySelector("li").classList.add('strikeToggle')
}

//Clear list
document.querySelector('#clear').addEventListener('click', clearList)
function clearList(){
    document.querySelectorAll('li').forEach(li => {li.remove()})
}
