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
export class CdkDragDropFreeDragPositionExample {

  xTemplate = 0;
  ytemplate = 0;

  dragElements = [
    {
      'x': 0, 'y': 700, 'r': 0
    },
  ];

  update(index: any, event: any) {
    console.log(event, index);
    this.dragElements[index].x += event.distance.x;
    this.dragElements[index].y += event.distance.y;
    document.getElementById('id' + index).style.transform = `translate3d(${this.dragElements[index].x}px, ${this.dragElements[index].y}px, 0px) rotate(${this.dragElements[index].r}deg)`;

    // this.dragElements.forEach()
    this.dragElements.forEach(element => {
      if (this.dragElements[index] !== element) {
        if (this.dragElements[index].r === 0) {
          if (this.dragElements[index].x < element.x && this.dragElements[index].x + 150 >= element.x) {
            document.getElementById('id' + index).style.backgroundColor = `red`;
          } else if (this.dragElements[index].x > element.x && this.dragElements[index].x  <= element.x + 150) {
            document.getElementById('id' + index).style.backgroundColor = `red`;
          } else {
            document.getElementById('id' + index).style.backgroundColor = `white`;
          }
        }
      }

    });
  }

  rotateImage(index: any) {
    this.dragElements[index].r += 90;
    if (this.dragElements[index].r >= 180) {
      this.dragElements[index].r -= 180;
    }
    console.log('id' + index);
    document.getElementById('id' + index).style.transform =
      `translate3d(${this.dragElements[index].x}px, ${this.dragElements[index].y}px, 0px) rotate(${this.dragElements[index].r}deg)`;
  }

  addElement() {
    this.dragElements.push({ 'x': 0, 'y': this.ytemplate, 'r': 0 });
    this.ytemplate += 100;
  }
}
