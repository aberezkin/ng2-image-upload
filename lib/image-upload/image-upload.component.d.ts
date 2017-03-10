import { EventEmitter } from '@angular/core';
import { ImageService, Header } from "../image.service";
export declare class FileHolder {
    src: string;
    file: File;
    serverResponse: any;
    pending: boolean;
    constructor(src: string, file: File);
}
export declare class ImageUploadComponent {
    private imageService;
    max: number;
    url: string;
    headers: Header[];
    preview: boolean;
    isPending: EventEmitter<boolean>;
    onFileUploadFinish: EventEmitter<FileHolder>;
    onRemove: EventEmitter<FileHolder>;
    private files;
    private fileCounter;
    private pendingFilesCounter;
    private isFileOver;
    buttonCaption: string;
    dropBoxMessage: string;
    constructor(imageService: ImageService);
    ngOnInit(): void;
    fileChange(files: any): void;
    private uploadFiles(files, filesToUploadNum);
    private uploadSingleFile(fileHolder);
    private deleteFile(file);
    fileOver(isOver: any): void;
    private countRemainingSlots();
}
