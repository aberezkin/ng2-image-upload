import {Directive, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[fileDrop]'
})
export class FileDropDirective {
  @Output()
  private isFileOver: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('dragover', ['$event'])
  public onDragOver(event: any) {
    let dataTransfer = this.getDataTransfer(event);

    if (!this.hasFiles(dataTransfer.types)) {
      return;
    }

    dataTransfer.dropEffect = 'copy';
    event.preventDefault();
    this.isFileOver.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.isFileOver.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    let dataTransfer = this.getDataTransfer(event);

    if (!this.hasFiles(dataTransfer.types)) {
      return;
    }


    this.isFileOver.emit(false);
    event.preventDefault();
  }


  private getDataTransfer(event: any): DataTransfer {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private hasFiles(types: any):boolean {
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


}
