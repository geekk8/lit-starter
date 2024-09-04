import { html, render, TemplateResult } from 'lit';

type Todo = string;

let todos: Todo[] = [];
let newTodo: string = '';

const renderApp = (): void => {
  render(TodoApp(), document.body);
};

const updateTodos = (newTodos: Todo[]): void => {
  todos = newTodos;
  renderApp()
};

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  newTodo = target.value;
  renderApp()
};

const handleKeyUp = (e: KeyboardEvent): void => {
  if (e.key === 'Enter' && newTodo.trim()) {
    updateTodos([...todos, newTodo.trim()]);
    newTodo = '';
  }
  renderApp()
};

const removeTodo = (index: number): void => {
  updateTodos(todos.filter((_, i) => i !== index));
  renderApp()
};

const TodoApp = (): TemplateResult => html`
  <div style="max-width: 500px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
    <h1>Todo</h1>
    <input
      type="text"
      .value=${newTodo}
      @input=${handleInput}
      @keyup=${handleKeyUp}
      placeholder="new todo"
      style="width: 100%; padding: 8px; margin-bottom: 10px;"
    >
    <ul style="list-style-type: none; padding: 0; min-height:30px; border:1px solid gray; ">
      ${todos.map((todo, index) => html`
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
