import {Directive, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[fileDrop]'
})
export class FileDropDirective {
  @Output()
  private fileOver: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('dragover', ['$event'])
  public onDragOver(event: any) {
    event.preventDefault();

    console.log('There is a drag over this element');

  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    console.log('Drag leaved this element')

  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    console.log('There is a drop over this element');

    event.preventDefault();
  }



}
