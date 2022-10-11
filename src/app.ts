import { LitElement, html, CSSResultGroup } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { todoAppStyles } from './app.styles';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('todo-app')
export class TodoApp extends LitElement {
  static styles: CSSResultGroup = todoAppStyles;
  @state() isModalOpen = false;
  @state() tasks = [
    {
      id: 1,
      task: 'Add the date to the todo list',
      dateOfComplete: '20-10-2022',
      desc: 'This gives more details about the task to be done',
    },
    {
      id: 2,
      task: 'Add the date to the todo list',
      dateOfComplete: '20-10-2022',
      desc: 'This gives more details about the task to be done',
    },
  ];

  @state() colors = [
    '#D5453C',
    '#FD9728',
    '#3D56B0',
    '#663FB4',
    '#9F336D',
    '#EB3B8C',
  ];
  @query('#task') task!: HTMLInputElement;
  @query('#date') date!: HTMLInputElement;
  @query('#task-desc') taskDesc!: HTMLTextAreaElement;
  toggleMobileOpen() {
    this.isModalOpen = !this.isModalOpen;
  }
  handleSunmit(e: Event) {
    e.preventDefault();
    const newTask = {
      task: this.task.value,
      dateOfComplete: this.date.value,
      desc: this.taskDesc.value,
      id: this.tasks.length + 1,
    };
    this.tasks.push(newTask);
    this.toggleMobileOpen();
  }

  protected render(): unknown {
    return html`<div class="todo-app">
      <h1 class="header">The todo app</h1>
      <div class=${classMap({ 'tasks-container': true })}>
        ${this.tasks.map(
          ({ id, task, dateOfComplete, desc }) => html` <div
            class=${classMap({ 'task-wrapper': true })}
            style=${styleMap({
              backgroundColor: this.colors[(id - 1) % 6],
            })}
            key=${id}
          >
            <h2>${task}</h2>
            <p>${desc}</p>
            <p>${dateOfComplete}</p>
          </div>`
        )}
      </div>
      <div class=${classMap({ modal: true, 'open-modal': this.isModalOpen })}>
        <form
          class=${classMap({ 'input-form': true, 'd-flex': this.isModalOpen })}
          @submit=${this.handleSunmit}
        >
          <div>
            <label for="task">Add your task</label>
            <input id="task" type="text" />
          </div>
          <div>
            <label for="complete-date">Add an expected completion date</label>
            <input id="date" type="date" id="complete-date" />
          </div>
          <div class="task-desc">
            <label for="task-desc"> Add more details</label>
            <textarea id="task-desc"></textarea>
          </div>
          <button type="submit">Add this task</button>
        </form>
      </div>
      <div
        @click="${this.toggleMobileOpen}"
        class=${classMap({ add: true, close: this.isModalOpen })}
      >
        +
      </div>
    </div>`;
  }
}
