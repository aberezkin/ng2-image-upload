import { NgModule } from '@angular/core';
import { ImageUploadModule } from 'ng2-image-upload';

import { BasicExampleComponent } from './components/basic/basic.component';
import { CustomiseComponent } from './components/customise/customise.component';
import { DemoComponent } from './components/demo.component';
import { DisabledExampleComponent } from './components/disabled/disabled.component';
import { EventsComponent } from './components/events/events.component';
import { FilterExampleComponent } from './components/filter/filter.component';
import { StyleComponent } from './components/style/style.component';
import { UploadedExampleComponent } from './components/uploaded/uploaded.component';

@NgModule({
  declarations: [
    DemoComponent,
    BasicExampleComponent,
    FilterExampleComponent,
    CustomiseComponent,
    EventsComponent,
    StyleComponent,
    UploadedExampleComponent,
    DisabledExampleComponent
  ],
  imports: [
    ImageUploadModule
  ]
})
export class DemoModule {
}
