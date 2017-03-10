import { EventEmitter } from '@angular/core';
export declare class FileDropDirective {
    accept: string[];
    isFileOver: EventEmitter<boolean>;
    fileDrop: EventEmitter<FileList>;
    onDragOver(event: any): void;
    onDragLeave(): void;
    onDrop(event: any): void;
    private filterFiles(files);
    private static matchRule(rule, candidate);
    private static getDataTransfer(event);
    private static hasFiles(types);
}
