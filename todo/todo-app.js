import { html, render } from 'lit';
let todos = [];
let newTodo = '';
const updateTodos = (newTodos) => {
    todos = newTodos;
};
const handleInput = (e) => {
    const target = e.target;
    newTodo = target.value;
};
const handleKeyUp = (e) => {
    if (e.key === 'Enter' && newTodo.trim()) {
        updateTodos([...todos, newTodo.trim()]);
        newTodo = '';
    }
};
const removeTodo = (index) => {
    updateTodos(todos.filter((_, i) => i !== index));
};
const TodoApp = () => html `
  <div style="max-width: 400px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
    <h1>Todo 리스트</h1>
    <input
      type="text"
      .value=${newTodo}
      @input=${handleInput}
      @keyup=${handleKeyUp}
      placeholder="새로운 할 일 추가!!"
      style="width: 100%; padding: 8px; margin-bottom: 10px;"
    >
    <ul style="list-style-type: none; padding: 0;">
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
class TodoAppElement extends HTMLElement {
    connectedCallback() {
        render(TodoApp(), this);
    }
}
customElements.define('todo-app', TodoAppElement);
//# sourceMappingURL=todo-app.js.map