import { Component } from '@angular/core';
import { Headers } from '../../lib/image.service';

@Component({
  selector: 'basic',
  templateUrl: './basic.component.html'
})
export class BasicExampleComponent {
  myHeader: Headers = new Headers({ 'Authorization': 'MyToken' });
}
