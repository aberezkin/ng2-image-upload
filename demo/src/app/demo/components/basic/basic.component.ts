import { Component } from '@angular/core';

@Component({
  selector: 'basic',
  templateUrl: './basic.component.html'
})
export class BasicExampleComponent {
  myHeaders: { [name: string]: any } = {
    'Authorization': 'MyToken',
    'Another Header': 'AnotherValue'
  };
}
