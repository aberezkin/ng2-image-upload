import { Component } from '@angular/core';
import { FileHolder } from '../../../../lib/image-upload/image-upload.component';

@Component({
  selector: 'events',
  templateUrl: './events.component.html'
})
export class EventsComponent {
  onUploadFinished(file: FileHolder) {
    console.log(JSON.stringify(file.serverResponse));
  }

  onRemoved(file: FileHolder) {
    // do some stuff with the removed file.
  }

  onUploadStateChanged(state: boolean) {
    console.log(JSON.stringify(state));
  }
}
