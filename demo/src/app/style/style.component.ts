import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'styles',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StyleComponent {

  constructor() { }

  customStyle = {
    selectButton: {
      "background-color": "yellow",
      "border-radius": "25px",
      "color": "#000"
    },
    clearButton: {
      "background-color": "#FFF",
      "border-radius": "25px",
      "color": "#000",
      "margin-left": "10px"
    },
    layout: {
      "background-color": "purple",
      "border-radius": "25px",
      "border": "none",
      "color": "#FFF",
      "font-size": "15px",
      "margin": "10px",
      "padding-top": "5px",
      "width": "500px"
    },
    previewPanel: {
      "background-color": "#894489",
      "border-radius": "0 0 25px 25px",
    }
  }
}
