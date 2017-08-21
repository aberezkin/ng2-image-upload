import { NgModule } from '@angular/core';
import { MarkdownModule } from 'angular2-markdown';
import { ReadmeComponent } from './components/readme.component';

@NgModule({
  declarations: [
    ReadmeComponent
  ],
  imports: [
    MarkdownModule
  ]
})
export class ReadmeModule {
}
