import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('todo-app')
export class TodoApp extends LitElement {
  static override styles = css`
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

  @state()
  private todos: string[] = [];

  @state()
  private newTodo: string = '';

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.newTodo = target.value;
  }

  private handleKeyUp(e: KeyboardEvent): void {
    if (e.key === 'Enter' && this.newTodo.trim()) {
      this.todos = [...this.todos, this.newTodo.trim()];
      this.newTodo = '';
    }
  }

  private removeTodo(index: number): void {
    this.todos = this.todos.filter((_, i) => i !== index);
  }

  override render() {
    return html`
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
          ${this.todos.map(
            (todo, index) => html`
              <li>
                ${todo}
                <button @click=${() => this.removeTodo(index)}>삭제</button>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-app': TodoApp;
  }
}
