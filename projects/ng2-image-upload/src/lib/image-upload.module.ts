import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FileDropDirective } from './file-drop.directive';
import { ImageUploadService } from './image-upload.service';
import { ImageUploadComponent } from './image-upload/image-upload.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ImageUploadComponent,
    FileDropDirective
  ],
  exports: [ImageUploadComponent]
})
export class ImageUploadModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ImageUploadModule,
      providers: [ImageUploadService]
    };
  }
}
