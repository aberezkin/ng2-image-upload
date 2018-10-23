import { NgModule } from '@angular/core';
import { FileDropDirective } from './file-drop.directive';
import { ImageUploadService } from './image-upload.service';
import { ImageUploadComponent } from './image-upload/image-upload.component';

@NgModule({
  imports: [],
  declarations: [
    ImageUploadComponent,
    FileDropDirective
  ],
  exports: [ImageUploadComponent],
  providers: [ImageUploadService]
})
export class Ng2ImageUploadModule {
}
