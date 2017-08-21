import { Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {
  ngOnInit(): void {
    Prism.highlightAll(false);
  }
}
