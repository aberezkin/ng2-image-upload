import {Directive, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[fileDrop]'
})
export class FileDropDirective {
  @Output()
  private isFileOver: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('dragover', ['$event'])
  public onDragOver(event: any) {
    event.preventDefault();

    this.isFileOver.emit(true);
    console.log('There is a drag over this element');
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {


    this.isFileOver.emit(false);
    console.log('Drag leaved this element')
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    console.log('There is a drop over this element');

    this.isFileOver.emit(false);
    event.preventDefault();
  }



}
