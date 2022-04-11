

import { crearTodoHtml, saludar } from './js/componentes';
import './styles.css';
import { Todo, TodoList} from './classes';


export const todoList = new TodoList();

//console.log(todoList.todos);

todoList.todos.forEach ( todo  => crearTodoHtml( todo ) );



// const newTodo2 = new Todo('Aprender Javascript');

// todoList.nuevoTodo(newTodo2);


console.log('todos', todoList.todos);
// e sl omismo que  todoList.todos.forEach ( crearTodoHtml );

// const tarea  = new Todo('Aprender Javascript !!');
// const tarea2 = new Todo('Comprar un Unicornio');

// console.log(tarea);

//todoList.nuevoTodo(tarea);
//todoList.nuevoTodo(tarea2);

//tarea.completado = true;

// console.log(todoList);


//crearTodoHtml(tarea);

//localStorage.setItem('mi-key', 'Abc123');
//sessionStorage.setItem('mi-key2', 'abc123');

// setTimeout( ( ) =>{
//     localStorage.removeItem('mi-key');

// }, 1500);