import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, InjectionToken } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FileDropDirective } from './file-drop.directive';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageService } from './image-upload/image.service';
import { FirebaseService } from './image-upload/firebase.service';

export interface FirebaseAppConfig {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  projectId?: string;
}


@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [ImageUploadComponent, FileDropDirective],
  exports: [ImageUploadComponent]
})


export class ImageUploadModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ImageUploadModule,
      providers: [
        ImageService,
        FirebaseService
      ]
    }
  }

  static IntializeWithFirebase(config : FirebaseAppConfig ) {
    return {
      ngModule: ImageUploadModule,
      providers: [
        ImageService,
        FirebaseService,
        { provide: FirebaseAppConfigToken, useValue: config }
      ]
    }
  }
}

export const FirebaseAppConfigToken = new InjectionToken<FirebaseAppConfig>('FirebaseAppConfigToken');
