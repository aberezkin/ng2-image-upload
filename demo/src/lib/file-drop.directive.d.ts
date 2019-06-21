import { EventEmitter } from '@angular/core';
export declare class FileDropDirective {
    accept: string[];
    fileOver: EventEmitter<boolean>;
    fileDrop: EventEmitter<FileList>;
    onDrop(event: any): void;
    onDragLeave(event: any): void;
    onDragOver(event: any): void;
    private filterFiles(files);
    private static getDataTransfer(event);
    private static hasFiles(types);
    private static matchRule(rule, candidate);
}
