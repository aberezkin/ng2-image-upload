import { Component } from '@angular/core';

@Component({
  selector: 'uploaded',
  templateUrl: './uploaded.component.html'
})
export class UploadedExampleComponent {
  myHeaders: { [name: string]: any } = {
    'Authorization': 'MyToken',
    'Another Header': 'AnotherValue'
  };

  images = [];

  onRemoved(event){
    console.log(event);
  }

  ngOnInit(){
    setTimeout(()=>{
      this.images = [
        'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2016/10/11/14/beats-logo-1200-80.jpg',
        'https://s-media-cache-ak0.pinimg.com/originals/68/fb/c7/68fbc7bc9eb8c530c6e804c4109ec647.jpg',
        {fileName: 'google-image.jpg', url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
      ];
    }, 1000);
  }
}
