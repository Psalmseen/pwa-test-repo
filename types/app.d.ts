import { LitElement, CSSResultGroup } from 'lit';
export declare class TodoApp extends LitElement {
    static styles: CSSResultGroup;
    isModalOpen: boolean;
    tasks: {
        id: number;
        task: string;
        dateOfComplete: string;
        desc: string;
    }[];
    colors: string[];
    task: HTMLInputElement;
    date: HTMLInputElement;
    taskDesc: HTMLTextAreaElement;
    toggleMobileOpen(): void;
    handleSunmit(e: Event): void;
    protected render(): unknown;
}
