//TODO LIST PROJECT.

// ? todos will be properties in an object(PROJECTS) stored in arrays.
// an object to create new projects.

const myProjects = [];
const myTodos = [];

function PROJECTS(title,dueDate,todos){
    this.title = title;
    this.dueDate = dueDate;
    this.todos = todos;
};

function TODOS(title,description,duedate,notes,done){
    this.title =title;
    this.description = description;
    this.dueDate = duedate;
    this.notes = notes;
    this.done = done;
};

// add user input to project function.

function addProject() {
    let title = document.getElementById('projectTitle').value;
    let dueDate = document.getElementById('dueDate').value;
    let newProject = new PROJECTS(title,dueDate,myTodos)
    myProjects.push(newProject);
    console.log(myProjects);
    renderProject();
}

// add user input 

function addTodo(){
    let title = document.getElementById('todoTitle').value;
    let description = document.getElementById('todoDescription').value;
    let dueDate = document.getElementById('todo-dueDate').value;
    let notes = document.getElementById('todo-notes').value;
    let newTodo = new TODOS(title,description,dueDate,notes);
    myTodos.push(newTodo);
    console.log(myTodos);
    renderTodo();
}
//DOM
// display user input.

function renderProject(){
    let projectItem = document.getElementById('prjItem');
    projectItem.innerHTML = "";
    for (let i = 0; i < myProjects.length; i++) {
        const project = myProjects[i];
        console.log(project);
        // div to show projects.
        let projectEl = document.createElement('div');
        projectEl.setAttribute("id","prj");
        projectEl.innerHTML = `
        <div class= "prj-heading${i}" class="prj-heading">
        <p>${project.title} </p>
        <p>${project.dueDate}</p>
        <button type= "button" id="todo-btn" class="todo-btn" onclick="showTodos(${i})">See Todos</button>
        <button type= "button" id="todo-btn" class="todo-btn" onclick="showTodoForm(${i})">Add Todo </button>
        <button type= "button" id="delete-btn" class="delete-btn" onclick="deleteProject(${i})">Delete</button>
        </div>`;
        projectItem.appendChild(projectEl);
        // local storage

        localStorage.setItem("myTodoLists",JSON.stringify(myProjects));
        const myData = JSON.parse(localStorage.getItem("myTodoLists"));
        console.log(myData);
        console.log(typeof myData); 
    }
};

//render todo

function renderTodo(){
    let todoItems = document.getElementById('todoItems');
    todoItems.innerHTML = "";
    for (let i = 0; i < myTodos.length; i++) {
        
        
        const mytodo = myTodos [i];
        console.log(mytodo);
        
        let todos = document.createElement('div');
        todos.setAttribute("id","prj-todos");
        todos.innerHTML = `
        <table id="table${i}" class="table">
        <thead>
        <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Due Date</th>
        <th>Notes</th>
        <th>Actions</th>
        </tr>
        </thead>
        <tbody id="tbody" class="tbody">
        <tr>
        <td>${mytodo.title}</td>
        <td>${mytodo.description}</td>
        <td>${mytodo.dueDate}</td>
        <td>${mytodo.notes}</td>
        <td>${mytodo.done}</td>
        <td><button type= "button" id="edit-todo-btn" class="edit-todo-btn" onclick="Edit(${i})">Edit</button>
        <button type= "button" id="delete-btn" class="delete-btn" onclick="deleteTodo(${i})">Delete</button></td>
        </<tr>
        </tbody>
        </table>
        `;
        todoItems.appendChild(todos);
        
        localStorage.setItem("myTodos",JSON.stringify(myTodos));
        const myData2 = JSON.parse(localStorage.getItem("myTodos"));
        console.log(myData2);
        console.log(typeof myData2);
    }
    
};

// button to display project's form.

const projectButton = document.getElementById('addProject-btn');
const projectForm = document.getElementById('project-form');
const modal = document.querySelector('[data-modal]')
projectButton.addEventListener('click',()=>{
    modal.showModal();
});
//subimt user input.
projectForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    modal.close();
    addProject();
});

//todos
let todoModal = document.getElementById('modal');
let todoForm = document.getElementById('todo-form');
function showTodoForm(){
    todoModal.showModal();
};

todoForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    todoModal.close();
    addTodo();
});

//remove item

function deleteProject(index){
    myProjects.splice(index,1);
    myTodos.splice(index,myTodos.length);
    renderTodo();
    renderProject();
}
function deleteTodo(index){
    myTodos.splice(index,1);
    renderTodo();
}

//edit todo.
let editModal = document.getElementById('modal-edit');
function Edit(){
    editModal.showModal();
};

let editForm = document.getElementById('edit-form');
editForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    editTodo();
    editModal.close();
});

function editTodo(index){
    myTodos[index];
    let title = document.getElementById('edit-todoTitle').value;
    let description = document.getElementById('edit-todoDescription').value;
    let dueDate = document.getElementById('edit-todo-dueDate').value;
    let notes = document.getElementById('edit-todo-notes').value;
    let newTodo = new TODOS(title,description,dueDate,notes);
    myTodos.push(newTodo);
    console.log(myTodos);
    renderTodo();
};




























