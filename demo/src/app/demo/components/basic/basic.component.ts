import { Component } from '@angular/core';
import { Header } from '../../../../lib/image.service';

@Component({
  selector: 'basic',
  templateUrl: './basic.component.html'
})
export class BasicExampleComponent {
  myHeaders: Header[] = [
    { header: 'ThisLibrary', value: 'COOL' },
    { header: 'FriesWithThat', value: 'YES' }
  ];
}
