import { html, render } from 'lit';
let todos = [];
let newTodo = '';
const renderApp = () => {
    render(TodoApp(), document.body);
};
const updateTodos = (newTodos) => {
    todos = newTodos;
    renderApp();
};
const handleInput = (e) => {
    const target = e.target;
    newTodo = target.value;
    renderApp();
};
const handleKeyUp = (e) => {
    if (e.key === 'Enter' && newTodo.trim()) {
        updateTodos([...todos, newTodo.trim()]);
        newTodo = '';
    }
    renderApp();
};
const removeTodo = (index) => {
    updateTodos(todos.filter((_, i) => i !== index));
    renderApp();
};
const TodoApp = () => html `
  <div style="max-width: 500px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
    <h1>Todo 리스트</h1>
    <input
      type="text"
      .value=${newTodo}
      @input=${handleInput}
      @keyup=${handleKeyUp}
      placeholder="new todo"
      style="width: 100%; padding: 8px; margin-bottom: 10px;"
    >
    <ul style="list-style-type: none; padding: 0; min-height:30px; border:1px solid gray; ">
      ${todos.map((todo, index) => html `
        <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #ddd;">
          ${todo}
          <button @click=${() => removeTodo(index)} style="background-color: #f44336; color: white; border: none; padding: 5px 10px; cursor: pointer;">
            삭제
          </button>
        </li>
      `)}
    </ul>
  </div>
`;
render(TodoApp(), document.body);
//# sourceMappingURL=todo-app.js.map