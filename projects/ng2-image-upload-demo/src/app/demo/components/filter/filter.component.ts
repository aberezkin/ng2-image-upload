import { Component } from '@angular/core';
import { UploadMetadata } from 'ng2-image-upload';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html'
})
export class FilterExampleComponent {
  private fileCounter = 0;

  onBeforeUpload = (metadata: UploadMetadata) => {
    if (this.fileCounter % 2 === 0) {
      metadata.abort = true;
    } else {
      // mutate the file or replace it entirely - metadata.file
      metadata.url = 'http://somewhereelse.com';
    }

    this.fileCounter++;
    return metadata;
  };
}
