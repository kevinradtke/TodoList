function addTodo() {
    let data = document.getElementById('todo')
    let list = document.getElementById('todolist')
    let cb = document.createElement('input')
    cb.setAttribute("type","checkbox")
    cb.setAttribute("class", "cb")
    let newTodo = document.createElement('li')
    newTodo.setAttribute("style", "list-style-type:none")
    newTodo.textContent = " " + data.value
    newTodo.insertBefore(cb, newTodo.firstChild)
    list.appendChild(newTodo)
}

function clearAll() {
    var checkboxes = document.getElementById("todolist").getElementsByClassName('cb')
    for (let cb of checkboxes) {
        cb.checked = false
    }
}

function markAll() {
    var checkboxes = document.getElementById("todolist").getElementsByClassName('cb')
    for (let cb of checkboxes) {
        cb.checked = true
    }
}

function deleteAll() {
    let list = document.getElementById('todolist')
    list.innerHTML = ""
}
