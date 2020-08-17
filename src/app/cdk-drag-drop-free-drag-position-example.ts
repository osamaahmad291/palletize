import { Component, OnChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
/**
 * @title Programmatically setting the free drag position
 */
@Component({
  selector: 'cdk-drag-drop-free-drag-position-example',
  templateUrl: 'cdk-drag-drop-free-drag-position-example.html',
  styleUrls: ['cdk-drag-drop-free-drag-position-example.css'],
})
export class CdkDragDropFreeDragPositionExample  {

  // constructor(private _sanitizer: DomSanitizer) { }

  dragElements = [
    {
      'x': 0, 'y': 0, 'r': 0
    },
    {
      'x': 10, 'y': 0, 'r': 0
    },
    {
      'x': 100
      ,
      'y': 150
      ,
      'r':
        90
    },
    {
      'x': 20, 'y': 30, 'r': 0
    },
    {
      'x': 0, 'y': 0, 'r': 0
    }
  ];

  dragPosition = { x: 0, y: 0 };


  update(index: any, event: any) {
    console.log(event, index);
    this.dragElements[index].x += event.distance.x;
    this.dragElements[index].y += event.distance.y;
  }

  rotateImage(index: any) {
    this.dragElements[index].r += 90;
    if (this.dragElements[index].r >= 360) {
      this.dragElements[index].r -= 360;
    }
    console.log('id' + index);
    document.getElementById('id' + index).style.transform = `translate3d(${this.dragElements[index].x}px, ${this.dragElements[index].y}px, 0px) rotate(${this.dragElements[index].r}deg)`;
  }

}
