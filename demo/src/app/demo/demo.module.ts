import { NgModule } from '@angular/core';
import { ImageUploadModule } from '../../lib/image-upload.module';

import { BasicExampleComponent } from './components/basic/basic.component';
import { CustomiseComponent } from './components/customise/customise.component';
import { DemoComponent } from './components/demo.component';
import { EventsComponent } from './components/events/events.component';
import { FilterExampleComponent } from './components/filter/filter.component';
import { StyleComponent } from './components/style/style.component';
import {UploadedExampleComponent} from "./components/uploaded/uploaded.component";

@NgModule({
  declarations: [
    DemoComponent,
    BasicExampleComponent,
    FilterExampleComponent,
    CustomiseComponent,
    EventsComponent,
    StyleComponent,
    UploadedExampleComponent
  ],
  imports: [
    ImageUploadModule
  ]
})
export class DemoModule {
}
