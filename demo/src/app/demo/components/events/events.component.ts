import { Component } from '@angular/core';
import { FileHolder } from '../../../../lib/image-upload/image-upload.component';

@Component({
  selector: 'events',
  templateUrl: './events.component.html'
})
export class EventsComponent {
  imageFinishedUploading(file: FileHolder) {
    console.log(JSON.stringify(file.serverResponse));
  }

  imageRemoved(file: FileHolder) {
    // do some stuff with the removed file.
  }

  uploadStateChange(state: boolean) {
    console.log(JSON.stringify(state));
  }
}
