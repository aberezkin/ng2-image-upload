import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';
import { ImageUploadModule } from '../lib/image-upload.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/components/demo.component';
import { DemoModule } from './demo/demo.module';
import { ReadmeComponent } from './readme/components/readme.component';
import { ReadmeModule } from './readme/readme.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DemoModule,
    ReadmeModule,
    ImageUploadModule.forRoot(),
    MarkdownModule.forRoot(),
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'demo',
      pathMatch: 'prefix'
    }, {
      path: 'demo',
      component: DemoComponent
    }, {
      path: 'readme',
      component: ReadmeComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
