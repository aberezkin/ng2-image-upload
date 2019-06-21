import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Headers } from '@angular/http';
import { UploadMetadata } from './before-upload.interface';
import { ImageService } from './image.service';
import { Style } from './style';
export declare class FileHolder {
    src: string;
    file: File;
    pending: boolean;
    serverResponse: {
        status: number;
        response: any;
    };
    constructor(src: string, file: File);
}
export declare class ImageUploadComponent implements OnInit, OnChanges {
    private imageService;
    files: FileHolder[];
    fileCounter: number;
    fileOver: boolean;
    showFileTooLargeMessage: boolean;
    beforeUpload: (param: UploadMetadata) => UploadMetadata | Promise<UploadMetadata>;
    buttonCaption: string;
    disabled: boolean;
    cssClass: string;
    clearButtonCaption: string;
    dropBoxMessage: string;
    dropBoxClickable: boolean;
    fileTooLargeMessage: any;
    headers: Headers | {
        [name: string]: any;
    };
    max: number;
    maxFileSize: number;
    preview: boolean;
    partName: string;
    style: Style;
    supportedExtensions: string[];
    url: string;
    withCredentials: boolean;
    uploadedFiles: string[] | Array<{
        url: string;
        fileName: string;
        blob?: Blob;
    }>;
    removed: EventEmitter<FileHolder>;
    uploadStateChanged: EventEmitter<boolean>;
    uploadFinished: EventEmitter<FileHolder>;
    previewClicked: EventEmitter<FileHolder>;
    private inputElement;
    private pendingFilesCounter;
    constructor(imageService: ImageService);
    ngOnInit(): void;
    deleteAll(): void;
    deleteFile(file: FileHolder): void;
    previewFileClicked(file: FileHolder): void;
    ngOnChanges(changes: any): void;
    onFileChange(files: FileList): void;
    onFileOver: (isOver: any) => any;
    private countRemainingSlots;
    private onResponse(response, fileHolder);
    private processUploadedFiles();
    private uploadFiles(files, filesToUploadNum);
    private uploadSingleFile(fileHolder, url?, customForm?);
}
