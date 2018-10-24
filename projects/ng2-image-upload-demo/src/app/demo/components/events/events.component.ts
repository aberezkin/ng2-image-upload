import { Component } from '@angular/core';
import { FileHolder } from 'ng2-image-upload';

@Component({
  selector: 'events',
  templateUrl: './events.component.html'
})
export class EventsComponent {
  onUploadFinished(file: FileHolder) {
    console.log(file);
  }

  onRemoved(file: FileHolder) {
    console.log(file);
  }

  onUploadStateChanged(state: boolean) {
    console.log(state);
  }
}
