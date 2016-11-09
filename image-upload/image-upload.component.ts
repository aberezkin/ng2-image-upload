import { Component } from '@angular/core';

@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.css']
})
export class ImageUploadComponent{
  file_srcs: string[] = [];

  private isFileOver:boolean = false;

  fileChange(input){

    for (var i = 0; i < input.files.length; i++) {
      // Create an img element and add the image file data to it
      var img = document.createElement("img");
      img.src = window.URL.createObjectURL(input.files[i]);

      var reader = new FileReader();

      reader.addEventListener("load", (event: any) => {
        img.src = event.target.result;


        var resized_img = this.resize(img);


        this.file_srcs.push(resized_img);
      }, false);

      reader.readAsDataURL(input.files[i]);
    }
  }


  resize (img, MAX_WIDTH:number = 86, MAX_HEIGHT:number = 86) {
    var canvas = document.createElement("canvas");

    console.log("Size Before: " + img.src.length + " bytes");

    var width = img.width;
    var height = img.height;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0, width, height);

    var dataUrl = canvas.toDataURL('image/jpeg');
    // IMPORTANT: 'jpeg' NOT 'jpg'
    console.log("Size After:  " + dataUrl.length  + " bytes");
    return dataUrl
  }

  fileOver(isOver) {
    this.isFileOver = isOver;
  }
}
