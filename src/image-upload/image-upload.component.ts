import { Component } from '@angular/core';

@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.css'],
})
export class ImageUploadComponent{
  file_sources: string[] = [];

  private isFileOver:boolean = false;

  private buttonMessage: string = "Upload files!";
  private dragBoxMessage: string = "Drag your files here!";

  fileChange(files) {

    for (var i = 0; i < files.length; i++) {

      var img = document.createElement('img');
      img.src = window.URL.createObjectURL(files[i]);

      var reader = new FileReader();

      reader.addEventListener('load', (event: any) => {
        img.src = event.target.result;


        var resized_img = this.resize(img);


        this.file_sources.push(resized_img);
      }, false);

      reader.readAsDataURL(files[i]);
    }

  }


  resize (img, MAX_WIDTH:number = 86, MAX_HEIGHT:number = 86) {
    var canvas = document.createElement('canvas');

    var width = img.width;
    var height = img.height;

    if (width > height && width > MAX_WIDTH) {
      height *= MAX_WIDTH / width;
      width = MAX_WIDTH;
    } else if (height > MAX_HEIGHT) {
      width *= MAX_HEIGHT / height;
      height = MAX_HEIGHT;
    }

    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0, width, height);

    return canvas.toDataURL('image/jpeg')
  }

  fileOver(isOver) {
    this.isFileOver = isOver;
  }
}
