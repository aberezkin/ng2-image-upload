import { Component } from '@angular/core';

@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.css'],
})
export class ImageUploadComponent{
  file_sources: string[] = [];


  private isFileOver:boolean = false;

  private buttonMessage: string = "Select Files";
  private dragBoxMessage: string = "Drop your files here!";
  private dropMessage: string = "Release mouse to upload";

  fileChange(files) {

    for (var i = 0; i < files.length; i++) {
      var img = document.createElement('img');
      img.src = window.URL.createObjectURL(files[i]);

      var reader = new FileReader();

      reader.addEventListener('load', (event: any) => {
        this.file_sources.push(event.target.result);
      }, false);

      reader.readAsDataURL(files[i]);
    }

  }

  fileOver(isOver) {
    this.isFileOver = isOver;
  }
}
