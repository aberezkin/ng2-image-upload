import { Component } from '@angular/core';

class FileHolder {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.css'],
})
export class ImageUploadComponent{
  private files: FileHolder[] = [];

  private isFileOver:boolean = false;

  private buttonMessage: string = "Select Files";
  private dragBoxMessage: string = "Drop your files here!";
  private dropMessage: string = "Release mouse to upload";

  fileChange(files) {
    for (var i = 0; i < files.length; i++) {
      var img = document.createElement('img');
      img.src = window.URL.createObjectURL(files[i]);

      var reader = new FileReader();

      reader.addEventListener(
        'load',
        (event: any) => this.files.push(new FileHolder(event.target.result, files[i])),
        false);

      reader.readAsDataURL(files[i]);
    }
  }

  deleteFile(file: FileHolder): void {
    let index = this.files.indexOf(file);
    this.files.splice(index, 1);
  }

  fileOver(isOver) {
    this.isFileOver = isOver;
  }
}
