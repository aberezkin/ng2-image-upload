import {NgModule} from "@angular/core";
import {ImageUploadComponent} from "./image-upload/image-upload.component";
import {FileDropDirective} from "./file-drop.directive";
import {CommonModule} from "@angular/common";
import {ImageService} from "./image.service";


@NgModule({
  imports: [ CommonModule ],
  declarations: [
    ImageUploadComponent,
    FileDropDirective
  ],
  providers: [ ImageService ],
  exports: [ ImageUploadComponent ]
})
export class ImageUploadModule { }
