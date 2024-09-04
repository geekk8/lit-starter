var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
let TodoApp = class TodoApp extends LitElement {
    constructor() {
        super(...arguments);
        this.todos = [];
        this.newTodo = '';
    }
    handleInput(e) {
        const target = e.target;
        this.newTodo = target.value;
    }
    handleKeyUp(e) {
        if (e.key === 'Enter' && this.newTodo.trim()) {
            this.todos = [...this.todos, this.newTodo.trim()];
            this.newTodo = '';
        }
    }
    removeTodo(index) {
        this.todos = this.todos.filter((_, i) => i !== index);
    }
    render() {
        return html `
      <div>
        <h1>Todo</h1>
        <input
          type="text"
          .value=${this.newTodo}
          @input=${this.handleInput}
          @keyup=${this.handleKeyUp}
          placeholder="new todo"
        >
        <ul>
          ${this.todos.map((todo, index) => html `
              <li>
                ${todo}
                <button @click=${() => this.removeTodo(index)}>삭제</button>
              </li>
            `)}
        </ul>
      </div>
    `;
    }
};
TodoApp.styles = css `
    :host {
      display: block;
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    input {
      width: calc(100% - 20px);
      padding: 8px;
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      width: 100%;
      padding: 0;
      min-height: 30px;
      border: 1px solid gray;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid #ddd;
    }

    button {
      background-color: blue;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }
  `;
__decorate([
    state()
], TodoApp.prototype, "todos", void 0);
__decorate([
    state()
], TodoApp.prototype, "newTodo", void 0);
TodoApp = __decorate([
    customElement('todo-app')
], TodoApp);
export { TodoApp };
//# sourceMappingURL=todo-class.js.map