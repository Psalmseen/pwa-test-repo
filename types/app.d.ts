import { LitElement, CSSResultGroup } from 'lit';
export declare class TodoApp extends LitElement {
    static styles: CSSResultGroup;
    isModalOpen: boolean;
    tasks: {
        id: number;
        task: string;
        dateOfComplete: string;
        desc: string;
        imageUrl: string | ArrayBuffer;
    }[];
    colors: string[];
    imageUrl: string | ArrayBuffer;
    isAddImageModalShown: boolean;
    isCaptureModalShown: boolean;
    task: HTMLInputElement;
    date: HTMLInputElement;
    taskDesc: HTMLTextAreaElement;
    video: HTMLVideoElement;
    toggleAddImageModalShown(): void;
    toggleIsCaptureModalShown(): void;
    toggleMobileOpen(): void;
    handleSunmit(e: Event): void;
    handleUploadImagefromCamera(): Promise<void>;
    snap(): void;
    handleUploadImagefromGallery(): void;
    protected render(): unknown;
}
