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
    stream: MediaStream;
    imageUrl: string | ArrayBuffer;
    isAddImageModalShown: boolean;
    isCaptureModalShown: boolean;
    cropper: any;
    isCropperOpen: boolean;
    task: HTMLInputElement;
    date: HTMLInputElement;
    taskDesc: HTMLTextAreaElement;
    video: HTMLVideoElement;
    cropperImg: HTMLImageElement;
    useCropper(): void;
    toggleAddImageModalShown(): void;
    toggleIsCaptureModalShown(): void;
    toggleMobileOpen(): void;
    toggleisCropperOpen(): void;
    handleSunmit(e: Event): void;
    handleUploadImagefromCamera(): Promise<void>;
    snap(): Promise<void>;
    handleUploadImagefromGallery(): void;
    handleCrop(): void;
    protected render(): unknown;
}
