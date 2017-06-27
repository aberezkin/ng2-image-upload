import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageUploadModule } from '../lib/image-upload.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
