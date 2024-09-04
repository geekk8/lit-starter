import { LitElement } from 'lit';
export declare class TodoApp extends LitElement {
    static styles: import("lit").CSSResult;
    private todos;
    private newTodo;
    private handleInput;
    private handleKeyUp;
    private removeTodo;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'todo-app': TodoApp;
    }
}
//# sourceMappingURL=todo-class.d.ts.map