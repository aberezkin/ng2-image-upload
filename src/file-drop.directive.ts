import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[fileDrop]'
})
export class FileDropDirective {
  @Input() accept: string[];
  @Output() fileOver: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() fileDrop: EventEmitter<FileList> = new EventEmitter<FileList>();

  @HostListener('drop', ['$event'])
  onDrop(event: any) {
    let dataTransfer = FileDropDirective.getDataTransfer(event);

    if (!FileDropDirective.hasFiles(dataTransfer.types)) {
      return;
    }

    event.preventDefault();

    let files = this.filterFiles(dataTransfer.files);

    event.preventDefault();
    this.fileOver.emit(false);
    this.fileDrop.emit(files);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event) {
    this.fileOver.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: any) {
    let dataTransfer = FileDropDirective.getDataTransfer(event);

    if (!FileDropDirective.hasFiles(dataTransfer.types)) {
      return;
    }

    dataTransfer.dropEffect = 'copy';
    event.preventDefault();
    this.fileOver.emit(true);
  }

  private filterFiles(files: FileList): any {
    if (!this.accept || this.accept.length === 0) {
      return files;
    }

    let acceptedFiles: File[] = [];
    for (let i = 0; i < files.length; i++) {
      for (let j = 0; j < this.accept.length; j++) {
        if (FileDropDirective.matchRule(this.accept[j], files[i].type)) {
          acceptedFiles.push(files[i]);
          break;
        }
      }
    }

    return acceptedFiles;
  }

  private static getDataTransfer(event: any): DataTransfer {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private static hasFiles(types: any): boolean {
    if (!types) {
      return false;
    }

    if (types.indexOf) {
      return types.indexOf('Files') !== -1;
    }

    if (types.contains) {
      return types.contains('Files');
    }

    return false;
  }

  private static matchRule(rule: string, candidate: string) {
    return new RegExp("^" + rule.split("*").join(".*") + "$").test(candidate);
  }
}
