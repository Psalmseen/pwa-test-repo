import { LitElement, html, CSSResultGroup } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { todoAppStyles } from './app.styles';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import gallery from './gallery.svg';
import camera from './camera.svg';

@customElement('todo-app')
export class TodoApp extends LitElement {
  static styles: CSSResultGroup = todoAppStyles;
  @state() isModalOpen = false;
  @state() tasks: {
    id: number;
    task: string;
    dateOfComplete: string;
    desc: string;
    imageUrl: string | ArrayBuffer;
  }[] = [
    {
      id: 1,
      task: 'Add the date to the todo list',
      dateOfComplete: '20-10-2022',
      desc: 'This gives more details about the task to be done',
      imageUrl: '',
    },
    {
      id: 2,
      task: 'Add the date to the todo list',
      dateOfComplete: '20-10-2022',
      desc: 'This gives more details about the task to be done',
      imageUrl: '',
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
  @state() imageUrl: string | ArrayBuffer = '';
  @state() isAddImageModalShown = false;
  @state() isCaptureModalShown = false;
  @query('#task') task!: HTMLInputElement;
  @query('#date') date!: HTMLInputElement;
  @query('#task-desc') taskDesc!: HTMLTextAreaElement;
  @query('#video') video!: HTMLVideoElement;
  toggleAddImageModalShown() {
    this.isAddImageModalShown = !this.isAddImageModalShown;
  }
  toggleIsCaptureModalShown() {
    this.isCaptureModalShown = !this.isCaptureModalShown;
  }
  toggleMobileOpen() {
    this.isModalOpen = !this.isModalOpen;
    this.task.value = '';
    this.date.value = '';
    this.taskDesc.value = '';
    this.imageUrl = '';
  }
  handleSunmit(e: Event) {
    e.preventDefault();
    const newTask = {
      task: this.task.value,
      dateOfComplete: this.date.value,
      desc: this.taskDesc.value,
      imageUrl: this.imageUrl,
      id: this.tasks.length + 1,
    };
    this.tasks.push(newTask);
    this.toggleMobileOpen();
  }
  async handleUploadImagefromCamera() {
    this.toggleIsCaptureModalShown();

    const constrains = {
      audio: false,
      video: {
        height: 1600,
        width: 1600,
      },
    };
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constrains);
      this.video.srcObject = stream;
    } catch (error) {
      console.error('error:', error);
    }
    this.toggleAddImageModalShown();
  }
  snap() {
    console.log('Snap clicked');
    const canvas = this.shadowRoot?.querySelector(
      '#canvas'
    ) as HTMLCanvasElement;
    var context = canvas.getContext('2d');
    context?.drawImage(this.video, 0, 0, 1600, 1600);
    this.imageUrl = canvas.toDataURL();
    this.toggleIsCaptureModalShown();
  }
  handleUploadImagefromGallery() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/png, image/gif, image/jpeg';

    input.addEventListener('change', async ({ target: { files } }: any) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.imageUrl = reader.result || '';
      });
      reader.readAsDataURL(files[0]);
    });

    input.click();
    this.toggleAddImageModalShown();
  }

  protected render(): unknown {
    return html`<div class="todo-app">
      <h1 class="header">The todo app</h1>
      <div class=${classMap({ 'tasks-container': true })}>
        ${this.tasks.map(
          ({ id, task, dateOfComplete, desc, imageUrl }) => html` <div
            class=${classMap({ 'task-wrapper': true })}
            style=${styleMap({
              backgroundColor: this.colors[(id - 1) % 6],
            })}
            key=${id}
          >
            <h2>${task}</h2>
            <p>${desc}</p>
            <p>${dateOfComplete}</p>
            ${imageUrl && html`<img class="task-img" src=${imageUrl} />`}
          </div>`
        )}
      </div>
      <!--  Form modal -->
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
          <p class="add-img" @click=${this.toggleAddImageModalShown}>
            Add an image
          </p>
          <button type="submit">Add this task</button>
        </form>
      </div>
      <!-- Form  ends -->
      <!-- Image modal -->
      <div
        class=${classMap({
          select__img__modal: true,
          'd-none': !this.isAddImageModalShown,
        })}
      >
        <div @click=${this.handleUploadImagefromCamera}>
          <img src=${camera} />
          <p>Add image from camera</p>
        </div>
        <div @click=${this.handleUploadImagefromGallery}>
          <img src=${gallery} />
          <p>Add image from device</p>
        </div>
      </div>
      <!-- Image modal ends -->
      <!-- Video modal -->
      <div
        class=${classMap({
          'capture-modal': true,
          'd-none': !this.isCaptureModalShown,
        })}
      >
        <video id="video" playsinline autoplay></video>
        <canvas
          id="canvas"
          height="1600px"
          width="1600px"
          class="d-none"
        ></canvas>
        <div id="snap" @click=${this.snap}>Capture</div>
      </div>
      <!-- Video modal ends -->
      <div
        @click="${this.toggleMobileOpen}"
        class=${classMap({ add: true, close: this.isModalOpen })}
      >
        +
      </div>
    </div>`;
  }
}
