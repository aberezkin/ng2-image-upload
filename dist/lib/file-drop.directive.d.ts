import { EventEmitter } from '@angular/core';
export declare class FileDropDirective {
    accept: string[];
    fileOver: EventEmitter<boolean>;
    fileDrop: EventEmitter<FileList>;
    private static getDataTransfer;
    private static hasFiles;
    private static matchRule;
    onDrop(event: any): void;
    onDragLeave(event: any): void;
    onDragOver(event: any): void;
    private filterFiles;
}
