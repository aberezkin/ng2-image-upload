import { Component } from '@angular/core';

@Component({
  selector: 'basic',
  templateUrl: './basic.component.html'
})
export class BasicExampleComponent {
  myHeaders: { [header: string]: string | string[] } = {
    'Authorization': 'MyToken',
    'Another-Header': 'AnotherValue'
  };
}
