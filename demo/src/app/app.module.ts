import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageUploadModule } from '../lib/image-upload.module';

import { AppComponent } from './app.component';
import { BasicExampleComponent } from './basic/basic.component';
import { FilterExampleComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicExampleComponent,
    FilterExampleComponent
  ],
  imports: [
    BrowserModule,
    ImageUploadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
